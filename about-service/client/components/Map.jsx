import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './css/map.css';
import GoogleMapReact from 'google-map-react';
const MAP_KEY = process.env.MAP_KEY;

const GoogleMap = (props) => {

return(
  <div style={{ height: '320px', width: '540px'}}>
  	<GoogleMapReact
    	bootstrapURLKeys={{ key: MAP_KEY} }
    	defaultCenter={props.location}
    	defaultZoom={+props.zoom}
  	>
  	</GoogleMapReact>
	</div>

  )
};

export default CSSModules(GoogleMap, styles);
