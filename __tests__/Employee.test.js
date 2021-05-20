const Employee = require('../lib/Employee');

test("creates an employee object", () => {
    const employee = new Employee('Ben', 1, 'brgerner@gmail.com');

    expect(employee.name).toBe('Ben');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('brgerner@gmail.com')
});

test("getName() method", () => {
    const employee = new Employee('Ben', 1, 'brgerner@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Ben'))
});

test("getId() method", () => {
    const employee = new Employee('Ben', 1, 'brgerner@gmail.com');

    expect(employee.getId()).toEqual(1)
});

test("getEmail() method", () => {
    const employee = new Employee('Ben', 1, 'brgerner@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('brgerner@gmail.com'))
});

test("getRole() method", () => {
    const employee = new Employee('Ben', 1, 'brgerner@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'))
});