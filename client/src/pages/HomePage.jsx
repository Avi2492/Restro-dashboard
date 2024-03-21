const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="py-2 shadow-lg flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-red-500">
          Tuck into a takeaway today !
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex items-center justify-center">
          <img
            src="https://img.freepik.com/free-photo/high-angle-pakistani-meal-with-meat_23-2148825108.jpg?w=360&t=st=1711001689~exp=1711002289~hmac=ac0c92bb6b98179dda679e774d9747e0ec1656fd5f07e526c574b2b4c9f6b41f"
            alt="landing-image"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the Vigalor App for fast ordering and personalised
            recommedndation
          </span>

          <img
            className="h-10"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
