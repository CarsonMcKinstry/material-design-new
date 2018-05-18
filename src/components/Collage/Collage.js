import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './collage.scss';
import images from './images';

import { 
  ImageList,
  ImageListItem,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel
} from 'rmwc/ImageList';


class Collage extends Component {

  render() {
    return (
      <ImageList
        masonry
        withTextProtection
        style={{
          columnCount: this.props.columns
        }}
        className="image-list"
      >
        { images.map(src => (
          <ImageListItem key={src}>
            <ImageListImage src={src}/>
            <ImageListSupporting>
              <ImageListLabel>Text Label</ImageListLabel>
            </ImageListSupporting>
          </ImageListItem> 
        ))}
      </ImageList>
    );
  }

}

Collage.propTypes = {
};

export default Collage;