import React, { Component, useState, createContext } from "react";
import bhajan from '../data/hymn.json';
import chorus from '../data/chorus.json';
import balChorus from '../data/bal-chorus.json';

export const GlobalContext = createContext();

export  const GlobalProvider = props => {
    const [activeTab, setActiveTab] = useState('1'); 
    const [isSearch, setIsSearch] = useState(false); 
    const [searchInput, setSearchInput] = useState('');
    const [hymns, searchedHymns] = useState(bhajan);
    const [choruses, searchedChorus] = useState(chorus);
    const [bChoruses, searchedBalChorus] = useState(balChorus);
    const toggleTab = tab => {
        setActiveTab(tab);
    }
    const toggleSearch = (value, cancel = '') => {
        setIsSearch(value);
        if(cancel==='cancel'){
            setSearchInput('');
            searchedHymns(bhajan);
            searchedChorus(chorus);
            searchedBalChorus(balChorus);
        }
    }
    const getSearchInput = (input) => {
        setSearchInput(input);
        searchedHymns(searchBh(input));
        searchedChorus(searchCh(input));
        searchedBalChorus(searchBCh(input));
    }
    const searchBh = (search) => {
        return(
            bhajan.filter(song=>(song.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || song.no.toString() === search))
        )
    }
    const searchCh = (search) => {
        return(
            chorus.filter(song=>(song.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || song.no.toString() === search))
        )
    }
    const searchBCh = (search) => {
        return(
            balChorus.filter(song=>(song.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || song.no.toString() === search))
        )
    }
    return(
        <GlobalContext.Provider value={{activeTab, isSearch, searchInput, toggleTab, toggleSearch, getSearchInput, hymns, choruses, bChoruses}}>
            {props.children}
        </GlobalContext.Provider>
    )
}