import React, { useState, useEffect } from 'react';
import './Navbar.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        const savedMode = localStorage.getItem("darkMode");
        if(savedMode) {
            setDarkMode(savedMode === "true");
            document.body.classList.add(savedMode === "true" ? "dark-mode" : "light-mode");
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", newMode);
        document.body.classList = newMode ? "dark-mode" : "light-mode";
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`} 
             data-aos="fade-down"
             data-aos-delay="100">
            <div className='container'>
                <div className='navbar__container'>
                    {/* Mobile menu button (hidden on desktop) */}
                    <button 
                        className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`navbar__list ${mobileMenuOpen ? 'open' : ''}`}>
                        <li className='navbar__item' data-aos="fade-right" data-aos-delay="200">
                            <a className='navbar__link' href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        </li>
                        <li className='navbar__item' data-aos="fade-right" data-aos-delay="300">
                            <a className='navbar__link' href="#" onClick={() => setMobileMenuOpen(false)}>About</a>
                        </li>
                        <li className='navbar__item' data-aos="fade-right" data-aos-delay="400">
                            <a className='navbar__link' href="#" onClick={() => setMobileMenuOpen(false)}>Course</a>
                        </li>
                    </ul>
                    
                    <a className='navbar__logo' href="#" data-aos="fade-down" data-aos-delay="100">
                        Smart Academy
                    </a>
                    
                    <div className={`navbar__actions ${mobileMenuOpen ? 'open' : ''}`} data-aos="fade-left" data-aos-delay="500">
                        <button className='navbar__btn'>Explore Course</button>
                        <button onClick={toggleDarkMode} className='toggleMode'>
                            {darkMode ? (
                                <span className="sun-icon">☀️</span>
                            ) : (
                                <span className="moon-icon">🌙</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;