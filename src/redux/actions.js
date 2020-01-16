
////////////////////////////////////////////////////////////////


const API_KEY=process.env.REACT_APP_GOOGLE_PLACES_KEY
const QUERY = 'bronx'
const URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+Brooklyn%20NY%20USA&rankby=prominence&
&key=${API_KEY}`

const getPlaceAction = place => ({
  type: 'GET_PLACE',
  payload: place
});

const addPlace = (newPlace) => {
  return {
    type: "ADD_PLACE",
    payload: newPlace
  }
}
const getQuery = (query) => ({
  type: 'GET_QUERY',
  payload: query
})

const getPlace = (args) => dispatch => {
  fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+${args}&rankby=prominence&
  &key=${API_KEY}`)
    .then(r => r.json())
    .then((placeArr) => { dispatch(getPlaceAction(placeArr.results))
    })
}
const fetchQuery = (query) => ({
  type: 'FETCH_QUERY',
  payload: query
})

  function fetchPlace(query){
    return dispatch => {
      fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+${query}&rankby=prominence&
    &key=${API_KEY}`)
      .then(r => r.json())
      .then((placeArr) => { dispatch(getPlaceAction(placeArr.results))
      })
    }
  }

  






export default {
  getPlace,
  addPlace,
  getQuery,
  fetchPlace,
  fetchQuery
}
