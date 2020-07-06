import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound'

// Renders photos passed to it via props.  If photos are not found, display the NotFound component.
class PhotoList extends Component { 
  render () {
    const results = this.props.data;
    let photosExist = (results.length > 0);
    let photos;
    if (photosExist) {
      photos = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id}/>);
    }
    else {
      photos = <NotFound />
    }
    return (
      <div className="photo-container">
        {photosExist && <h2>{this.props.title} photos</h2>}
        <ul>
          {photos}
        </ul> 
      </div>
    );
  }
} 

export default PhotoList;


