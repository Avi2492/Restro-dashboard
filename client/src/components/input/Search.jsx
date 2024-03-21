import { Button, Flex, Input } from "@chakra-ui/react";
import { RiSearchLine } from "@remixicon/react";

const Search = () => {
  const handleSearchFood = (e) => {
    e.preventDefault();
    alert("Search Something");
  };

  return (
    <>
      <form onSubmit={handleSearchFood}>
        <Flex alignItems={"center"} gap={2} mr={12} ml={12} my={6}>
          <Input placeholder="Order Some Food Here" />
          <Button
            type="submit"
            colorScheme="green"
            variant={"outline"}
            rounded={"full"}
          >
            <RiSearchLine size={30} />
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default Search;
