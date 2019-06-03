import React, { Component } from 'react';
import GridContainer from './containers/grid';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import MovieDetailsContainer from './containers/movie_details_container';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={GridContainer}></Route>
          <Route path="/movie/:movie_id" component={MovieDetailsContainer}></Route>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;