const asyncFunc = require('./asyncFunc')

test('testing async callback', async () => {
    const data = await asyncFunc()
    return expect(data).toBe('heyyy')      
})