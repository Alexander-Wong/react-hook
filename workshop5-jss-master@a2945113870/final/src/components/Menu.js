import React, {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from "react-router-dom";
import useMenuData from '../hooks/useMenuData';

const Menu = () => {
  const [isOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isOpen);
  }
  return (
    <>
      <div className="menu" >
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={(handleMenuClick)}
          width={25}
          height={20}
          strokeWidth={2}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <MenuContent isOpen={isOpen} handleClick={handleMenuClick}/>

    </>
  );

};

const MenuContent = ({isOpen, handleClick}) => {
  const menuData = useMenuData();

  
  if (isOpen) {
    return (
      <div className="menu-content">
        <ul>
          {menuData.map(link => {
            return (
              <li key={link.id}><Link to={link.url} onClick={handleClick}>{link.name}</Link></li>
            );
          })}
        </ul>
      </div>
    );
  }
  return null;
}

export default Menu;
