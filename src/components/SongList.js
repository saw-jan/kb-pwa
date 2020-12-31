import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Swipeable } from 'react-swipeable';
import EmptyList from './EmptyList';
import HymnData from './Hymns';
import ChorusData from './Chorus';
import BalChorusData from './BalChorus';
import '../css/songList.css';

const SongList = () => {
	const { activeTab, toggleTab } = useContext(GlobalContext);
	return (
		<div className='song-list'>
			<Bhajan activeTab={activeTab} toggleTab={toggleTab} />
			<Chorus activeTab={activeTab} toggleTab={toggleTab} />
			<BalChorus activeTab={activeTab} toggleTab={toggleTab} />
			<More activeTab={activeTab} toggleTab={toggleTab} />
		</div>
	);
};

const Bhajan = ({ activeTab, toggleTab }) => {
	const config = {
		onSwipedLeft: () => toggleTab('2', 'active-100'),
		onSwipedRight: () => false,
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	};
	const getMeClass = (activeTab) => {
		switch (activeTab) {
			case '1':
				return 'active';
			case '2':
				return 'inactive-100';
			case '3':
				return 'inactive-200';
			case '4':
				return 'inactive-300';
		}
	};
	return (
		<Swipeable {...config}>
			<div className={'bhajan ' + getMeClass(activeTab)}>
				<HymnData />
			</div>
		</Swipeable>
	);
};
const Chorus = ({ activeTab, toggleTab }) => {
	const config = {
		onSwipedLeft: () => toggleTab('3', 'active-200'),
		onSwipedRight: () => toggleTab('1', 'active-0'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	};
	const getMeClass = (activeTab) => {
		switch (activeTab) {
			case '1':
				return 'inactive--100';
			case '2':
				return 'active';
			case '3':
				return 'inactive-100';
			case '4':
				return 'inactive-200';
		}
	};
	return (
		<Swipeable {...config}>
			<div className={'chorus ' + getMeClass(activeTab)}>
				<ChorusData />
			</div>
		</Swipeable>
	);
};
const BalChorus = ({ activeTab, toggleTab }) => {
	const config = {
		onSwipedLeft: () => toggleTab('4', 'active-300'),
		onSwipedRight: () => toggleTab('2', 'active-100'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	};
	const getMeClass = (activeTab) => {
		switch (activeTab) {
			case '1':
				return 'inactive--200';
			case '2':
				return 'inactive--100';
			case '3':
				return 'active';
			case '4':
				return 'inactive-100';
		}
	};
	return (
		<Swipeable {...config}>
			<div className={'bal-chorus ' + getMeClass(activeTab)}>
				<BalChorusData />
			</div>
		</Swipeable>
	);
};
const More = ({ activeTab, toggleTab }) => {
	const config = {
		onSwipedLeft: () => false,
		onSwipedRight: () => toggleTab('3', 'active-200'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	};
	const getMeClass = (activeTab) => {
		switch (activeTab) {
			case '1':
				return 'inactive--300';
			case '2':
				return 'inactive--200';
			case '3':
				return 'inactive--100';
			case '4':
				return 'active';
		}
	};
	return (
		<Swipeable {...config}>
			<div className={'more ' + getMeClass(activeTab)}>
				<EmptyList />
			</div>
		</Swipeable>
	);
};
export default SongList;
