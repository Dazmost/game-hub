import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //index signature, so this represents a key or a property in this object
    // so here we have various keys like pc, playstation and so on
    // by using an index signature syntax we don't have to specify the name of these keys
    // so so far we always relied on the name like { name: string } has to be a string
    // but when you wrap this in sqaure brackets [] we are defining an index signature
    // so here we say this object has any number of keys of type string, we don't care about the names
    // each key is mapped to a value of type icon type, this is defined in react-icons library
    // name: PlayStation
    // slug: playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  // marginY={'1'} is a multiple of theme.space value (default is 4px)
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        // <Text>{platform.name}</Text>
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
