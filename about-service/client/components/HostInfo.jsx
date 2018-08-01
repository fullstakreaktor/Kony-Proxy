import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './css/hostInfo.css';


const HostInfo = (props) => {
  return (
    <div styleName="infoBox">
      <p>{props.host.city}, {props.host.state}, {props.host.country} · Joined in {props.joinMonth}, {props.joinYear}
      </p>
      <div styleName='reviewRow'>
        <div>
        <img styleName='pawImg' src="https://s3-us-west-1.amazonaws.com/dog-photos-bentley/full.png"/>
        </div>
        <div> {props.reviews} {props.reviewWording} </div>
        <div>
        <img styleName='verifiedImg' src="https://s3-us-west-1.amazonaws.com/dog-photos-bentley/verified.png"/>
        </div>
        <div>{props.verifiedOrNot()}</div>
      </div>
    </div>
  );
};

export default CSSModules(HostInfo, styles);
