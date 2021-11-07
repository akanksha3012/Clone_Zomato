import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//pages
import Home from "./pages/Home";
import Temp from './Components/temp';


//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Redirect, Route} from 'react-router';

function App() {
  return (
    <div className="App">
    <Route path='/' exact>
      <Redirect to='/delivery'/>
    </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </div>
  );
}

export default App;
