import {
  Logo,
  HeroImg,
  Stars,
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Guide1,
  Guide2,
  Guide3,
  Vector,
  FeatureThumb1,
  Feature1,
  FeatureThumb2,
  Feature2,
  FeatureThumb3,
  Feature3,
} from "./assets/images";

import { Button, Content } from "./components";
const App = () => {
  return (
    <main>
      {/* Header */}
      <header className="relative h-screen bg-[#E6F0FF]">
        <Content>
          {/* Navigation */}
          <nav className="flex items-center pt-[38px]">
            <img src={Logo} alt="Besnik." />

            <ul className="ml-[50px] flex">
              <li>
                <a
                  href="#!"
                  className="px-[14px] py-2 text-sm font-medium hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="px-[14px] py-2 text-sm font-medium hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="px-[14px] py-2 text-sm font-medium hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="px-[14px] py-2 text-sm font-medium hover:underline"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="px-[14px] py-2 text-sm font-medium hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="ml-auto">
              <a href="#!" className="text-sm font-medium text-primary">
                Sign in
              </a>
              <Button content="Sign up" className="ml-[18px] py-[10px]" />
            </div>
          </nav>

          {/* Hero */}
          <div className="mt-[130px]">
            <div className="w-1/2">
              <p className="text-[18px] font-medium tracking-[0.18px] text-[#687690]">
                Welcome to Besnik Agency
              </p>

              <h1 className="text-[#000336 mt-2 text-[63px] font-bold leading-[76px]">
                Discover a place you'll love to live.
              </h1>

              <p className="mt-[30px] text-[18px] font-normal leading-8 text-[#5A6473]">
                Get the best real estate deals first, before they hit the mass
                market! HOT FORECLOSURE DEALS with one simple search.
              </p>

              <Button
                content="More About Us"
                className={"mt-10 min-w-[170px]"}
              ></Button>
            </div>

            <img
              src={HeroImg}
              alt="Discover a place you'll love to live."
              className="absolute bottom-0 right-[calc((100vw-1110px)/2-100px)]"
            />
          </div>
        </Content>
      </header>
      {/* Client */}
      <div className="mt-[122px]">
        <Content>
          <div className="flex justify-between">
            <img src={Logo} alt="Besnik." />

            <img src={Stars} alt="Stars" />
          </div>

          <div className="mt-4 flex justify-between text-base font-medium leading-5 text-[#7D8589]">
            <p className="mt-[7px]">More than 45,000+ companies trust besnik</p>

            <p>5 Star Ratings (2k+ Review)</p>
          </div>

          <div className="mt-[70px] flex justify-between">
            <img src={Client1} alt="Client1" />
            <img src={Client2} alt="Client2" />
            <img src={Client3} alt="Client3" />
            <img src={Client4} alt="Client4" />
            <img src={Client5} alt="Client5" />
          </div>
        </Content>
      </div>
      {/* Guide */}
      <div className="mt-[174px]">
        <Content>
          <div className="text-center">
            <h2 className="text-[35px] font-semibold leading-[35px] text-[#000339]">
              How its works?
            </h2>

            <p className="mx-auto mt-5 max-w-[459px] text-base font-normal leading-[30px] text-[#5A6473]">
              Everything you need to know when you're looking to buy, rent, or
              sell - all in one place.
            </p>
          </div>

          <ul className="mt-[70px] flex justify-center">
            <li className="mx-[70px] flex flex-col items-center">
              <img src={Guide1} alt="Guide1" />
              <h3 className="mt-[26px] text-xl font-medium leading-[22px] text-[#3b3c45]">
                Buyer Guides
              </h3>
              <div className="mt-[10px] flex">
                <a href="#!" className="text-sm font-semibold text-[#0689ff]">
                  How to buy
                </a>
                <img src={Vector} alt="Vector" className="ml-[6px]" />
              </div>
            </li>
            <li className="mx-[70px] flex flex-col items-center">
              <img src={Guide2} alt="Guide2" />
              <h3 className="mt-[26px] text-xl font-medium leading-[22px] text-[#3b3c45]">
                Renter Guides
              </h3>
              <div className="mt-[10px] flex">
                <a href="#!" className="text-sm font-semibold text-[#0689ff]">
                  How to rent
                </a>
                <img src={Vector} alt="Vector" className="ml-[6px]" />
              </div>
            </li>
            <li className="mx-[70px] flex flex-col items-center">
              <img src={Guide3} alt="Guide3" />
              <h3 className="mt-[26px] text-xl font-medium leading-[22px] text-[#3b3c45]">
                Seller Guides
              </h3>
              <div className="mt-[10px] flex">
                <a href="#!" className="text-sm font-semibold text-[#0689ff]">
                  How to sell
                </a>
                <img src={Vector} alt="Vector" className="ml-[6px]" />
              </div>
            </li>
          </ul>

          <div className="mt-[50px] flex justify-center">
            <Button
              content={"Sell Full Guidelines"}
              className={"min-w-[170px]"}
            ></Button>
          </div>
        </Content>
      </div>
      {/* Feature */}
      <div className="mt-[120px] bg-[#F5FAFE] py-[110px]">
        <Content>
          {/* Header */}
          <header>
            <h2 className="text-[35px] font-semibold leading-[35px] text-[#000339]">
              Featured Properties
            </h2>
            <div className="mt-[15px] flex items-center justify-between">
              <p className="text-base font-normal leading-[30px] text-[#5A6473]">
                Everything you need to know when you're looking
              </p>
              <div className="flex">
                <a href="#!" className="text-lg font-semibold text-[#0689ff]">
                  View All Properties
                </a>
                <img src={Vector} alt="Vector" className="ml-2" />
              </div>
            </div>
          </header>

          {/* List */}
          <div className="list mt-[70px] flex gap-[30px]">
            {/* Item 1 */}
            <div className="item flex-1 rounded-xl bg-white">
              <img
                src={FeatureThumb1}
                alt=""
                className="thumb h-[227px] w-full rounded-t-xl object-cover"
              />
              <div className="body px-5 pb-6 pt-[17px]">
                <h3 className="title text-xl font-semibold leading-5 text-[#000339]">
                  Nikko Apartments
                </h3>
                <p className="desc mt-[11px] text-sm font-medium text-[#A3A6AB]">
                  8502 Preston Rd. Inglewood, Maine 98280
                </p>
                <div className="info mt-[21px]">
                  <img src={Feature1} alt="" className="icon inline" />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    5 Beds
                  </span>

                  <img
                    src={Feature2}
                    alt=""
                    className="icon ml-[23px] inline"
                  />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    2 both
                  </span>

                  <img
                    src={Feature3}
                    alt=""
                    className="icon ml-[23px] inline"
                  />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    2000 Sqft
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="item flex-1 rounded-xl bg-white">
              <img
                src={FeatureThumb2}
                alt=""
                className="thumb h-[227px] w-full rounded-t-xl object-cover"
              />
              <div className="body px-5 pb-6 pt-[17px]">
                <h3 className="title text-xl font-semibold leading-5 text-[#000339]">
                  CouCou Homestead
                </h3>
                <p className="desc mt-[11px] text-sm font-medium text-[#A3A6AB]">
                  8502 Preston Rd. Inglewood, Maine 98280
                </p>
                <div className="info mt-[21px]">
                  <img src={Feature1} alt="" className="icon inline" />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    5 Beds
                  </span>

                  <img
                    src={Feature2}
                    alt=""
                    className="icon ml-[23px] inline"
                  />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    2 both
                  </span>

                  <img
                    src={Feature3}
                    alt=""
                    className="icon ml-[23px] inline"
                  />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    2000 Sqft
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="item flex-1 rounded-xl bg-white">
              <img
                src={FeatureThumb3}
                alt=""
                className="thumb h-[227px] w-full rounded-t-xl object-cover"
              />
              <div className="body px-5 pb-6 pt-[17px]">
                <h3 className="title text-xl font-semibold leading-5 text-[#000339]">
                  Lavis 18 Residence
                </h3>
                <p className="desc mt-[11px] text-sm font-medium text-[#A3A6AB]">
                  8502 Preston Rd. Inglewood, Maine 98280
                </p>
                <div className="info mt-[21px]">
                  <img src={Feature1} alt="" className="icon inline" />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    5 Beds
                  </span>

                  <img
                    src={Feature2}
                    alt=""
                    className="icon ml-[23px] inline"
                  />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    2 both
                  </span>

                  <img
                    src={Feature3}
                    alt=""
                    className="icon ml-[23px] inline"
                  />
                  <span className="ml-2 text-sm font-medium leading-[0.14px] text-[#4D4D52]">
                    2000 Sqft
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </main>
  );
};

export default App;
