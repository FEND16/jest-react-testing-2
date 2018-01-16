import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
    const wrapper = mount(<App user="" />);
    expect(wrapper.state().user).toEqual("");
});

it('should render <App /> with user', () => {
    const wrapper = mount(<App user="joanna" />);
    expect(wrapper.state().user).toEqual("joanna");
});

it('call the internal method loginSuccessful', () => {
    const wrapper = mount(<App user="" />);
    const instance = wrapper.instance().loginSuccessful;
    instance("joanna");
    expect(wrapper.state().user).toEqual("joanna");

});

it('call the internal method logout', () => {
    const wrapper = mount(<App user="" />);
    const instance = wrapper.instance().logout; 
    instance();
  

});