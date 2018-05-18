import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './collage.scss';
import images from './images';

import { 
  ImageList,
  ImageListItem,
  ImageListImage
} from 'rmwc/ImageList';


class Collage extends Component {

  render() {
    return (
      <ImageList
        masonry
        className="image-list"
      >
        { images.map(src => (
          <ImageListItem key={src}>
            <ImageListImage src={src}/>
          </ImageListItem> 
        ))}
      </ImageList>
    );
  }

}

Collage.propTypes = {
};

export default Collage;