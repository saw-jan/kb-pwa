import React, { useState, useEffect } from 'react';
import ActionBar from './components/ActionBarSingle';
import ToolBar from './components/ToolBarSingle';
import Song from './components/Song';
import bhajan from './data/hymn.json';
import chorus from './data/chorus.json';
import balChorus from './data/bal-chorus.json';

const SingleSong = ({ match }) => {
  let song_no = match.params.id;
  const song_category = match.params.category;
  const [songNo, setSongNo] = useState(song_no);
  const [totalSong, setTotalSong] = useState(0);
  const [thisSong, setThisSong] = useState([]);

  useEffect(() => {
    getThisSong(song_category, songNo);
  }, []);
  const getThisSong = (category, num) => {
    switch (category) {
      case 'hymn':
        setTotalSong(bhajan.length);
        getThisHymn('Bhajan', num);
        break;
      case 'chorus':
        setTotalSong(chorus.length);
        getThisChorus('Chorus', num);
        break;
      case 'bChorus':
        setTotalSong(balChorus.length);
        getThisBalChorus('Bal Chorus', num);
        break;
      case 'other':
        getThisOther('Others', num);
        break;
    }
  };

  const getThisHymn = (category, num) => {
    let song = bhajan.filter(
      (song) =>
        song.category === category && song.no.toString() === num.toString()
    );
    setThisSong(song[0]);
  };

  const getThisChorus = (category, num) => {
    let song = chorus.filter(
      (song) =>
        song.category === category && song.no.toString() === num.toString()
    );
    setThisSong(song[0]);
  };

  const getThisBalChorus = (category, num) => {
    let song = balChorus.filter(
      (song) =>
        song.category == category && song.no.toString() === num.toString()
    );
    setThisSong(song[0]);
  };

  const getThisOther = (category, num) => {
    let song = bhajan.filter(
      (song) =>
        song.category === category && song.no.toString() === num.toString()
    );
    setThisSong(song[0]);
  };

  const nextSong = () => {
    if (songNo < totalSong) {
      setSongNo(parseInt(songNo) + 1);
      getThisSong(song_category, parseInt(songNo) + 1);
    }
  };

  const previousSong = () => {
    if (songNo > 1) {
      setSongNo(parseInt(songNo) - 1);
      getThisSong(song_category, parseInt(songNo) - 1);
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <ActionBar title={thisSong.title} />
        <ToolBar
          nextSong={nextSong}
          previousSong={previousSong}
          catNum={`${thisSong.category} - ${thisSong.no}`}
          scaleTaal={`${String(thisSong.scale).replace('null', '-')} | ${String(
            thisSong.taal
          ).replace('null', '-')}`}
          lyrics={thisSong.lyrics}
        />
      </div>
      <Song
        lyrics={thisSong.lyrics}
        nextSong={nextSong}
        previousSong={previousSong}
      />
    </div>
  );
};

export default SingleSong;
