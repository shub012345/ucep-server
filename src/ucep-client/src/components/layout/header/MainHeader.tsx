import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      {" "}
      <header>
        <div className="landingImage  w-full ">
          <div className="flex container mx-auto py-5 fle-wrap">
            <h4 className="text-2xl  text-white">
              <img src="uceplogo.png" alt="logo" className="h-8 w-28" />
            </h4>
            <nav className="ml-auto flex flex-row gap-3 flex-end">
              <span
                className=" flex text-white "
                onClick={() => {
                  navigate("./home");
                }}
              >
                home
              </span>
              <span
                className="text-white "
                onClick={() => {
                  navigate("./contact");
                }}
              >
                Contact us
              </span>
              <span className="text-white">Services</span>
            </nav>
          </div>
          <h1 className="text-gray-100 md:text-start text-5xl ml-12 mt-8 opacity-90">
            Welcome to UCEP
          </h1>

          <div className="flex">
            <div className="flex mt-8">
              <div className="basis-1/3 rounded  hover:bg-gray-100 tras h-40 shadow-lg bg-gray-200 ml-8 mt-60">
                <div className="px-6 py-4 ">
                  <button
                    className="font-bold cardHeader  text-xl mb-2 border border-gray-300 shadow text-center"
                    onClick={() => {
                      //   navigate("/root");
                    }}
                  >
                    Find support
                  </button>
                  <p className="text-gray-700 text-base text-center">
                    take a self assesment to find a support
                  </p>
                </div>
              </div>
              <div className="basis-1/3 rounded overflow-hidden h-40 shadow-lg bg-gray-200 ml-8 mt-60">
                <div className="flex flex-col px-6 py-4 flex-center">
                  <button
                    className="font-bold text-center cardHeader text-xl mb-2 px-4 border border-gray-300 shadow "
                    onClick={handleClick}
                  >
                    Login
                  </button>
                  <p className="text-gray-700 text-base text-center">
                    login or create an acoount
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
