import { validateEmail, validatePassword, validateLogin } from '../utils/validation';

it('passes on valid email', () => {
    const email = "joanna@gmail.com";
    const testing = validateEmail(email);
    expect(testing).toBe(true);
});

it('fails on invalid email', () => {
    const email = "test";
    const testing = validateEmail(email);
    expect(testing).toBe(false);

});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    const password = "Lucas2010";
    const testing = validatePassword(password);
    expect(testing).toBe(true);

});

it('invalid password: missing digit', () => {
    const password = "Lucas";
    const testing = validatePassword(password);
    expect(testing).toBe(false);

});

it('invalid password: missing 1 uppercase', () => {
    const password = "lucas2010";
    const testing = validatePassword(password);
    expect(testing).toBe(false);
});

// it('check password & email', () => {
//     const password = "lucas2010";
//     const email = "joanna@gmail.com";
//     const testing = validateLogin(email, password);
//     expect(testing).toBe(true);
// });


// expect(() => {
//     validatePassword("password1")
// }).toThrowError()