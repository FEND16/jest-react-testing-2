import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email: 'bar', password: 'foo' });
  wrapper.find('input[type="submit"]').simulate('submit');
  // console.log(wrapper.state().message.type);
  expect(wrapper.state().message.type).toBe('ERROR');
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email: 'attila.cederbygd@gmail.com', password: 'hejhej123AAA' });
  wrapper.find('input[type="submit"]').simulate('submit');
  // console.log(wrapper.state()); 
  expect(wrapper.state().message.type).toBe('SUCCESS');  
});

it('simulate input field', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const email = 'attila.cederbygd@gmail.com';
  wrapper.find('input[type="email"]').simulate('change', {target:{name: "email", value:email}});
  expect(wrapper.state().email).toBe(email);
});