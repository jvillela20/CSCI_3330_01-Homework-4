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
localStorage.setItem("access_token", "BQCYdHBl8Wog1MkQAsvAyd43XP53zwPWJqncaRT-SjwPR9Lh0KNuhlqjUeroWllyS47Ir-M8m_ZF1l1bTHRs2yTgk1Oa43ZDCUSMVOqVStEGBJHX2KtOvhf9Q3TacJFhItnlW7L-riJQ");
localStorage.setItem("track_id_1", "34vXRJ2bCSFiZKQzVUYVOb");
localStorage.setItem("track_id_2", "1PREzVLuDT6PSE9sej4wnV");
localStorage.setItem("track_id_3", "0YNVhxPfqDJSdrJhxduohQ");

// Albums IDs
localStorage.setItem("album_id_1", "6Zk9W9Ab3CnhttW5nBOUnY");
localStorage.setItem("album_id_2", "5utxE1ImIDJFXRHf137hoy");
localStorage.setItem("album_id_3", "5UeZ5HFbQAsSev59aKCWKq");
localStorage.setItem("album_id_4", "0Nlac12HchvCla00JkCnls");


async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");

    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");

    // Update Artist information
    const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistID}`,
      {headers: {Authorization: `Bearer ${accessToken}`}
    });

    const artistData = await artistResponse.json();

    document.querySelector(`#artist-name`).textContent = artistData.name;
    document.querySelector(`.artist-image img`).src = artistData.images[0].url;

    const tracks = [trackID1, trackID2, trackID3];
    const trackRows = document.querySelectorAll(`.track`);

    // update Popular tracks
    for(let i = 0; i < tracks.length; i++){
      const trackResponse = await fetch(`https://api.spotify.com/v1/tracks/${tracks[i]}`,
        {headers: {Authorization: `Bearer ${accessToken}`}
      });

      const trackData = await trackResponse.json();

      trackRows[i].querySelector(`img`).src = trackData.album.images[0].url;
      trackRows[i].querySelector(`.track-title`).textContent = trackData.name;
      trackRows[i].querySelector(`.track-album`).textContent = trackData.album.name;
      trackRows[i].querySelector(`.track-number`).textContent = trackData.track_number;
      trackRows[i].querySelector(`.track-duration`).textContent = convertMsToMinSec(trackData.duration_ms);
    }

        //update Albums
    const albums = [albumID1, albumID2, albumID3, albumID4];
    const albumCards = document.querySelectorAll(`.album-card`);

    for(let i = 0; i < albums.length; i++){
      const albumResponse = await fetch(`https://api.spotify.com/v1/albums/${albums[i]}`,
        {headers: {Authorization: `Bearer ${accessToken}`}
      });
      const albumData = await albumResponse.json();

      albumCards[i].querySelector(`img`).src = albumData.images[0].url;
      albumCards[i].querySelector(`h3`).textContent = albumData.name;
      albumCards[i].querySelector(`p`).textContent = `${albumData.release_date}  ${albumData.album_type}`;
    }
}
load();
   