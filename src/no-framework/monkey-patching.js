const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;
//mocks the getWinner function to always return player 1
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");

//monkey patching so if any other test needs the undetermined winner from the function they can use it
utils.getWinner = originalGetWinner;
