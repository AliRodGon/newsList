import React from "react";
import { shallow } from "enzyme";
import FormLogin from "./FormLogin";

describe("FormLogin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormLogin />);
    expect(wrapper).toMatchSnapshot();
  });
});
