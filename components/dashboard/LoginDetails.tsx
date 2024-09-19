const LoginDetails = ()=>{
    return <div className="mx-5 mt-3 ">
        <div className="border rounded-lg bg-slate-200">
            <p className="px-2 py-0.5">Whereyou are logged in</p>
        </div>
        <div className="mt-2 border rounded-lg">
            <div className="grid grid-cols-12 place-items-center py-1 px-1">
                {/* grid 1 */}
                <div className="md:col-span-3 col-span-5  justify-self-center flex items-center gap-2 ">
                    <div className="md:block hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <p>Chrome</p>
                        </div>
                        <div>
                            <p>Chrome version 12.0.0</p>
                        </div>
                        <div className="md:hidden">
                            <p>windows name</p>
                        </div>
                    </div>
                </div>
                {/* grid 2 */}
                <div className=" justify-self-center md:col-span-3  hidden md:block">
                    <div>
                        <p></p>windows Name
                    </div>
                </div>
                {/* grid 3 */}
                <div className="md:col-span-3  justify-self-center col-span-5">
                    <div>
                        <p></p>Location Details
                    </div>
                    <div className="md:hidden">
                        <p></p>Login time
                    </div>
                </div>
                {/* grid 4 */}
                <div className="  justify-self-center md:col-span-2 md:block hidden">
                    <div>
                        <p></p>Login time
                    </div>
                </div>
                {/* logout button */}
                <div className="md:col-span-1 col-span-2  justify-self-center"> 
                    <div className="border px-1 py-2 rounded-lg cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default LoginDetails