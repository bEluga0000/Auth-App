const NavBar = () => {
    return (
        <div className="h-16 border shadow-lg flex items-center justify-between p-2 sm:p-4 md:p-6 fixed w-full top-0 bg-white z-50">
            <div className="flex">
                <div className="text-3xl font-black">
                    AUTH 🔓
                </div>
            </div>
            <div className="p-2">
                <img src="/profile.png" alt="" className="h-10 rounded-lg" />
            </div>
        </div>
    );
}

export default NavBar;
