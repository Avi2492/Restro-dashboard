import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="relative isolate z-0 bg-rose-200 px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-rose-500 sm:text-6xl">
                Find Your Next Stay?.
              </h1>
              <p className="mt-2 text-lg leading-8 text-rose-700">
                Search low prices of hotels for your dream vacation...
              </p>
              <div className="mt-2 flex items-center justify-center gap-x-2">
                <button
                  type="button"
                  className="rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="rounded-md border border-rose-500 px-3 py-2 text-sm font-semibold text-rose-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
