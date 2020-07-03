import React, {Component} from 'react';
// import { withRouter } from 'react-router';
import '../css/index.css';
import apiKey from '../config.js';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoList from './PhotoList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      birds: [],
      label: ""
    }
  } 

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('birds');
  }



  performSearch = (topic) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        if (topic === 'cats') {
          this.setState ({ 
            cats: responseData.photos.photo
          });
        }
        else if (topic === 'dogs') {
          this.setState ({ 
            dogs: responseData.photos.photo
          });
        }
        else if (topic === 'birds') {
          this.setState ({ 
            birds: responseData.photos.photo
          });
        }
        else {
          this.setState ({ 
            photos: responseData.photos.photo,
            label: topic
          });
        }

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() {
    // console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div>
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/cats" render={() => <PhotoList data={this.state.cats} title="cat" />} />
            <Route exact path="/dogs" render={() => <PhotoList data={this.state.dogs} title="dog" />} />
            <Route exact path="/birds" render={() => <PhotoList data={this.state.birds} title="bird" />} />
            <Route path ="/:topic" render={() => <PhotoList data={this.state.photos} title={this.state.label} />} />
          </Switch>
        </div>   
      </BrowserRouter>
  
    );
  }
}
