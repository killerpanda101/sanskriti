import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {Button} from '../../globalStyles'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Sanskriti
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/announcements">Announcements</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/events">Events</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/team">The Team</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/contact">Contact Us</NavLink>
              </NavItem>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
