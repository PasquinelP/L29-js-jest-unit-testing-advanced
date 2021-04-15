const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./script.js");


// test utility functies

// password is niet null
test("Password is not null: when null should be false", () => {
   expect(isNotNull(null)).toBe(false);
});

test("Password is not null: with character should be true", () => {
  expect(isNotNull("a")).toBe(true);
});

// password is korter dan 9 karakters
test("Password should be shorter then 9 characters", () => {
  expect(hasRightLength("12345678")).toBe(true);
});

test("Password 9 characters or longer should be false", () => {
  expect(hasRightLength("123456789")).toBe(false);
});

// password heeft 1 of meer uppercase karakters
test("password has 1 or more uppercase: one", () => {
  expect(hasUpperCaseCharacter("A")).toBe(true);
});

test("password has 1 or more uppercase: one upper, one lower", () => {
  expect(hasUpperCaseCharacter("Ab")).toBe(true);
});

test("password has 1 or more uppercase: no uppercase", () => {
  expect(hasUpperCaseCharacter("a")).toBe(false);
});

test("password has 1 or more uppercase: number", () => {
  expect(hasUpperCaseCharacter("1")).toBe(false);
});

// password heeft 1 of meer lowercase karakters
test("password has 1 or more lowercase: one", () => {
  expect(hasLowerCaseCharacter("a")).toBe(true);
});

test("password has 1 or more lowercase: one lower, one upper", () => {
  expect(hasLowerCaseCharacter("Ab")).toBe(true);
});

test("password has 1 or more lowercase: no lowercase", () => {
  expect(hasLowerCaseCharacter("A")).toBe(false);
});

test("password has 1 or more lowercase: number", () => {
  expect(hasLowerCaseCharacter("1")).toBe(false);
});

// password heeft 1 of meer cijfers
test("password has 1 or more numbers: one", () => {
  expect(hasDigit("1")).toBe(true);
});

test("password has 1 or more numbers: one number, one letter", () => {
  expect(hasDigit("1a")).toBe(true);
});

test("password has 1 or more numbers: one", () => {
  expect(hasDigit("a")).toBe(false);
});


// tenminste 3 condities zijn true
test("at least 3 conditions are true, minimum requirement", () => {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test("4 conditions are true, above minimum requirement", () => {
  const conditions = [true, true, true, false, true];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test("only 2 conditions are true, below minimum requirement", () => {
  const conditions = [true, false, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("no conditions are true", () => {
  const conditions = [false, false, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});


// test verifyPassword functie
test("verify password with minimal correct password", () => {
  expect(verifyPassword("Ab1")).toBe(true);
});

test("verify password with no lowercase", () => {
  expect(verifyPassword("A12BSW7G")).toBe(false);
});

test("verify password with password too long", () => {
  expect(verifyPassword("abcdefghi")).toBe(false);
});

test("verify password only numbers", () => {
  expect(verifyPassword("123")).toBe(false);
});

test("verify password with only uppercase", () => {
  expect(verifyPassword("ABCD")).toBe(false);
});

test("verify password with only lowercase", () => {
  expect(verifyPassword("abcd")).toBe(true);
});
