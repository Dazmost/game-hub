import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // in this object we have any number of keys of type number
  // [key:number] is called an index signature
  // using this syntax we can tell the typescript compiler that this object
  // can have any number of keys and the keys are numbers
  // that we map each key to an image props object defined in chakra
  // ImageProps - so this type defines the props available on the <Image/> component
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  // because we are spreading this object
  // all these properties will be added to our image component
  // this is much nicer than setting individual props
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
