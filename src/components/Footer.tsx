import React from 'react';
import { Link } from 'react-router-dom';

type menuItem = {
    name: string,
    label: string,
    title: string,
    route: string,
};

interface Props {
    menuList: menuItem[],
    selectedMenu: menuItem,
    updateActive: (menu: menuItem) => void,
}

const Footer = ({menuList, selectedMenu, updateActive}: Props ) => {
    const handleMenuChange = (menu: menuItem) => {
        updateActive(menu);
    }

    return (
        <footer>
            {
                menuList.map((navigationItem, index) => (
                    <Link
                        to={navigationItem.route}
                        className={`App-BottomNavigation-Button${navigationItem.name === selectedMenu.name ? ' Menu-Active': ''}`}
                        onClick={() => handleMenuChange(navigationItem)}
                        key={index}
                    >
                        <div className="App-BottomNavigation-Icon" data-menu={navigationItem.name} />
                        <p style={{ pointerEvents: 'none' }}>{navigationItem.label}</p>
                    </Link>
                ))
            }
        </footer>
    );
}

export default Footer;