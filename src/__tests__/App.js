import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
  const wrapper = mount(<App user="" />);
  const text = wrapper.text();
  expect(text).toBeTruthy();
});

it('should render <App /> with user', () => {
  const wrapper = mount(<App user="Attila" />);
  const user = wrapper.find(".user");
  expect(user.text()).toContain("Attila");
});

it('call the internal method loginSuccessful', () => {
  const wrapper = mount(<App user="" />);
  const email = "attila.cederbygd@gmail.com";
  wrapper.instance().loginSuccessful(email);
  expect(wrapper.state().user).toBe(email);
});

it('call the internal method logout', () => {
  const wrapper = mount(<App user="" />);
  const email = "attila.cederbygd@gmail.com";
  wrapper.instance().loginSuccessful(email);
  wrapper.instance().logout();
  expect(wrapper.state().user).toBe("");
});