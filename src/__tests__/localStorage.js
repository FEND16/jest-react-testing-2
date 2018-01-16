import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  localStorageUtils.saveUserToLocalStorage("joanna@gmail.com")
  const user = localStorageUtils.getUserFromLocalStorage();
  expect(user).toEqual("joanna@gmail.com")

});

it('should get empty user from localStorage', () => {
  localStorageUtils.removeUserFromLocalStorage()
  const user = localStorageUtils.getUserFromLocalStorage();
  expect(user).toEqual("")
});

