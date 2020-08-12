import React from 'react';

interface Props {
    title?: string,
}

const Header = ({ title }: Props) => {
    return (
        <header className="App-header">
            <div className="App-header-side">
                <p>Left</p>
            </div>
            <div className="App-header-middle">
                <p>{title}</p>
            </div>
            <div className="App-header-side">
                <p>Right</p>
            </div>
        </header>
    );
}

export default Header;