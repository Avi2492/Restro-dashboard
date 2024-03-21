import { Button } from "@chakra-ui/react";
import { RiArrowDownLine } from "@remixicon/react";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <p className="font-semibold text-red-500 text-5xl">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-500 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-green-600">
          Sorry, we couldn&apos:t find the page you&apos;re looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Button colorScheme="green" variant={"outline"} type="button">
            <RiArrowDownLine size={16} className="mr-2" />
            Go back
          </Button>
          <Button colorScheme="red" variant={"outline"}>
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
