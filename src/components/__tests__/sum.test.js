import { sum } from "../sum";

test("Check if sum function is giving correct output for sum of given numbers", () => {
  const res = sum(2, 3);

  // Assertion to check if the result is correct
  expect(res).toBe(5);
});
