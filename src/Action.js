export const fetchDataAction = async dispatch => {
  const data = await fetch(
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
  );
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  });
};

export const toggleFavAction = (episode, state, dispatch) => {
  const episodeInFavourites = state.favourites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode
  };
  if (episodeInFavourites) {
    const favouritesWithoutEpisode = state.favourites.filter(
      fav => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favouritesWithoutEpisode
    };
  }
  return dispatch(dispatchObj);
};
