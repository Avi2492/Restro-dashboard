import { Button, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Input
        placeholder="Mobile Number"
        fontSize={14}
        type="number"
        size={"sm"}
      />
      <Button w={"full"} colorScheme="green" variant={"outline"} fontSize={14}>
        Enter Otp
      </Button>
    </>
  );
};

export default Login;
