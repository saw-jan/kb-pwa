import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import HymnData from './Hymns';
import ChorusData from './Chorus';
import BalChorusData from './BalChorus';
import '../css/songList.css';

const SongList = () => {
    const {activeTab} = useContext(GlobalContext);
    return(
        <div className="song-list">
            <Bhajan activeTab={activeTab}/>
            <Chorus activeTab={activeTab}/>
            <BalChorus activeTab={activeTab}/>
            <More activeTab={activeTab}/>
        </div>
    )
}

const Bhajan = ({activeTab}) => {
    const getMeClass = activeTab => {
        switch(activeTab){
            case '1':
                return('active');
            case '2':
                return('inactive-100');
            case '3':
                return('inactive-200');
            case '4':
                return('inactive-300');
        }  
    }
    return(
        <div className={"bhajan "+getMeClass(activeTab)}>
            <HymnData />
        </div>
    )
}
const Chorus = ({activeTab}) => {
    const getMeClass = activeTab => {
        switch(activeTab){
            case '1':
                return('inactive--100');
            case '2':
                return('active');
            case '3':
                return('inactive-100');
            case '4':
                return('inactive-200');
        }  
    }
    return(
        <div className={"chorus "+getMeClass(activeTab)}>
            <ChorusData />
        </div>
    )
}
const BalChorus = ({activeTab}) => {
    const getMeClass = activeTab => {
        switch(activeTab){
            case '1':
                return('inactive--200');
            case '2':
                return('inactive--100');
            case '3':
                return('active');
            case '4':
                return('inactive-100');
        }  
    }
    return(
        <div className={"bal-chorus "+getMeClass(activeTab)}>
            <BalChorusData />
        </div>
    )
}
const More = ({activeTab}) => {
    const getMeClass = activeTab => {
        switch(activeTab){
            case '1':
                return('inactive--300');
            case '2':
                return('inactive--200');
            case '3':
                return('inactive--100');
            case '4':
                return('active');
        }  
    }
    return(
        <div className={"more "+getMeClass(activeTab)}>
            <h1>More</h1>
        </div>
    )
}
export default SongList;