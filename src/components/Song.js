import React from 'react';
import '../css/song.css';

var parseHTML = require('html-react-parser');

const Song = (props) => {
    const lyrics = props.lyrics;
    return(
        <div className="lyrics-wrap">
            <div className="lyrics">
                {(()=>{
                    if(lyrics)return(parseHTML(lyrics))
                })()}
            </div>
        </div>
    )
}
export default Song;