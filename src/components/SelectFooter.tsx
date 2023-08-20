/** @format */

import React from "react";
import { Box, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import CloseIcon from "@mui/icons-material/Close";

type SelectFooterProps = {
  reset: () => void;
  isAnySelected: boolean;
  verifyOrSkip: () => void;
  isCorrect: boolean;
};

const SelectFooter: React.FC<SelectFooterProps> = ({
  reset,
  isAnySelected,
  verifyOrSkip,
  isCorrect,
}) => {
  const shake = isCorrect
    ? {}
    : {
        animation: "shake 0.25s",
        "@keyframes shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      };

  return (
    <Box
      p={1}
      mt={1}
      mx={-1}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid #C1C1C1",
        borderLeft: "0px",
        borderRight: "0px",
      }}
    >
      <Button onClick={reset} sx={{ width: "20px" }}>
        <RefreshIcon sx={{ fontSize: "32px" }} />
      </Button>
      <Button
        variant="contained"
        color={isCorrect ? "primary" : "error"}
        onClick={verifyOrSkip}
        sx={{
          ...shake,
          width: "100px",
          fontWeight: 700,
          letterSpacing: -0.2,
          borderRadius: "2px",
        }}
      >
        {isCorrect ? isAnySelected ? "VERIFY" : "SKIP" : <CloseIcon />}
      </Button>
    </Box>
  );
};

export default SelectFooter;
