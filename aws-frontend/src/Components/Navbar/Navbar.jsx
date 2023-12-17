import { useEffect, useState } from "react";
import logo from "../../Images/logo.png";

const Navbar = () => {

    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    });


    const navItems = [
        {link: "Home", path: "home"},
        {link: "About", path: "about"},
        {link: "Services", path: "services"},
        {link: "Contact", path: "contact"},
    ]

    return (
        <>
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav>
                <div>
                    <a href=""><img src={logo} alt="" className="w-10 inline-block items-center" /><span className="">AWS Cloud Club LPU</span></a>
                </div>

            </nav>
        </header>
        </>
    )
}

export default Navbar