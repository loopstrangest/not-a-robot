/** @format */

import * as React from "react";
import { Typography, Button, Fade, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import PlaceholderIcon from "@mui/icons-material/HelpOutline";
import { useEffect, useState } from "react";

const PlaytestScreen: React.FC<{ setLevel: (level: number) => void }> = ({
  setLevel,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "calc(100% - 20px)",
        maxHeight: "calc(100vh - 20px)",
        mt: 4,
        color: "black",
        p: 2,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          border: "1px solid #267b30",
          boxShadow: "3px 3px 5px 2px rgba(60,155,71,.2)",
          backgroundColor: "#e3ffe3",
          borderRadius: "10px",
          p: 2,
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "30px" },
            textAlign: "center",
          }}
        >
          Thank you for testing Not a Robot!
          <br />
          Please set aside 15+ minutes to play.
          <br />
          Let me know which prompts are most and least engaging.
        </Typography>
      </Box>
      <Fade in={showButton}>
        <Button
          onClick={() => setLevel(0)}
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#2196f3",
            color: "white",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            "&:hover": { backgroundColor: "#1976d2" },
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #1a74c1",
            textTransform: "none", // this is to prevent all caps
          }}
        >
          Let's go!
        </Button>
      </Fade>
    </Box>
  );
};

export default PlaytestScreen;
