import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const BalChorus = () => {
  const { bChoruses } = useContext(GlobalContext);
  return (
    <div>
      {bChoruses.map(({ id, no, title }) => (
        <Link to={`/${'balchorus'}/${no}`} className="list" key={id}>
          <span>{no}. </span>
          <div className="title">{title}</div>
        </Link>
      ))}
    </div>
  );
};

export default BalChorus;
