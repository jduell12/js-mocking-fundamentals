const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  //spyOn does the same thing as saving the original random value to a variable
  jest.spyOn(utils, "getWinner");
  // const originalGetWinner = utils.getWinner;
  //mock function
  //mocks the function getWinner
  utils.getWinner.mockImplementation((p1, p2) => p1);
  // utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  //cleanup
  //does the same thing as line 21 --> restoring the original winner from the function to be available later
  utils.getWinner.mockRestore();
  // utils.getWinner = originalGetWinner;
});
