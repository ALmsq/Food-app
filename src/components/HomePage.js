import React from 'react'
import Place from './Place'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'


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

        const onClick = (e) => {
            console.log('yo')
        }

        const generateCards = () => {
            return places.map(c => <Place c={c} key={c.id} onClick={onClick} />);
          };

        return(
            // <div>
            //     <h1>Featured Spots</h1>
            //     {generateCards()}

            // </div>
            <Grid columns={3} divided>
                <Grid.Row>
                        {generateCards()}
                </Grid.Row>
            </Grid>
        )
}

// const mapStateToProps = state => {
//     return {
//         place: state.allPlaces.place
//     }
// }



// export default connect(mapStateToProps)(HomePage)
export default HomePage