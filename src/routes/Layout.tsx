import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

// Importing main components for main layout
import {
    Header,
    Footer,
} from '../components';

import Home from '../pages/Home/Home';
import CarRent from '../pages/CarRent/CarRent';
import FileNotFound from '../pages/404/404';

type menuItem = {
    name: string,
    label: string,
    title: string,
    route: string
};

const Layout = () => {
    const [selectedMenu, setSelectedMenu] = React.useState({
        name: 'home',
        label: 'Home',
        title: 'SolaCar',
        route: '/',
    });
    const bottomNavigationList = [
        {
            name: 'home',
            label: 'Home',
            title: 'SolaCar',
            route: '/',
        },
        {
            name: 'carListing',
            label: 'Car Listing',
            title: 'Car Listing',
            route: '/carListing',
        },
        {
            name: 'carRent',
            label: 'Car Rent',
            title: 'Rent Car',
            route: '/carRent',
        },
        {
            name: 'promotions',
            label: 'Promotions',
            title: 'Promotion',
            route: '/promotions',
        },
        {
            name: 'user',
            label: 'User',
            title: 'User Setting',
            route: '/user',
        },
    ];

    const handleUpdateActive = (menu: menuItem) => {
        setSelectedMenu(menu);
    }

    return (
        <>
            <Header title={selectedMenu.title}/>
            <div className='Layout' style={{ width: '100%' }}>
                <Switch>
                    <Route path="/carrent">
                        <CarRent />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route>
                        <FileNotFound />
                    </Route>
                </Switch>
            </div>
            <Footer selectedMenu={selectedMenu} menuList={bottomNavigationList} updateActive={handleUpdateActive} />
        </>
    );
}

export default Layout;