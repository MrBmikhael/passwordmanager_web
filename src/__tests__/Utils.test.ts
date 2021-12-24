import Utils from '../Utils'

test('Force range', () => {
  const max = 10
  const min = 0

  expect(Utils.forceRange(9, min, max)).toEqual(9)
  expect(Utils.forceRange(10, min, max)).toEqual(10)
  expect(Utils.forceRange(11, min, max)).toEqual(10)
  expect(Utils.forceRange(0, min, max)).toEqual(0)
  expect(Utils.forceRange(1, min, max)).toEqual(1)
  expect(Utils.forceRange(-1, min, max)).toEqual(0)
})

test('Force min only', () => {
  const min = 10

  expect(Utils.forceMin(9, min)).toEqual(10)
  expect(Utils.forceMin(10, min)).toEqual(10)
  expect(Utils.forceMin(11, min)).toEqual(11)
  expect(Utils.forceMin(-10, min)).toEqual(10)
})

test('Force max only', () => {
  const max = 100

  expect(Utils.forceMax(9, max)).toEqual(9)
  expect(Utils.forceMax(99, max)).toEqual(99)
  expect(Utils.forceMax(100, max)).toEqual(100)
  expect(Utils.forceMax(101, max)).toEqual(100)
  expect(Utils.forceMax(-100, max)).toEqual(-100)
})
