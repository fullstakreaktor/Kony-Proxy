import React from 'react';
import GoogleMap from './Map.jsx';
import styles from './css/hostInfo.css';
import CSSModules from 'react-css-modules';

const Neighborhood = (props) => {
  let location = {lat: props.lat, lng: props.lng};

  return (
    <div styleName='infoBox'>
      <p styleName="title">
        The neighborhood
      </p>
      <p>
        <span styleName='boldingWords'>Features · </span>
        <span>{props.neighborhoodInfo.features}</span>
      </p>
      <p>
        <span styleName='boldingWords'>Things to do · </span>
        <span>{props.neighborhoodInfo.things_to_do}</span>
      </p>
      <GoogleMap location={location} zoom='11'/>
    </div>
  );
};

export default CSSModules(Neighborhood, styles);
