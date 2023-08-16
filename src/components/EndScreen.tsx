// SelectPrompt.tsx
import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

const EndScreen: React.FC = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#2196f3",
        color: "#fff",
        padding: "10px",
        textAlign: "left",
        fontWeight: "bold",
        fontSize: "14px",
        display: "block",
        lineHeight: "1rem",
        mb: 1,
        wordWrap: "break-word",
        whiteSpace: "normal",
      }}
    >
      <Typography sx={{ fontSize: "14px", overflowWrap: "break-word" }}>
        You did it! You Rule!
      </Typography>
    </Box>
  );
};

export default EndScreen;
