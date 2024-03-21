import { RiLoaderLine } from "@remixicon/react";
import React from "react";
import Logo from "../logo/Logo";
import GoogleLogo from "../logo/GoogleLogo";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const SignupWithOtp = () => {
  return (
    <>
      <Input
        placeholder="Enter Your Email"
        fontSize={14}
        type="email"
        size={"sm"}
      />

      <Input
        placeholder="Enter Your Password"
        fontSize={14}
        type="number"
        size={"sm"}
      />

      <Button
        w={"full"}
        colorScheme="green"
        size={"sm"}
        fontSize={14}
        variant={"outline"}
      >
        Signup
      </Button>
    </>
  );
};

export default SignupWithOtp;
