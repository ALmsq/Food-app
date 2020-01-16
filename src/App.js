import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'


//routing
import{ Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
//
import Login from './components/Login'
import HomePage from './components/HomePage'
import StartPage from './components/StartPage'
import actions from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'

import {connect} from 'react-redux'


// let allPlaces = actions.allPlaces
// let getPlace = actions.getPlace
// class App extends Component {
  const App = () => {
    
//     const dispatch = useDispatch()
    
//     useEffect(() => {
//       dispatch(allPlaces())
//     },
//     [dispatch]
//     )
    
    const state = useSelector(state => {
      return{
        place: state.place,
        query: state.query
        // encodedPlace: state.encodedPlace
      }
    })
    
    const dispatch = useDispatch()
    
    useEffect(() => {
      
      dispatch(actions.getPlace(state.query))
      
      // dispatch(actions.getQuery())
      console.log(state.query)
    }, [state.query])
    

    return (
      <div>
        
        <NavBar/>
        <Pizza/>
        <Switch>
          <Route path='/login' render={() => <Login/>}/>
          <Route path='/home' render={() => <HomePage/>}/>
          <Route path='/startpage' render={() => <StartPage />}/>
        </Switch>

        <h1> hello from App! </h1>
        
        
      </div>
    )
  }

export default App
