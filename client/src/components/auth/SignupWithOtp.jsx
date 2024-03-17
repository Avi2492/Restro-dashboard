import { RiLoaderLine } from "@remixicon/react";
import React from "react";
import Logo from "../logo/Logo";
import GoogleLogo from "../logo/GoogleLogo";
import { Button, Text } from "@chakra-ui/react";

const SignupWithOtp = () => {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <Logo />
          </div>
          <Text>Sign up to create account</Text>
          <div className="mt-3 space-y-3">
            <Button>
              <GoogleLogo />
              Sign up with Google
            </Button>
          </div>

          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Enter your phone number"
                    id="number"
                  />
                </div>
              </div>
              <div>
                <Button w={"full"} colorScheme="green" variant={"outline"}>
                  Get OTP <RiLoaderLine className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </form>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupWithOtp;
