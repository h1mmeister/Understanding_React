import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Tum Hi Ho",
      duration: "5:00",
    },
    {
      title: "Macarena",
      duration: "3:15",
    },
    {
      title: "Brown Munde",
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
