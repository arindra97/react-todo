import React, { useContext } from "react";
import { Box } from "@mui/material";

import { LevelContext } from "../context/LevelContext";

const NestedComponentSection = (props) => {
  const level = useContext(LevelContext);

  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "10px",
      }}
    >
      {/* Providernya adalah LevelContext */}
      <LevelContext.Provider value={level + 1}>
        {/* kita nge-slot */}
        {props.children}
      </LevelContext.Provider>
    </Box>
  );
};

export default NestedComponentSection;
