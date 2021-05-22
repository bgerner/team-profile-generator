const Engineer = require('../lib/Engineer');

test("creates an engineer object", () => {
    const engineer = new Engineer('Ben', 1, 'brgerner@gmail.com', 'Engineer', 'bgerner');

    expect(engineer.name).toBe('Ben');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('brgerner@gmail.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('bgerner');
});

test("getGithub() method", () => {
    const engineer = new Engineer('Ben', 1, 'brgerner@gmail.com', 'Engineer', 'bgerner');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('bgerner'))
});