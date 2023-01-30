import { Typography } from "@mui/material";

const Services = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ marginLeft: "15px", marginBottom: "40px" }}
      >
        <h4>What we offer</h4>
      </Typography>
      <div className="basis-1/2 rounded overflow-hidden h-40 shadow-lg ">
        <div className="px-6 py-4">
          <div className="font-bold cardHeader text-xl mb-2 border border-gray-300 shadow text-center">
            Application Summary
          </div>
          <p className="text-gray-700 text-base text-center">
            no balace information available
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
