import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack display="flex" alignItems="center" justifyContent="space-between">
      <Image src={logo} boxSize="50px"></Image>
      <Text>Nav bar</Text>
      <IconButton
        onClick={toggleColorMode}
        aria-label={"Togle-them-mod"}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </IconButton>
    </HStack>
  );
};

export default NavBar;
