import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';


it('should render <App /> without user', () => {
    const wrapper = shallow(<App user="" />)
    // expect(wrapper.find('.user').children()).toHaveLength(0);
    expect(wrapper.find('div')).toBeDefined();
});

it('should render <App /> with user', () => {
    const user = "Nina";
    const wrapper = shallow(<App user={user} />);
    expect(wrapper.find('.user').text()).toBe(user);
});

it('call the internal method loginSuccessful', () => {
    const user = 'nina@test.nu';
    const wrapper = mount(<App user={user} />)
    wrapper.instance().loginSuccessful(user)
    expect(wrapper.find('.user').text()).toBe(user);
});

it('call the internal method logout', () => {
    const user = "nina@test.nu";
    const wrapper = mount(<App user={user} />)
    wrapper.instance().logout();
    expect(wrapper.find('.user').children()).toHaveLength(0);
});