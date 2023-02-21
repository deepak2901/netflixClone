import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        setShow('#111');
      } else {
        setShow('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ show }}>
      <img src={`${process.env.PUBLIC_URL}/netflix-logo.png`} alt="Netflix Logo" className="navbar__logo" />
      <img src={`${process.env.PUBLIC_URL}/netflix-avatar.png`} alt="Netflix Avatar" className="navbar__avatar" />
    </nav>
  );
};

export default Navbar;
