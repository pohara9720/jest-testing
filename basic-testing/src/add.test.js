import { add } from './add'

//Unit test
//Tests one thing
test('add', () => {
    const value = add(1, 2)
    expect(value).toBe(3)
    // expect(add).toHaveBeenCalledTimes(1)
    // expect(add).toHaveBeenCalledWith(1, 2)
    expect(add(5, 2)).toBe(7)
})