import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  const email = 'joanna@gmail.com';
  const password = 'test';
  wrapper.setState({ email, password });
  wrapper.find('form').simulate('submit', fakeEvent);
  expect(wrapper.state().message.type).toContain('ERROR');
});

it('simulate login passed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  const email = 'joanna@gmail.com';
  const password = 'Lucas2010';
  wrapper.setState({ email, password }); 
  wrapper.find('form').simulate('submit', fakeEvent);
  expect(wrapper.state().message.type).toContain('SUCCESS');

});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const email = 'joanna@gmail.com';
  wrapper.setState({ email });
  expect(wrapper.state().email).toEqual(email);

});

it("test handleChange and submit", () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  wrapper.find('input[name="email"]').simulate('change', {target: {name: "email", value: "joanna@gmail.com"}});
  wrapper.find('input[name="password"]').simulate('change', {target: {name: "password", value: "Lucas2010"}});  
  wrapper.find('form').simulate('submit', fakeEvent);
  expect(wrapper.find('.success').exists()).toBeTruthy();
 
});