export type ScrollIntoView = {
  target: string;
} & ScrollIntoViewOptions;

export default class Scroll {
  public static enable(selector = "body"): void {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    element.style.overflow = "";
  }

  public static disable(selector = "body"): void {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    element.style.overflow = "hidden";
  }

  public static intoView({
    target,
    behavior = "smooth",
    block = "start",
    inline = "nearest",
  }: Readonly<ScrollIntoView>): void {
    document.querySelector<HTMLElement>(target)?.scrollIntoView({
      behavior,
      block,
      inline,
    });
  }
}
