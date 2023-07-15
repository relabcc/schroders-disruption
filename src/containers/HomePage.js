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
      <Feature />
      <Advantage />
    </Box>
  );
};

export default HomePage;
