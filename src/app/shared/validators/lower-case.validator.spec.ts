import { isLowerCase } from "./lower-case.validator";

describe("isLowerCase", () => {
  it("should be check when the character value is lowercase", () => {
    let lowerCaseValue = "string";
    expect(isLowerCase(lowerCaseValue)).toBeTruthy();
  });

  it("should be check when the character value is uppercase", () => {
    let upperCaseValue = "STRING";

    expect(isLowerCase(upperCaseValue)).toBeFalsy();
  });
});
