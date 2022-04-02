import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

function MusicsCard() {
  const historyId = useParams().id;

  const [responseApi, setResponseApi] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const initialFetch = async () => {
      const [musicsArray, favoriteArray] = await Promise.all([
        getMusics(historyId),
        getFavoriteSongs(),
      ]);

      setResponseApi(musicsArray);

      favoriteArray.map((objMusic) => setFavoritos((prevState) => [ ...prevState, objMusic.trackId]))

    };

    initialFetch();
  }, [historyId]);

  async function handleFavoriteMusic({ target }, music) {
    const artistId = target.id;

    if (!target.checked) {
      await removeSong(music);
      setFavoritos(
        prevState =>
          prevState.filter(elem => elem !== artistId)
      );
    } else {
      await addSong(music);
      setFavoritos(prevState => [...prevState, artistId]);
    }
  }

  return (
    <>
      {responseApi.map(
        (music, index) =>
          index !== 0 && (
            <MusicCard
              key={music.trackId}
              music={music}
              favoritos={favoritos}
              handleFavoriteMusic={handleFavoriteMusic}
            />
          )
      )}
    </>
  );
}

export default MusicsCard;
