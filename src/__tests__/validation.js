import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
    expect(validateEmail('nina@test.nu')).toEqual(true);
});

it('fails on invalid email', () => {
    expect(validateEmail('nina')).toEqual(false);
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    expect(validatePassword('Ninasjoberg1')).toEqual(true);
});

it('invalid password: missing digit', () => {
    expect(validatePassword('Ninasjoberg')).toEqual(false);
    // får inte tillbaka info om vad som saknas/är fel, annat än om det är true eller false
});

it('invalid password: missing 1 uppercase', () => {
    expect(validatePassword('ninasjoberg1')).toEqual(false);
    // får inte tillbaka info om vad som saknas/är fel, annat än om det är true eller false
});
