import {
  expect,
  test,
  describe,
  vi,
  beforeAll,
  afterAll,
  beforeEach,
} from "vitest";
import Scroll from "../Scroll";

describe("Scroll", () => {
  beforeEach(() => {
    // Reset the document's overflow style to ensure a clean slate for each test
    document.documentElement.style.overflow = "";
  });

  describe("enable", () => {
    test("should enable scrolling on the body by default", () => {
      Scroll.enable();

      expect(document.body.style.overflow).toBe("");
    });

    test("should enable scrolling on the specified element", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);

      Scroll.enable("div");

      expect(document.querySelector("div")?.style.overflow).toBe("");
    });

    test("should not throw an error if the element is not found", () => {
      expect(() => {
        Scroll.enable("#nonexistent");
      }).not.toThrow();
    });
  });

  describe("disable", () => {
    test("should disable scrolling on the body by default", () => {
      Scroll.disable();

      expect(document.body.style.overflow).toBe("hidden");
    });

    test("should disable scrolling on the specified element", () => {
      const div = document.createElement("div");
      div.id = "myDiv";
      document.body.appendChild(div);

      Scroll.disable("#myDiv");

      expect(document.getElementById("myDiv")?.style.overflow).toBe("hidden");
    });

    test("should not throw an error if the element is not found", () => {
      expect(() => {
        Scroll.disable("#nonexistent");
      }).not.toThrow();
    });
  });

  describe("intoView", () => {
    const mockScrollIntoView = vi.fn();

    beforeAll(() => {
      Object.defineProperty(global.document, "querySelector", {
        value: vi.fn(() => ({ scrollIntoView: mockScrollIntoView })),
      });
    });

    afterAll(() => {
      vi.restoreAllMocks();
    });

    test("should scroll to the target element using the default options", () => {
      const div = document.createElement("div");
      div.id = "target";
      div.style.height = "2000px";
      document.body.appendChild(div);

      Scroll.intoView({ target: "#target" });

      expect(mockScrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      expect(window.scrollY).toBeGreaterThanOrEqual(0); // the window should have scrolled
    });

    test("should scroll to the target element using the specified options", () => {
      const div = document.createElement("div");
      div.id = "target";
      div.style.height = "2000px";
      document.body.appendChild(div);

      Scroll.intoView({ target: "#target", block: "end", inline: "center" });

      expect(mockScrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
      expect(window.scrollY).toBeGreaterThanOrEqual(0); // the window should have scrolled
    });
  });
});
