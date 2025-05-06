const Login = () => {
    return (
        <>
            <div className="w-screen h-screen bg-background p-16 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-[1440px] h-full bg-white rounded-lg p-2 flex flex-row gap-2 items-center justify-center shadow-xl">
                    <div className="w-full h-full bg-[url(./src/assets/cip1.png)] bg-cover bg-no-repeat bg-center rounded-lg"></div>
                    <div className="w-full h-full px-32 gap-8 flex flex-col justify-center">
                        <div className="flex flex-col gap-4">
                            <img src="./logo-horizontal-black.png" alt="Logo Sinergia" className="h-12 w-38" />
                            <div className="flex flex-col gap-2">
                                <h1 className="font-poppins font-semibold text-xl">Fazer Login</h1>
                                <p className="font-poppins font-light text-sm">Realize Login para entrar na plataforma.</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-gray"></div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <span className="font-poppins font-light text-sm">Email</span>
                                <input type="text" placeholder="Digite seu Email..." className="w-full h-10 p-2 border-2 border-gray rounded-lg placeholder:font-poppins placeholder:font-light placeholder:text-xs placeholder:text-gray focus:outline-0 focus:border-main duration-100" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-poppins font-light text-sm">Senha</span>
                                <input type="password" placeholder="Digite sua Senha..." className="w-full h-10 p-2 border-2 border-gray rounded-lg placeholder:font-poppins placeholder:font-light placeholder:text-xs placeholder:text-gray focus:outline-0 focus:border-main duration-100" />
                            </div>
                        </div>
                        <button className="w-full h-10 bg-main rounded-lg font-poppins font-semibold text-white text-sm hover:opacity-80 cursor-pointer duration-300">Fazer Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login