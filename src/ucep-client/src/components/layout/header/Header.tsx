import type { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC<PropsWithChildren> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <header>
        <div className="w-full  bg-gradient-to-b from-appColor-600 to-gradientColor-600 ">
          <div className="flex container mx-auto py-3">
            <h4 className="text-2xl  text-white">ucep</h4>
            <nav className="ml-auto flex flex-row gap-3 flex-end">
              <span
                className=" flex text-white "
                onClick={() => {
                  navigate("../home");
                }}
              >
                home
              </span>
              <span
                className="text-white "
                onClick={() => {
                  navigate("../contact");
                }}
              >
                Contact us
              </span>
              <button
                className="rounded-2xl border border-inherit px-6 py-0.5 bg-white hover:bg-gray-100 "
                onClick={handleClick}
              >
                Log out
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
