import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const emailEvent = {target: {name: "email", value: "nina@test.nu"}};
  const passwordEvent = {target: {name: "password", value: "pass1234"}}; // skickar in ett felaktigt password
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.error').exists()).toBeTruthy(); // .error är ett klassnamn som sätts i message.js
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const emailEvent = {target: {name: "email", value: "nina@test.nu"}};
  const passwordEvent = {target: {name: "password", value: "PassWord1234"}}; // skickar in ett korrekt password som uppfyller alla krav
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.success').exists()).toBeTruthy(); // .success är ett klassnamn som sätts i message.js

});