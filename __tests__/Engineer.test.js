const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("creates an engineer object", () => {
    const engineer = new Engineer('Ben', 1, 'brgerner@gmail.com', 'bgerner');

    expect(engineer.name).toBe('Ben');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('brgerner@gmail.com');
    expect(engineer.github).toBe('bgerner')
});

test("getGithub() method", () => {
    const engineer = new Engineer('Ben', 1, 'brgerner@gmail.com', 'bgerner');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('bgerner'))
});

test("getRole() method", () => {
    const engineer = new Engineer('Ben', 1, 'brgerner@gmail.com', 'bgerner');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
});