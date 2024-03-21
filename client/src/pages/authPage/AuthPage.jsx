import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/auth/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image
              rounded={"lg"}
              src="https://img.freepik.com/free-photo/top-view-composition-different-pakistan-goodies_23-2148821564.jpg?w=740&t=st=1711031948~exp=1711032548~hmac=9ff0ea7fec3dda5d44b2a23301e28989d088cf61ad5f98f71eeb7c63ddb89d29"
            />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
