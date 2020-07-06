import React, {Component} from 'react';
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
import PhotoList2 from './PhotoList2';

export default class App extends Component {

  // Photos for cats, dogs, and birds are preloaded.
  // The label is for the type of pictures stored in the photos array.
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
    this.performSearch('cat');
    this.performSearch('dog');
    this.performSearch('bird');
  }

  // Search for photos for the given topic and store them accordingly.
  performSearch = (topic) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        if (topic === 'cat') {
          this.setState ({ 
            cats: responseData.photos.photo
          });
        }
        else if (topic === 'dog') {
          this.setState ({ 
            dogs: responseData.photos.photo
          });
        }
        else if (topic === 'bird') {
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

  // The search form and navigation buttons are always displayed.  Photos will be displayed if they are searched for.
  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/search/cat" render={() => <PhotoList data={this.state.cats} title="cat" />} />
            <Route exact path="/search/dog" render={() => <PhotoList data={this.state.dogs} title="dog" />} />
            <Route exact path="/search/bird" render={() => <PhotoList data={this.state.birds} title="bird" />} />
            <Route exact path ="/search/:topic" render={() => <PhotoList2 data={this.state.photos} title={this.state.label} search={this.performSearch} />} />
          </Switch>
        </div>   
      </BrowserRouter>
    );
  }
}
