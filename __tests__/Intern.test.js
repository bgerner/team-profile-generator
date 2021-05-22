const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("creates an intern object", () => {
    const intern = new Intern('Ben', 1, 'brgerner@gmail.com', 'Intern', 'Boulder');

    expect(intern.name).toBe('Ben');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('brgerner@gmail.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('Boulder')
});

test("getSchool() method", () => {
    const intern = new Intern('Ben', 1, 'brgerner@gmail.com', 'Intern', 'Boulder');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Boulder'))
});