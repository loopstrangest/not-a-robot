/** @format */

import * as React from "react";
import { Typography, Button, Fade, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import PlaceholderIcon from "@mui/icons-material/HelpOutline";
import { useEffect, useState } from "react";

const EndScreen: React.FC<{ setLevel: (level: number) => void }> = ({
  setLevel,
}) => {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage1(true), 0);
    setTimeout(() => setShowMessage2(true), 1000);
    setTimeout(() => setShowButton1(true), 2000);
    setTimeout(() => setShowButton2(true), 2500);
    setTimeout(() => setShowIcons(true), 3000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        mt: 4,
        color: "black",
      }}
    >
      <Fade in={showMessage1}>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "30px" },
            textAlign: "center",
            mb: 2,
          }}
        >
          Humanity confirmed!
        </Typography>
      </Fade>
      <Fade in={showMessage2}>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "30px" },
            textAlign: "center",
            mb: 2,
          }}
        >
          Thanks for playing 🤗
        </Typography>
      </Fade>
      <Fade in={showButton1}>
        <Button
          onClick={() => setLevel(1)}
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#2196f3",
            color: "white",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            "&:hover": { backgroundColor: "#1976d2" },
          }}
        >
          Play Again
        </Button>
      </Fade>
      <Fade in={showButton2}>
        <Button
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?text=I demonstrated my humanity! Can you?&url=https://strangestloop.io/not-a-robot",
              "_blank"
            )
          }
          sx={{
            mb: 2,
            backgroundColor: "#2196f3",
            color: "white",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            "&:hover": { backgroundColor: "#1976d2" },
          }}
        >
          Share on Twitter
        </Button>
      </Fade>
      <Fade in={showIcons}>
        <Box display="flex" justifyContent="center" width="100%" mt={2}>
          <IconButton
            onClick={() =>
              window.open("https://twitter.com/strangestloop", "_blank")
            }
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:hover .MuiSvgIcon-root": { opacity: 0.5 },
            }}
          >
            <TwitterIcon
              fontSize="inherit"
              sx={{
                fontSize: "3.5rem",
                color: "black",
              }}
            />
          </IconButton>

          <IconButton
            onClick={() => window.open("https://strangestloop.io", "_blank")}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:hover .MuiSvgIcon-root": { opacity: 0.5 },
            }}
          >
            <HomeIcon
              fontSize="inherit"
              sx={{
                fontSize: "3.5rem",
                color: "black",
              }}
            />
          </IconButton>

          <Link
            href="https://buymeacoffee.com/loopy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "15px",
              borderRadius: "200px",
              width: "2.5rem",
              height: "2.5rem",
              color: "black",
              "&:hover img": { opacity: 0.5 },
            }}
          >
            <img src="/images/bmc.png" width="30" alt="Buy Me a Coffee" />
          </Link>
        </Box>
      </Fade>
    </Box>
  );
};

export default EndScreen;
