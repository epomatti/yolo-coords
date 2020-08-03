const coords = require('../index')

test('coordinates', () => {
    const result = coords('15', 'sample.txt')
    expect(result[0]).toBe('0.235185');
    expect(result[1]).toBe('0.381657');
    expect(result[2]).toBe('0.396296');
    expect(result[3]).toBe('0.727811');
});

test('test coordinates 16', () => {
    const result = coords('16', 'sample.txt')
    expect(result[0]).toBe('0.785185');
    expect(result[1]).toBe('0.420118');
    expect(result[2]).toBe('0.385185');
    expect(result[3]).toBe('0.828402');
});

test('Class not found', () => {
    const classNumber = '17'
    const fileName = 'sample.txt'
    const result = coords(classNumber, fileName)
    expect(result).toBe(undefined);
});

test('File not found', () => {
    const classNumber = '16'
    const fileName = 'not_a_file.txt'
    expect(() => { coords(classNumber, fileName) }).toThrow();
});