import React from "react";

import Feature from "./Sections/Feature";
import Advantage from "./Sections/Advantage";
import Box from "../components/Box";

const HomePage = () => {
  return (
    <Box
      color="#002a5e"
      fontSize="10px"
      fontFamily={`"Microsoft JhengHei", "Noto Sans", Arial, sans-serif`}
    >
      <Advantage />
      <Feature />
    </Box>
  );
};

export default HomePage;
