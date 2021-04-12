import { combineReducers } from "redux";

// Reducer for listing the songs
const songsReducer = () => {
  return [
    {
      title: "tum hi ho",
      duration: "5:00",
    },
    {
      title: "macarena",
      duration: "3:15",
    },
    {
      title: "brown munde",
      duration: "4:30",
    },
  ];
};

// Reducer to selecting the song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// Combining reducer using combineReducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
