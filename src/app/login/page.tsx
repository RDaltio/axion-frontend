import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-start bg-[#F9F9F9] w-full">
            <div className="bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.15)] p-8 w-96 ml-20 z-10">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/imgs/assets/logo.png"
                        alt="Logo Orange"
                        width={150}
                        height={50}
                    />
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#4A4A4A] mb-1">
                            Email
                        </label>
                        <div className="flex items-center border border-black bg-[#F9F9F9] shadow-sm px-4 py-2">
                            <input
                                type="email"
                                placeholder="seunome@email.com"
                                className="flex-grow bg-transparent focus:outline-none"
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

                    <div>
                        <label className="block text-sm font-medium text-[#4A4A4A] mb-1">
                            Password
                        </label>
                        <div className="flex items-center border border-black bg-[#F9F9F9 shadow-sm px-4 py-2">
                            <input
                                type="password"
                                placeholder="Password"
                                className="flex-grow bg-transparent focus:outline-none"
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

                    <div className="flex items-center">
                        <input type="checkbox" id="show-password" className="mr-2" />
                        <label htmlFor="show-password" className="text-sm text-[#4A4A4A]">
                            Mostrar a senha.
                        </label>
                    </div>
                    <a href="#" className="text-orange-500 text-sm">
                        Problemas para acessar sua conta?
                    </a>
                    <button className="w-full bg-gradient-to-r from-[#AE23A9] to-[#DC4E1B] text-white py-2">
                        Acessar
                    </button>
                    <div className="text-center text-sm text-[#4A4A4A]">ou</div>
                    <button className="w-full border border-gray-300 py-2 text-[#4A4A4A]">
                        Cadastrar
                    </button>
                    <div className="text-center text-xs text-[#4A4A4A]">
                        <a href="#">Termos de uso</a> · <a href="#">Política de privacidade</a>
                    </div>
                </form>
            </div>

            <div className="hidden lg:flex flex-grow">
                <Image
                    src="/imgs/assets/bg.jpg"
                    alt="Imagem de fundo"
                    layout="responsive"
                    width={800}
                    height={600}
                    className="object-cover h-full"
                />
            </div>
        </div>
    );
}