import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import { RiRestaurant2Fill } from "@remixicon/react";

import React from "react";
import Logo from "../components/logo/Logo";
import SignupWithOtp from "../components/auth/SignupWithOtp";

const Signup = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Logo />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <SignupWithOtp />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Signup;
