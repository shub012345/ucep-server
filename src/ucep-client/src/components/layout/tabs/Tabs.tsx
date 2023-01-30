import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="bg-blue-700 pl-2 pr-2 py-1">
      <ul className="flex ">
        <li className="">
          <Link
            className=" px-6
          
             my-4 text-md active:text-black text-white 
             hover:text-black "
            to={"/home"}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className=" px-6
      py-3
      my-4 text-md active:text-black text-white hover:text-black"
            to={"/application"}
          >
            application
          </Link>
        </li>
        <li>
          <Link
            className=" px-6
             py-3
             my-4 text-md active:text-black text-white hover:text-black"
            to={"/verification"}
          >
            Verification
          </Link>
        </li>
        <li>
          {/* <Link
            className=" px-6
      py-3
      my-4 text-md active:text-black  hover:text-black text-white"
            to={"/myInformation"}
          >
            My information
          </Link> */}
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Tabs;
