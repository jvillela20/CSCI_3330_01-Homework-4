// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "6XkjpgcEsYab502Vr1bBeW");
localStorage.setItem("access_token", "");
localStorage.setItem("track_id_1", "34vXRJ2bCSFiZKQzVUYVOb");
localStorage.setItem("track_id_2", "1PREzVLuDT6PSE9sej4wnV");
localStorage.setItem("track_id_3", "0YNVhxPfqDJSdrJhxduohQ");


function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    
    
}
load();


   