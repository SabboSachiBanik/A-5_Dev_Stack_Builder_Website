import logo from "../assets/logo-text.png";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white p-3 shadow-sm">

            <nav className="container mx-auto flex items-center justify-between">

                {/* Hamburger */}
                <button className="md:hidden">
                    <img
                        src="/hamburger.png"
                        alt="Menu"
                        className="w-7 h-7"
                    />
                </button>


                {/* Logo */}
                <div className="md:order-1">
                    <img
                        src={logo}
                        alt="Dev Stack Logo"
                        className="w-32"
                    />
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:block md:order-2">
                    <ul className="flex gap-5 items-center">

                        <li>
                            <a href="">Home</a>
                        </li>

                        <li>
                            <a href="">Technologies</a>
                        </li>

                        <li>
                            <a href="">Projects</a>
                        </li>

                        <li>
                            <a href="">About</a>
                        </li>

                        <li>
                            <a href="">Contact</a>
                        </li>

                    </ul>
                </div>


                {/* Buttons */}
                <div className="flex gap-2 md:order-3">

                    <button
                        className="px-3 md:px-4 py-1 border border-transparent rounded-full
                        bg-transparent text-black
                        hover:bg-[#D91B7E] hover:text-white"
                    >
                        Sign In
                    </button>

                    <button
                        className="px-3 md:px-4 py-1 border-2 border-[#D91B7E] rounded-full
                        bg-[#D91B7E] text-white
                        hover:bg-transparent hover:text-[#D91B7E]"
                    >
                        Sign Up
                    </button>

                </div>

            </nav>

        </header>
    );
};

export default Header;