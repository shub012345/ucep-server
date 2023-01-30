import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <h1 className="text-center text-4xl mt-16 underline decoration-blue-500">
          Contact us
        </h1>
        <h1 className="text-center ">
          Ready to start your next project with us?
        </h1>
        <h1 className="text-center ">
          Give us a call or send us an email and we will get back to you as soon
          as possible!
        </h1>
        <div className="flex flex-row gap-32 justify-center">
          <div className="flex flex-col  justify-center items-center">
            <img className="w-32 h-32" src="/email.png" alt="jj" />
            <h1>+91-9893339788</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-28 h-28" src="/phone.png" alt="jj" />
            <Link to="/contact" color="primary">
              info@gigatorb.com
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
