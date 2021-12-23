const forceRange = (value: number, min: number, max: number): number => {
  if (value > max) return max
  if (value < min) return min
  return value
}

const forceMin = (value: number, min: number): number => {
  if (value < min) return min
  return value
}

const forceMax = (value: number, max: number): number => {
  if (value > max) return max
  return value
}

const Utils = {
  forceRange, forceMax, forceMin
}

export default Utils