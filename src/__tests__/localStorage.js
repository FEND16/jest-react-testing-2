import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});


// är det bra att göra ett test där vi först måste använda funktionen setItem för att kunna kolla getItem??
it('should get the user from localStorage', () => {
  const user = "nina";
  localStorage.setItem('user', user);
  const getUser = localStorageUtils.getUserFromLocalStorage();
  expect(localStorage.getItem).toHaveBeenCalled();
  expect(getUser).toEqual(user);
});


it('should get empty user from localStorage', () => {
  const getUser = localStorageUtils.getUserFromLocalStorage();
  expect(localStorage.getItem).toHaveBeenCalled();
  expect(getUser).toBeFalsy();
});

