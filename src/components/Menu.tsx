/** @format */

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Game from "./Game";
import GameEasy from "./GameEasy";
import "../styles/MenuStyles.css";

const Menu: React.FC = () => {
  const [gameMode, setGameMode] = useState<string | null>(null);

  const handleGameModeChange = (mode: string) => {
    setGameMode(mode);
  };

  return (
    <Box className="menu-container">
      {gameMode ? (
        gameMode === "easy" ? (
          <GameEasy setGameMode={setGameMode} />
        ) : (
          <Game setGameMode={setGameMode} />
        )
      ) : (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            userSelect: "none",
          }}
        >
          <Box className="menu-button-container">
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{
                position: "absolute",
                top: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                height: "22px",
                display: "block",
                textAlign: "center",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: {
                  xs: "clamp(24px, 10vw, 32px)",
                  sm: "clamp(28px, 15vw, 36px)",
                  md: "clamp(32px, 20vw, 40px)",
                },
                whiteSpace: "nowrap",
              }}
            >
              🤖 Not a Robot
            </Typography>
            <Box
              className="menu-button"
              onClick={() => handleGameModeChange("easy")}
            >
              <img src="/images/easy-face.png" alt="Easy Mode" />
              <Typography variant="body1">Easy</Typography>
            </Box>
            <Box
              className="menu-button"
              onClick={() => handleGameModeChange("hard")}
            >
              <img src="/images/hard-face.png" alt="Hard Mode" />
              <Typography variant="body1">Hard</Typography>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default Menu;
