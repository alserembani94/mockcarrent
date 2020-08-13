import React from 'react';
import {
    Switch,
    Route,
    useHistory,
    useRouteMatch,
} from 'react-router-dom';

import FileNotFound from '../404/404';
import { TabMenu } from '../../components';

type menuItem = {
    name: string,
    label: string,
    route?: string,
};

const Art = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 120">
    <g transform="translate(-294 -198)">
        <line y1="100" transform="translate(308.5 222.5)" fill="none" stroke="#cfcfcf" stroke-linecap="round" stroke-width="2"/>
        <circle cx="6" cy="6" r="6" transform="translate(302 220)" fill="#b80b0b"/>
    </g>
</svg>
);

// Main Routing for CarRent
const CarRent = () => {
    const [activeTab, setActiveTab] = React.useState({
        name: 'detailing',
        label: 'Car detailing',
    });

    const history = useHistory();
    const match = useRouteMatch();

    const tabList = [
        {
            name: 'detailing',
            label: 'Car detailing',
            route: `${match.url}/detailing`,
        },
        {
            name: 'renting',
            label: 'Car rent',
            route: `${match.url}/renting`,
        },
        {
            name: 'listing',
            label: 'Car Listing',
            route: `${match.url}/listing`,
        },
    ];
    const handleActiveTab = (selectedTab: menuItem) => {
        setActiveTab(selectedTab);
        selectedTab.route && history.push(selectedTab.route);

    }

    return (
        <main className='CarRent'>
            <TabMenu tabList={tabList} activeTab={activeTab} updateActiveTab={handleActiveTab} />
            <Switch>
                <Route path={`${match.path}/renting`}>
                    <Renting />
                </Route>
                <Route path={`${match.path}/`}>
                    <FileNotFound />
                </Route>
            </Switch>
        </main>
    );
}

// Renting Page
const Renting = () => {
    const carList = [
        {
            brand: 'Perdua',
            model: 'AXIA 2019',
            price: 'RM16.96',
            pickUp: {
                time: new Date('2020-06-29T10:30:00Z'),
                location: 'D6 Office Sentul, Jalan Sentul',
            },
            return: {
                time: new Date('2020-06-30T21:40:00Z'),
                location: 'KL Sentral, Kuala Lumpur Sentral',
            },
            image: 'https://i.imgur.com/PGa6gF9.png',
        }
    ];
    return (
        <>
            <div className='Seperator' />
            <section className='CarRent-Title'>
                <p>Select a car</p>
            </section>
            <div className='Seperator' />
            <section className='CarRent-CarDisplay'>
                {
                    carList.map((carItem, carIndex) => (
                        <div key={carIndex}>
                            <p>{carItem.brand} {carItem.model}<span> - {carItem.price}</span></p>
                            <img src={carItem.image} alt={`${carItem.brand} ${carItem.model}`} />

                            <div style={{ width: '100%' }}>
                                <p className='CarRent-Title'>Pickup</p>
                                <div className='CarRent-RentDetail'>
                                    <div className='CarRent-RentDetail-Art'>
                                        <Art />
                                    </div>
                                    <div className='CarRent-RentDetail-Item'>
                                        <div className='CarRent-RentDetail-Row'>
                                            <p className='CarRent-RentDetail-Item-Label'>Time</p>
                                            <p className='CarRent-RentDetail-Item-Value'>Mon 29/06 <span>10:30</span></p>
                                        </div>
                                        <div className='CarRent-RentDetail-Row'>
                                            <p className='CarRent-RentDetail-Item-Label'>Location</p>
                                            <p className='CarRent-RentDetail-Item-Value'><span>{carItem.pickUp.location}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <p className='CarRent-Title'>Return</p>
                                <div className='CarRent-RentDetail'>
                                    <div className='CarRent-RentDetail-Art'>
                                        <Art />
                                    </div>
                                    <div className='CarRent-RentDetail-Item'>
                                        <div className='CarRent-RentDetail-Row'>
                                            <p className='CarRent-RentDetail-Item-Label'>Time</p>
                                            <p className='CarRent-RentDetail-Item-Value'>Tue 30/06 <span>21:40</span></p>
                                        </div>
                                        <div className='CarRent-RentDetail-Row'>
                                            <p className='CarRent-RentDetail-Item-Label'>Location</p>
                                            <p className='CarRent-RentDetail-Item-Value'><span>{carItem.return.location}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
            <section className='CarRent-Action'>
                <div className='CarRent-Action-Row-1'>
                    <div className='CarRent-Button' data-button='2'>
                        <p>Edit time and location</p>
                    </div>
                    <div className='CarRent-Button' data-button='2'>
                        <p>Edit car selection</p>
                    </div>
                </div>
                <div className='CarRent-Button CarRent-Button-Submit' data-button='1'>CONFIRM AND PAY</div>
            </section>
        </>
    );
}

export default CarRent;