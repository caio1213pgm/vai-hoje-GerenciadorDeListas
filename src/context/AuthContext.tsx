import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    GithubAuthProvider,
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
    singInUserFromGoogle: () => void;
    singInUserFromGitHub: () => void;
};

const AuthContext = createContext<authProps>({
    user: {} as User,
    loading: false,
    createNewUser: () => [],
    signInUser: () => [],
    signOutUser: () => [],
    singInUserFromGoogle: () => [],
    singInUserFromGitHub: () => [],
});

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(false);
    const googleProvier = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

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

    async function singInUserFromGoogle() {
        await signInWithPopup(auth, googleProvier)
            .then((result) => {
                const userl = result.user;

                setUser(userl);

                const data: FormRegisterData = {
                    email: userl.email ?? "",
                    username: userl.displayName ?? "",
                    password: "",
                    confirmPassword: "",
                };
                addUserToFirestorage(data, userl);
            })
            .catch((error) => {
                console.log(error);
                toast("Erro ao fazer login com Google. Tente novamente.");
            });
    }

    async function singInUserFromGitHub() {
        await signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                const userl = result.user;
                setUser(userl);
                toast("Login realizado com sucesso!");
                const data: FormRegisterData = {
                    email: userl.email ?? "",
                    username: userl.displayName ?? "",
                    password: "",
                    confirmPassword: "",
                };
                addUserToFirestorage(data, userl);
            })
            .catch((error) => {
                if (
                    error.code ===
                    "auth/account-exists-with-different-credential"
                ) {
                    return toast("Já existe uma conta com este email");
                }
                console.log(error);
                toast("Erro ao fazer login com GitHub. Tente novamente.");
            });
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
            value={{
                user,
                loading,
                createNewUser,
                signInUser,
                signOutUser,
                singInUserFromGoogle,
                singInUserFromGitHub,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
