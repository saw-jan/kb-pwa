import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/chorus.json';
import { GlobalContext } from '../context/GlobalContext';

const Chorus = () => {
	const { choruses } = useContext(GlobalContext);
	return (
		<div>
			{choruses.map(({ id, no, title }) => (
				<Link to={`/${'chorus'}/${no}`} className='list' key={id}>
					<span>{no}. </span>
					<div className='title'>{title}</div>
				</Link>
			))}
		</div>
	);
};

export default Chorus;
