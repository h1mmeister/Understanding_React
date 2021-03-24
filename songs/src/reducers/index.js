import { combineReducers } from "redux";

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

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer,
});
