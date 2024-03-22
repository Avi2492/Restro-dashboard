import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Logo from "../logo/Logo";
import { Button, Stack, Text } from "@chakra-ui/react";
// import ErrorPage from "../../pages/error/ErrorPage";
import { useAuth0 } from "@auth0/auth0-react";
const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/error-page",
  },
  {
    name: "Contact",
    to: "/error-page",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loginWithRedirect } = useAuth0();
  return (
    <div className="relative w-full shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to={"/"}>
            <span className="text-white font-bold tracking-tight cursor-pointer">
              <Logo />
            </span>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <Text key={item.name}>
                <Link
                  to={item.to}
                  className="text-xl italic font-semibold text-white hover:underline"
                >
                  {item.name}
                </Link>
              </Text>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Stack spacing={4} direction="row" align="center">
            <Link to={"/auth-page"}>
              <Button colorScheme="red" variant="outline" fontStyle={"italic"}>
                Sign Up
              </Button>
            </Link>
            <Text>or</Text>

            <Button
              colorScheme="green"
              variant="outline"
              fontStyle={"italic"}
              onClick={async () => await loginWithRedirect()}
            >
              Login
            </Button>
          </Stack>
        </div>
        <div className="lg:hidden">
          <RiMenuLine onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 rounded-lg bg-slate-800 shadow-lg ring-1 ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Link to={"/"}>
                      <span className=" text-orange-500 font-bold tracking-tight cursor-pointer">
                        <Logo />
                      </span>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="submit"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-red-500 hover:bg-red-300 hover:text-red-500 focus-visible:outline focus-visible:outline-2focus-visible:outline-offset-2"
                    >
                      <span className="sr-only">Close menu</span>
                      <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-orange-500">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <Link to={"/signup"}>
                  <Button className="flex  bg-red-500 rounded-md text-red-100 cursor-pointer hover:bg-red-300 hover:text-white mt-8 text-center items-center p-2">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
