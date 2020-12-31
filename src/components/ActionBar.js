import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from '../context/GlobalContext';
import IosSearch from 'react-ionicons/lib/IosSearch'
import MdClose from 'react-ionicons/lib/MdClose'
import Logo from './LogoIcon';
import '../css/actionBar.css';

const ActionBar = () => {
    const {activeTab, isSearch, toggleSearch, searchInput, getSearchInput} = useContext(GlobalContext);
    const [searchText, setSearchText] = useState('');
    const searchClick = () => {
        toggleSearch(true);
    }
    const onCancel = () => {
        toggleSearch(false,'cancel');
        setSearchText('');
    }
    const handleInput = (e) => {
        setSearchText(e.target.value);
        getSearchInput(e.target.value);
    }
    return(
        <div className={isSearch?"action-bar ac-search":"action-bar"}>
            <div className="col1">
                {(()=>{if(!isSearch){
                        return(<span className="menu"><Logo width="25px" /></span>)
                    }else{
                        return(<span className="menu" onClick={onCancel}><MdClose fontSize="25px" color="#ffffff" /></span>);
                    }
                })()}
            </div>
            {(()=>{if(!isSearch){
                return(
                    <div className="col2">
                        <label className="app-title">Khristiya Bhajan</label>
                    </div>
                )}
                })()}
            <div className={isSearch?"col3 search":"col3"}>
            <span onClick={searchClick} className="search-btn"><IosSearch fontSize="25px" color="#ffffff" /></span>
                {(()=>{if(isSearch){
                    return(
                        <input type="text" placeholder="search hymns" autoFocus autoComplete="off" value={searchText} onChange={handleInput}/>
                    )}
                })()}
            </div>
        </div>
    )
}

export default ActionBar;