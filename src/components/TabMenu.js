import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../css/tabMenu.css';

const TabMenu = () => {
    const {activeTab, toggleTab} = useContext(GlobalContext);
    const [activeTabClass, setActiveTabClass] = useState('active-0');
    const tab1 = () => {
        toggleTab('1');
        setActiveTabClass('active-0');
    }
    const tab2 = () => {
        toggleTab('2');
        setActiveTabClass('active-100')
    }
    const tab3 = () => {
        toggleTab('3');
        setActiveTabClass('active-200')
    }
    const tab4 = () => {
        toggleTab('4');
        setActiveTabClass('active-300')
    }
    return(
        <div className="tab-menu">
            <div className="tab col1"><label onClick={tab1} className={(activeTab==='1'?"active-tab":"")}>BHAJAN</label><span className={`active  `+activeTabClass}></span></div>
            <div className="tab col2"><label onClick={tab2} className={(activeTab==='2'?"active-tab":"")}>CHORUS</label><span></span></div>
            <div className="tab col3"><label onClick={tab3} className={(activeTab==='3'?"active-tab":"")}>BAL CHORUS</label><span></span></div>
            <div className="tab col4"><label onClick={tab4} className={(activeTab==='4'?"active-tab":"")}>MORE</label><span></span></div>
        </div>
    )
}

export default TabMenu;