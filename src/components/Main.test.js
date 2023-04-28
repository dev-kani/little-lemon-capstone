const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  }
}

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
}

describe("fetchAPI", () => {
  test("should return an array of available times", () => {
    const date = new Date("2022-05-01")
    const availableTimes = fetchAPI(date)

    expect(Array.isArray(availableTimes)).toBe(true)
    expect(availableTimes.length).toBeGreaterThanOrEqual(0)
    expect(availableTimes.length).toBeLessThanOrEqual(12)

    availableTimes.forEach(time => {
      const [hour, minute] = time.split(":")
      expect(Number(hour)).toBeGreaterThanOrEqual(17)
      expect(Number(hour)).toBeLessThanOrEqual(23)
      expect(Number(minute)).toBeOneOf([0, 30])
    })
  })
})
