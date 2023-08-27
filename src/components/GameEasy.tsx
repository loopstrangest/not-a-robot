/** @format */

import * as React from "react";
import StartBox from "./StartBox";
import { useState } from "react";
import SelectContainer from "./SelectContainer";
import EndScreen from "./EndScreen";
import PlaytestScreen from "./PlaytestScreen";
import { Box, Container, Typography } from "@mui/material";
import {
  levelData1,
  levelData3,
  levelData4,
  levelData6,
  levelData10,
  levelData14,
  levelData22,
  levelData25,
} from "../utils/levelData";
import "../styles/GameStyles.css";

interface GameEasyProps {
  setGameMode: React.Dispatch<React.SetStateAction<string | null>>;
}

const GameEasy: React.FC<GameEasyProps> = ({ setGameMode }) => {
  const initialLevel = 0;
  const [level, setLevel] = useState(initialLevel);
  const [fadeOutClass, setFadeOutClass] = useState("");

  const handleFadeOut = () => {
    setFadeOutClass("fadeOut");
    setTimeout(() => {
      setLevel(1);
    }, 500);
  };

  return (
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
        sx={{
          position: "absolute",
          top: {
            xs: "100px",
            sm: "125px",
            md: "150px",
          },
          margin: "0 auto 60px",
        }}
      >
        {level === -1 ? (
          <PlaytestScreen setLevel={setLevel} />
        ) : level === 0 ? (
          <Box className={`startBox ${fadeOutClass}`}>
            <StartBox setGameState={handleFadeOut} />
          </Box>
        ) : level === 1 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData1}
          />
        ) : level === 2 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData22}
          />
        ) : level === 3 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData6}
          />
        ) : level === 4 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData10}
          />
        ) : level === 5 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData4}
          />
        ) : level === 6 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData3}
          />
        ) : level === 7 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData14}
          />
        ) : level === 8 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData25}
          />
        ) : (
          <EndScreen setGameMode={setGameMode} />
        )}
      </Box>
    </Container>
  );
};

export default GameEasy;
