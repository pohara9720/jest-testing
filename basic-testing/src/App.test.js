import { total } from './App'
import { add } from './add'


//the key add in the object returned can be used to spy on how the inner function within the parents are being used ie: toHaveBeenCalledTimes must match the import
jest.mock('./add', () => ({
    add: jest.fn(() => 7)
}))
//Integration Test
// test things working together
test('total', () => {
    expect(total(5, 2)).toBe('$7')
    expect(add).toHaveBeenCalledTimes(1)
})

