import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../logo/Logo";
import Login from "./Login";
import SignupWithOtp from "./SignupWithOtp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Logo size={24} cursor={"pointer"} />
          {isLogin ? <Login /> : <SignupWithOtp />}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={2}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={1}>
          <Box fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"green.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
