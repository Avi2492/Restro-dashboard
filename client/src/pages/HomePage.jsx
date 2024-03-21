import { Button, Input } from "@chakra-ui/react";
import Search from "../components/input/Search";
import { RiStarLine } from "@remixicon/react";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 shadow-lg">
      <div className="py-2 shadow-lg flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-red-500">
          Tuck into a takeaway today !
        </h1>
        <span className="text-xl">Food is just a click away</span>
        <div>
          <Search />
        </div>
      </div>
      <div className="m-10 max-w-7xl px-2 py-2 lg:px-0 items-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-red-500">
              Subscribe for our weekly Discount Coupns
            </h2>
            <p className="mt-4 text-green-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-green-400">
                Trusted by over 100,000+ businesses and individuals
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <RiStarLine key={i} className="h-5 w-5 text-red-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-green-500">
                    4.8/5 . 3420 Reviews
                  </span>
                </span>
              </div>
            </div>
            <form className="mt-6">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <Input
                  placeholder="Enter Your Registered Number"
                  border={"green.500"}
                />
                <Button colorScheme="red" variant={"outline"}>
                  Subscribe
                </Button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-600">
                By signing up, you agree to our terms of service and privacy
                policy.
              </span>
            </p>
          </div>
          <div className="m-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/top-view-bowls-with-indian-food_23-2148723454.jpg?w=900&t=st=1711034875~exp=1711035475~hmac=d641e1bad9439a67f3558c992e25b6d47b49d360ce79fbfcb2bb03f0a5de167f"
              alt="landing-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
