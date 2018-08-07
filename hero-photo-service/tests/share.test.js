import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Share from '../client/src/components/Share.jsx';
import stylesClass from '../client/src/components/share.css';


describe('Share tests', () => {
  test('Initially the details object of the state should be empty', () => {
    const props = {
	  details: 'This is a cool house',
    };

 	const wrapper = mount(<Share details={props} />);
    const title = wrapper.find('.title');
    expect(title.text()).toBe('Share');
  });

  test('Should check status after componentDidMount', () => {
  	const props = {
	  details: 'This is a cool house',
    };
 	sinon.spy(Share.prototype, 'componentDidMount');
    const container = mount(<Share details={props} />);
    expect(Share.prototype.componentDidMount.calledOnce).toEqual(true);
  });
});
