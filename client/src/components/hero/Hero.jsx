import { Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <div className="relative w-full shadow-lg">
        <div className="relative isolate z-0  px-6 pt-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl">
                Welcome to your Favourite Restaurant called Vegialor.
              </h1>
              <p className="mt-6 text-lg leading-8 text-green-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <Button colorScheme="red" variant={"outline"}>
                  View Menu
                </Button>
                <Button colorScheme="green">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
