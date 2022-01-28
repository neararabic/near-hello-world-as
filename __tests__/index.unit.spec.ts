import * as contract from "../assembly";

describe("Contract", () => {
  // VIEW method tests

  it("says hello", () => {
    expect(contract.helloWorld()).toStrictEqual("hello world")
  })
  
})
