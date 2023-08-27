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
  levelData2,
  levelData3,
  levelData4,
  levelData5,
  levelData6,
  levelData7,
  levelData8,
  levelData9,
  levelData10,
  levelData11,
  levelData12,
  levelData13,
  levelData14,
  levelData15,
  levelData16,
  levelData17,
  levelData18,
  levelData19,
  levelData20,
  levelData21,
  levelData22,
  levelData23,
  levelData24,
  levelData25,
} from "../utils/levelData";
import "../styles/GameStyles.css";

interface GameProps {
  setGameMode: React.Dispatch<React.SetStateAction<string | null>>;
}

const Game: React.FC<GameProps> = ({ setGameMode }) => {
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
            levelData={levelData2}
          />
        ) : level === 3 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData3}
          />
        ) : level === 4 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData4}
          />
        ) : level === 5 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData5}
          />
        ) : level === 6 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData6}
          />
        ) : level === 7 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData7}
          />
        ) : level === 8 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData8}
          />
        ) : level === 9 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData9}
          />
        ) : level === 10 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData10}
          />
        ) : level === 11 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData11}
          />
        ) : level === 12 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData12}
          />
        ) : level === 13 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData13}
          />
        ) : level === 14 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData14}
          />
        ) : level === 15 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData15}
          />
        ) : level === 16 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData16}
          />
        ) : level === 17 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData17}
          />
        ) : level === 18 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData18}
          />
        ) : level === 19 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData19}
          />
        ) : level === 20 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData20}
          />
        ) : level === 21 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData21}
          />
        ) : level === 22 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData22}
          />
        ) : level === 23 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData23}
          />
        ) : level === 24 ? (
          <SelectContainer
            key={level}
            plural={true}
            level={level}
            setLevel={setLevel}
            levelData={levelData24}
          />
        ) : level === 25 ? (
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

export default Game;
