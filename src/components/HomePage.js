import React from 'react'
import Place from './Place'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'



// class HomePage extends Component {
//     render() {
        
//         return (
//             <div>
//                 <h1>Featured Spots</h1>
//                 <Place/>
//             </div>
//         )
//     }
// }
    

const HomePage = () => {
        const places = useSelector(state => state.place)
        const query = useSelector(state => state.query)
        console.log(places)
        console.log(query)

        const generateCards = () => {
            return places.map(c => <Place c={c} key={c.id} />);
          };

        return(
            <div>
                <h1>Featured Spots</h1>
                {generateCards()}

            </div>
        )
}

// const mapStateToProps = state => {
//     return {
//         place: state.allPlaces.place
//     }
// }



// export default connect(mapStateToProps)(HomePage)
export default HomePage