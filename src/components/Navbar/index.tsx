import { useEffect, useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

import Button from "../Button";

import { useStateContext } from "../../context/StateContext";

import { navLinks } from "../../lib/utils";

import Logo from "../../assets/logo.svg";

import classes from "./index.module.css";

const Navbar = () => {
  const { screenSize } = useStateContext();
  const isMobile = screenSize <= 768;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const NavToggle = isOpen ? MdClose : MdOutlineMenu;

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.container}>
      <div>
        <a href="/">
          <img src={Logo} alt="shortly logo" className={classes.logo} />
        </a>
      </div>

      <div className="menu">
        <NavToggle
          className={classes.menuIcon}
          size={32}
          onClick={handleClick}
        />
      </div>

      <div
        className={[
          classes.navigation,
          isOpen ? classes.isVisible : classes.notVisible,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={classes.links}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.btnWrapper}>
          <Button className={classes.login}>Login</Button>
          <Button className={classes.signup}>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
