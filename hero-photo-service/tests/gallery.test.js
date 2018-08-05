import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Gallery from '../client/src/components/Gallery.jsx';
import stylesClass from '../client/src/components/gallery.css';

describe('Hero tests', () => {
  const props = {
 	galleryPhotos: [{ photo_url: 'aaa' }, { photo_url: 'bbb' }],
  };
  test('Should be displaying the carrousel', () => {
 	const wrapper = shallow(<Gallery galleryPhotos={props.galleryPhotos} />);
    const showCarrousel = wrapper.state().displayCarr;
    expect(showCarrousel).toEqual(true);
  });
});
