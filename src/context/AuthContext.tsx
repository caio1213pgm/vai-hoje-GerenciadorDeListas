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
import { toast } from "sonner";

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
            return toast("As senhas não coincidem");
        }

        try {
            await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
                .then((userCredential) => {
                    const userl = userCredential.user;
                    setUser(userl);
                    addUserToFirestorage(data, userl);
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.code === "auth/email-already-in-use") {
                        return toast("Este email já está em uso. Tente outro.");
                    }
                    toast("Erro ao registrar usuário. Tente novamente.");
                });

            if (!auth.currentUser) {
                return toast("Usuário não autenticado. Por favor, faça login.");
            }
            await updateProfile(auth.currentUser, {
                displayName: data.username,
            });
        } catch (error) {
            toast("Erro ao criar usuário. Tente novamente.");
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
                    if (error.code === "auth/user-not-found") {
                        return toast(
                            "Usuário não encontrado. Verifique seu email."
                        );
                    }
                    if (error.code === "auth/invalid-credential") {
                        return toast("Senha incorreta. Tente novamente.");
                    }
                    toast("Erro ao fazer login. Tente novamente.");
                });
        } catch (error) {
            toast("Erro ao fazer login. Tente novamente.");
            console.log(error);
        }
    }

    async function signOutUser() {
        try {
            setLoading(true);
            await signOut(auth).then(() => {
                setLoading(false);
                setUser(undefined);
                toast("Você saiu com sucesso.");
            });
        } catch (error) {
            console.error(error);
            toast("Erro ao sair. Tente novamente.");
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
