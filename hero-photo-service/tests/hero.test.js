import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Hero from '../client/src/components/Hero.jsx';
import stylesClass from '../client/src/components/hero.css';
// Step 1: this next line is important since the finders expect a '.' at the string start


describe('Hero tests', () => {
  test('No modal should show, thus being false', () => {
 	const wrapper = shallow(<Hero />);
    const showGalleryState = wrapper.state().showGalleryModal;
    const showShareState = wrapper.state().showShareModal;
    const showSaveState = wrapper.state().showSaveModal;
    expect(showGalleryState).toEqual(false);
    expect(showShareState).toEqual(false);
    expect(showSaveState).toEqual(false);
  });

  test('Should open the Gallery Model when the gallery button is clicked', () => {
 	const wrapper = shallow(<Hero />);
 	const galButton = wrapper.find('.hero-view-photos-button');
 	galButton.simulate('click');
 	const showGalleryState = wrapper.state().showGalleryModal;
 	expect(showGalleryState).toEqual(true);
  });

  test('Should open the Share Model when the share button is clicked', () => {
 	const wrapper = shallow(<Hero />);
 	const shareButton = wrapper.find('.hero-share-button');
 	shareButton.simulate('click');
 	const showShareState = wrapper.state().showShareModal;
 	expect(showShareState).toEqual(true);
  });

  /*test('Should open the Save Modal when the save button is clicked', async () => {
 	const wrapper = mount(<Hero />);
 	wrapper.setState({
 		// heroUrl: 'dddd',
 		photos: [{ photo_description: 'ddafd' }],

    });
 	const saveButton = wrapper.find('.hero-save-button');
 	saveButton.simulate('click');

 	sinon.spy(Hero.prototype, 'handleShowSave');

 	expect(Hero.prototype.handleShowSave.calledOnce).toEqual(true);
  });*/

  test('Should invoke handleShowGallery', () => {
 	const spy = sinon.spy(Hero.prototype, 'handleShowGallery');
 	const wrapper = shallow(<Hero />);
 	wrapper.find('.hero-view-photos-button').simulate('click');
 	expect(spy.calledOnce).toEqual(true);
  });


  test('Should check status after componentDidMount', () => {
   	sinon.spy(Hero.prototype, 'componentDidMount');
   	sinon.spy(Hero.prototype, 'getListingPhotos');
    sinon.spy(Hero.prototype, 'getListsOfListing');
   	sinon.spy(Hero.prototype, 'getListingDetails');
    const wrapper = mount(<Hero/>);
    expect(Hero.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(Hero.prototype.getListingPhotos.calledOnce).toEqual(true);
    expect(Hero.prototype.getListsOfListing.calledOnce).toEqual(true);
    expect(Hero.prototype.getListingDetails.calledOnce).toEqual(true);

  });

  test('Photo state should have 15 items', async () => {
    //sinon.spy(Hero.prototype, 'componentDidMount');
    //sinon.spy(Hero.prototype, 'getListingPhotos');
    const wrapper = mount(<Hero/>);
    const photos = wrapper.state().photos;
    expect(photos.length).toEqual(15);
  });
});
