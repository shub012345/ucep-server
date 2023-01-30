import { Typography } from "@mui/material";

import Layout from "../components/layout/Layout";
import Tabs from "../components/layout/tabs/Tabs";

const MyInformation = () => {
  return (
    <Layout>
      <Tabs />
      <Typography
        variant="h4"
        sx={{ marginLeft: "15px", marginBottom: "40px" }}
      >
        <h4>MyInformation</h4>
        <div className="basis-4/6 rounded overflow-hidden h-40 shadow-lg bg-gray-100 ">
          <div className="px-6 py-4">
            <div className="font-bold cardHeader text-xl mb-2 border border-gray-300 shadow text-center">
              Application Summary
            </div>
            <p className="text-gray-700 text-base text-center">
              no balace information available
            </p>
          </div>
        </div>
      </Typography>
    </Layout>
  );
};

export default MyInformation;
