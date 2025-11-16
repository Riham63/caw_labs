const { concatArray } = require('./concat');

test('concatArray should join with default separator comma', () => {
    expect(concatArray(["Red","Green","White","Black"])).toBe("Red,Green,White,Black");
});

test('concatArray should join with empty string separator', () => {
    expect(concatArray(["Red","Green","White","Black"], '')).toBe("RedGreenWhiteBlack");
});