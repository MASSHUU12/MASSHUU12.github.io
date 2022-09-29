import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

interface Props {
  image: any;
  title: string;
}

const WorkImage = ({ image, title }: Props) => {
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
