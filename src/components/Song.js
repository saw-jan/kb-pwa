import React from 'react';
import { Swipeable } from 'react-swipeable';
import '../css/song.css';

var parseHTML = require('html-react-parser');

const Song = (props) => {
  const config = {
    onSwipedLeft: () => props.nextSong(),
    onSwipedRight: () => props.previousSong(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  };

  const lyrics = props.lyrics;
  return (
    <Swipeable {...config}>
      <div className='lyrics-wrap'>
        <div className='lyrics'>
          {(() => {
            if (lyrics) return parseHTML(lyrics);
          })()}
        </div>
      </div>
    </Swipeable>
  );
};
export default Song;
