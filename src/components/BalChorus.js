import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import data from '../data/bal-chorus.json';
import { GlobalContext } from '../context/GlobalContext';

const BalChorus = () => {
    const {bChoruses} = useContext(GlobalContext);
    return(
        <div>
            {bChoruses.map(({id, no, title}) => (
                <Link to={`/single/${'bChorus'}/${no}`} className="list" key={id}><span>{no}. </span><div className="title">{title}</div></Link>
            ))}
        </div>
    )
}

export default BalChorus;