import React from 'react';
import MdArrowBack from 'react-ionicons/lib/MdArrowBack';
import MdArrowForward from 'react-ionicons/lib/MdArrowForward';
import '../css/toolBar.css';

var parseHTML = require('html-react-parser');
const COLOR = '#FFFFFF';

const ToolBarSingle = (props) => {
  const nextSong = () => {
    props.nextSong();
  };
  const previousSong = () => {
    props.previousSong();
  };
  return (
    <div className="toolbar">
      <div className="col1">
        <MdArrowBack onClick={previousSong} fontSize="20px" color={COLOR} />
      </div>
      <div className="col2">{props.catNum}</div>
      <div className="col3">
        {(() => {
          if (props.scaleTaal !== '- | -') {
            return props.scaleTaal;
          } else {
            return <span>--</span>;
          }
        })()}
      </div>
      <div className="col4">
        <MdArrowForward onClick={nextSong} fontSize="20px" color={COLOR} />
      </div>
    </div>
  );
};

export default ToolBarSingle;
