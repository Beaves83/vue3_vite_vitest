import { assert, describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../HomeView.vue";

describe("HomeView", () => {
  it("renders properly", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("suite name", () => {
  it("foo", () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it("bar", () => {
    expect(1 + 1).eq(2);
  });

  it("snapshot", () => {
    expect({ foo: "bar" }).toMatchSnapshot();
  });
});
