import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './css/hostInfo.css';

const ContactAirbnb = (props) => {
  return (
    <div styleName='infoBox'>
      <span styleName='boldingWords'> Always communicate through Airbnb </span>
      <span>· To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>
      <span><a href=""> Learn More</a></span>
    </div>
  );
};

export default CSSModules(ContactAirbnb, styles);
