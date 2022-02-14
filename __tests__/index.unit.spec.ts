import { sayHello } from "../assembly/index";

describe("Contract", () => {
  it("says hello", () => {
    expect(sayHello()).toStrictEqual("hello from the blockchain world!");
  });
});
