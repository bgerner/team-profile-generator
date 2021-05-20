const Manager = require('../lib/Manager');

test("creates a manager object", () => {
    const manager = new Manager('Ben', 1, 'brgerner@gmail.com', 42);

    expect(manager.name).toBe('Ben');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('brgerner@gmail.com');
    expect(manager.officeNumber).toBe(42)
});

test("getOfficeNumber() method", () => {
    const manager = new Manager('Ben', 1, 'brgerner@gmail.com', 42);

    expect(manager.getOfficeNumber()).toEqual(42)
});

test("getRole() method", () => {
    const manager = new Manager('Ben', 1, 'brgerner@gmail.com', 42);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
});