import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

interface Props {
  image: any;
  title: string;
}

/**
 * Component used to display project images
 *
 * @param {Props} { image, title }
 * @return {*}  {JSX.Element}
 */
const WorkImage: React.FunctionComponent<Props> = ({
  image,
  title,
}: Props): JSX.Element => {
  const [mouseOver, setMouseOver] = useState(false);

  const styles = useSpring({
    scale: mouseOver ? 1.1 : 1,
  });

  return (
    <animated.img
      style={styles}
      loading="lazy"
      src={image}
      alt={title + " image"}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    />
  );
};

export default WorkImage;
