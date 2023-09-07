import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";
import { animated, useSpring } from "@react-spring/web";
import { isURL } from "@/helpers/Helpers";

type Props = {
  image: unknown;
  title: string;
  classes?: string;
};

/**
 * Component used to display project images
 *
 * @param {Props} { image, title }
 * @return {*}  {JSX.Element}
 */
const ProjectImage: FunctionComponent<Props> = ({
  image,
  title,
  classes,
}: Props): JSX.Element => {
  const [mouseOver, setMouseOver] = useState(false);

  const styles = useSpring({
    scale: mouseOver ? 1.1 : 1,
  });

  function createImagePath(): string {
    if (isURL(image as string)) return image as string;
    return `/assets/projects/${image}`;
  }

  return (
    <animated.img
      style={styles}
      class={classes}
      loading="lazy"
      src={createImagePath()}
      alt={`${title} image`}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    />
  );
};

export default ProjectImage;
