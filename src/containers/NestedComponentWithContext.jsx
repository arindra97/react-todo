import React from "react";
import { Box, Typography } from "@mui/material";

// Header & Section 2 Component yang terpisah
import Section from "../components/NestedComponentSection";
import Heading from "../components/NestedComponentHeader";

const NestedComponentWithContext = () => {
  return (
    <Box>
      <Typography variant="h5">NestedComponentWithContext</Typography>

      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Header 2</Heading>
          <Heading>Header 2</Heading>
          <Heading>Header 2</Heading>
          <Section>
            <Heading>Header 3</Heading>
            <Heading>Header 3</Heading>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponentWithContext;
