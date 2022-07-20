import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { LevelContext } from "../context/LevelContext";

const NestedComponentHeader = ({ children }) => {
  // switching
  // Consume the LevelContext
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <Typography variant="h1">{children}</Typography>;
    case 2:
      return <Typography variant="h2">{children}</Typography>;
    case 3:
      return <Typography variant="h3">{children}</Typography>;
    case 4:
      return <Typography variant="h4">{children}</Typography>;
    case 5:
      return <Typography variant="h5">{children}</Typography>;
    case 6:
      return <Typography variant="h6">{children}</Typography>;
    default:
      return <Typography>Level hanya 1-6</Typography>;
  }
};

export default NestedComponentHeader;
