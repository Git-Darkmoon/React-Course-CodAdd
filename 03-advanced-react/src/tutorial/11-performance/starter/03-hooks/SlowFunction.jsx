function SlowFunction() {
  let value = 0
  for (let i = 0; i <= 1000000000; i++) {
    value += i
  }
  return value
}

export default SlowFunction
