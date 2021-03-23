const thumbWar = require("../thumb-war");
const utils = require("../utils");

//params: path of file from the test file, function for what the mock returns
jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});

test("returns winner", () => {
  jest.spyOn(utils, "getWinner");
  //mock function
  //the jest.mock on line 4 does what line 14 was doing
  // utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  //cleanup
  utils.getWinner.mockReset();
  // utils.getWinner.mockRestore();
});
