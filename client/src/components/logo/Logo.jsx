import { Box, Text } from "@chakra-ui/react";
import { RiRestaurant2Fill } from "@remixicon/react";
import React from "react";

const Logo = () => {
  return (
    <Box display={"flex"} alignItems="center" gap={2}>
      <Box className="text-red-500 bg-green-400 rounded-full p-2 text-xl">
        <RiRestaurant2Fill size={40} />
      </Box>
      <Text fontSize={"x-large"} as={"i"}>
        Vegialor
      </Text>
    </Box>
  );
};

export default Logo;
