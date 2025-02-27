"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:1337/auth/local/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.error?.message || "Error registering user", {
                    position: "bottom-left",
                });
                return;
            }

            toast.success("User registered successfully!", {
                position: "bottom-left",
            });

            setTimeout(() => {
                router.push("/login");
            }, 1500);
        } catch {
            toast.error("Error registering user", {
                position: "bottom-left",
            });
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-start bg-[#F9F9F9] w-full">
            <div className="bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.15)] p-8 w-full sm:w-96 lg:w-[450px] md:ml-20 lg:ml-32 xl:ml-40 2xl:ml-80 z-10 scale-80 md:scale-90 lg:scale-95 xl:scale-105 2xl:scale-125">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/imgs/assets/logo.png"
                        alt="Logo Orange"
                        width={150}
                        height={50}
                    />
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold text-[#4A4A4A] mb-1">
                            Username
                        </label>
                        <div className="flex items-center border border-black bg-[#F9F9F9] shadow-sm px-4 py-2">
                            <input
                                type="username"
                                placeholder="username"
                                className="flex-grow bg-transparent focus:outline-none text-[#4A4A4A]"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <div className="ml-2">
                                <Image
                                    src="/imgs/assets/user.png"
                                    alt="User Icon"
                                    width={16}
                                    height={16}
                                    className="object-contain opacity-40"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#4A4A4A] mb-1">
                            Email
                        </label>
                        <div className="flex items-center border border-black bg-[#F9F9F9] shadow-sm px-4 py-2">
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="flex-grow bg-transparent focus:outline-none text-[#4A4A4A]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="ml-2">
                                <Image
                                    src="/imgs/assets/mail.png"
                                    alt="Email Icon"
                                    width={16}
                                    height={16}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <label className="block text-sm font-semibold text-[#4A4A4A] mb-1">
                                Password
                            </label>
                            <div className="flex items-center border border-black bg-[#F9F9F9] shadow-sm px-4 py-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="flex-grow bg-transparent focus:outline-none text-[#4A4A4A]"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="ml-2">
                                    <Image
                                        src="/imgs/assets/lock.png"
                                        alt="Lock Icon"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="show-password"
                                    className="w-4 h-4 border border-black bg-[#F9F9F9] shadow-sm focus:outline-none mr-2"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                                <label htmlFor="show-password" className="text-sm text-[#4A4A4A] font-light">
                                    Mostrar a senha.
                                </label>
                            </div>
                            <div className="">
                                <button className="w-full bg-gradient-to-r from-[#AE23A9] to-[#DC4E1B] text-white py-2">
                                    Cadastrar
                                </button>
                                <div className="text-center text-xs text-[#4A4A4A] font-light mt-8">
                                    <a href="#">Termos de uso</a> · <a href="#">Política de privacidade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="hidden lg:flex flex-grow">
                <Image
                    src="/imgs/assets/bg.jpg"
                    alt="Imagem de fundo"
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full"
                />
            </div>

            <ToastContainer />
        </div>
    );
}