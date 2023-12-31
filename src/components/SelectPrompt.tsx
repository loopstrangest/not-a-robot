/** @format */

// SelectPrompt.tsx
import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

type SelectPromptProps = {
  promptText: string | React.JSX.Element;
  plural: boolean;
  isAnySelected: boolean;
};

const SelectPrompt: React.FC<SelectPromptProps> = ({
  promptText,
  plural,
  isAnySelected,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#2196f3",
        color: "#fff",
        padding: "10px",
        textAlign: "left",
        fontWeight: "bold",
        display: "block",
        lineHeight: "1rem",
        mb: 1,
        wordWrap: "break-word",
        whiteSpace: "normal",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "12px",
            md: "14px",
          },
          overflowWrap: "break-word",
        }}
      >
        Select all squares with {plural ? "" : "a"}
      </Typography>
      <Typography
        sx={{
          lineHeight: {
            xs: "1.5rem",
            sm: "1.75rem",
            md: "2rem",
          },
          fontSize: {
            xs: "20px",
            sm: "24px",
            md: "28px",
          },
          fontWeight: 900,
          overflowWrap: "break-word",
        }}
      >
        {typeof promptText === "string"
          ? promptText
          : typeof promptText === "object"
          ? promptText
          : "Unexpected content type"}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "12px",
            md: "14px",
          },
          opacity: isAnySelected ? 0.6 : 1,
          overflowWrap: "break-word",
        }}
      >
        If there are none, click skip
      </Typography>
    </Box>
  );
};

export default SelectPrompt;
