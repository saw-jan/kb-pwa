import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/hymn.json';
import { GlobalContext } from '../context/GlobalContext';
import '../css/songList.css';

const Hymns = () => {
  const { hymns } = useContext(GlobalContext);
  return (
    <div>
      {hymns.map(({ id, no, title }) => (
        <Link to={`/${'hymn'}/${no}`} className='list' key={id}>
          <span>{no}. </span>
          <div className='title'>{title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Hymns;
