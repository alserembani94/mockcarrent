import React from 'react';

type tabItem = {
    name: string,
    label: string,
    route?: string,
};

interface Props {
    tabList: tabItem[],
    activeTab: tabItem,
    updateActiveTab: (tab: tabItem) => void,
}

const TabMenu = ({tabList, activeTab, updateActiveTab}: Props) => {
    const handleTabChange = (tab: tabItem) => {
        updateActiveTab(tab);
    }

    return (
        <ul className='Tab'>
            {
                tabList.map((tabItem, index) => (
                    <li
                        className={`Tab-Item${tabItem.name === activeTab.name ? ' Tab-Item-Active': ''}`}
                        onClick={() => handleTabChange(tabItem)}
                        key={index}
                    >{tabItem.label}</li>
                ))
            }
        </ul>
    );
}

export default TabMenu;