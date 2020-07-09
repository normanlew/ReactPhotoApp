import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import { withRouter } from "react-router-dom";

// This class is similar to PhotoList2.  The difference is that it first checks to see if the 
// topic passed as a parameter in the url is the same as the label for the photos.  If they
// do not match, it will perform a search for the topic to display the correct photos.
class PhotoList2 extends Component { 

  render () {
    let topic = this.props.match.params.topic;

    if (topic !== this.props.title) {
        this.props.search(topic);
        return null;
    }
    else {
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
} 

export default withRouter (PhotoList2);