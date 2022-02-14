import { sayHello } from "../assembly/index";

describe("Contract", () => {
  // VIEW method tests

  it("says hello", () => {
    expect(sayHello()).toStrictEqual("hello from the blockchain world!");
  });
});
