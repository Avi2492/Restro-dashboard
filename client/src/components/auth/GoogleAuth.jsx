import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleLogo from "../logo/GoogleLogo";

const GoogleAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box>
        <Button colorScheme="red" variant={"outline"}>
          <GoogleLogo />
          {isLogin ? "Login" : "Signup"} with Google
        </Button>
      </Box>
    </>
  );
};

export default GoogleAuth;
