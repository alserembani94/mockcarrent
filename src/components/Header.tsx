import React from 'react';
import { IconContext } from 'react-icons';
import {
    IoIosArrowBack,
} from 'react-icons/io';

interface Props {
    title?: string,
}

const Header = ({ title }: Props) => {
    return (
        <header className="App-header">
            <div className="App-header-side">
                <IconContext.Provider value={{ size: '1.5em' }}>
                    <IoIosArrowBack />
                </IconContext.Provider>
            </div>
            <div className="App-header-middle">
                <p>{title}</p>
            </div>
            <div className="App-header-side">
                <div 
                    style={{
                        borderRadius: '50%',
                        backgroundColor: 'black',
                        width: 35,
                        height: 35,
                        border: '3px solid red',
                    }}
                />
            </div>
        </header>
    );
}

export default Header;