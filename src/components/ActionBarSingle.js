import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import '../css/actionBar.css';

const ActionBar = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="action-bar single">
      <div className="col1">
        <IosArrowBack onClick={goBack} fontSize="30px" color="#ffffff" />
      </div>
      <div className="col2">
        <div className="song-title">{props.title}</div>
      </div>
    </div>
  );
};

export default ActionBar;
