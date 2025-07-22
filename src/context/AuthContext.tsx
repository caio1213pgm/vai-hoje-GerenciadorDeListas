import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../service/firebase";
import type { FormRegisterData } from "../components/forms/FormRegister";
import type { FormLoginData } from "../components/forms/FormLogin";
import addUserToFirestorage from "../hooks/useAddUserToFirestorage";

type authProps = {
  user: User | undefined;
  loading: boolean;
  createNewUser: (data: FormRegisterData) => void;
  signInUser: (data: FormLoginData) => void;
  signOutUser: () => void;
};

const AuthContext = createContext<authProps>({
  user: {} as User,
  loading: false,
  createNewUser: () => [],
  signInUser: () => [],
  signOutUser: () => [],
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return setUser(user);
      }
    });
  }, []);

  async function createNewUser(data: FormRegisterData) {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setLoading(false);
      return alert("As senhas não coincidem");
    }

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const userl = userCredential.user;
          setUser(userl);
          addUserToFirestorage(data, userl);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Erro ao registrar usuário:", error);
          if (error.code === "auth/email-already-in-use") {
            return alert("Este email já está em uso. Tente outro.");
          }
          alert("Erro ao registrar usuário. Tente novamente.");
        });

      if (!auth.currentUser) {
        return alert("Usuário não autenticado. Por favor, faça login.");
      }
      await updateProfile(auth.currentUser, {
        displayName: data.username,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  async function signInUser(data: FormLoginData) {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const userl = userCredential.user;
          setUser(userl);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Erro ao fazer login:", error);
          if (error.code === "auth/user-not-found") {
            return alert("Usuário não encontrado. Verifique seu email.");
          }
          if (error.code === "auth/wrong-password") {
            return alert("Senha incorreta. Tente novamente.");
          }
          alert("Erro ao fazer login. Tente novamente.");
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function signOutUser() {
    try {
      setLoading(true);
      await signOut(auth).then(() => {
        setLoading(false);
        setUser(undefined);
        console.log("Usuário desconectado");
      });
    } catch (error) {
      console.error("Erro ao sair:", error);
      alert("Erro ao sair. Tente novamente.");
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, createNewUser, signInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
