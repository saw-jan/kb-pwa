import React from 'react';
import ActionBar from './components/ActionBar';
import TabMenu from './components/TabMenu';
import SongList from './components/SongList';
import { GlobalProvider } from './context/GlobalContext';
// css styles
import './css/app.css';

const MainApp = () => {
    return(
        <GlobalProvider>
            <div className="container">
                <ActionBar />
                <TabMenu />
                <SongList />
            </div>
        </GlobalProvider>
    )
}

export default MainApp;