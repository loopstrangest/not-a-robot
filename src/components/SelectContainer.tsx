/** @format */

import React, { useEffect, useState } from "react";
import SelectPrompt from "./SelectPrompt";
import SelectGrid from "./SelectGrid";
import SelectFooter from "./SelectFooter";
import { Box } from "@mui/material";
import "../styles/SelectContainerStyles.css";

type SelectContainerProps = {
  plural: boolean;
  level: number;
  setLevel: any;
  levelData: {
    prompt: string;

    gridSize: number;
    singleImageMode: boolean;
    images:
      | string[]
      | { image: string; isCorrect?: boolean; optional?: boolean }[];
    correctAnswers?: number[];
  };
};

const SelectContainer: React.FC<SelectContainerProps> = ({
  plural,
  level,
  setLevel,
  levelData,
}) => {
  const gridSize = levelData.gridSize;
  const [selected, setSelected] = useState<boolean[]>(
    Array(gridSize).fill(false)
  );
  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  const [fadeInClass] = useState("fadeIn");
  const [fadeOutClass, setFadeOutClass] = useState("");
  const [incorrectGuessCount, setIncorrectGuessCount] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [shuffledImageObjects, setShuffledImageObjects] = useState<
    typeof levelData.images
  >([]);
  const [squareSize, setSquareSize] = useState(100);
  const [originalImageSize, setOriginalImageSize] = useState(300);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    if (isMobile) {
      if (gridSize === 25) {
        setSquareSize(60);
        setOriginalImageSize(300);
      }
      if (gridSize === 16) {
        setSquareSize(80);
        setOriginalImageSize(320);
      }
    } else {
      setSquareSize(100);

      if (gridSize === 25) {
        setOriginalImageSize(500);
      }
      if (gridSize === 16) {
        setOriginalImageSize(400);
      }
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, gridSize]);
  useEffect(() => {
    if (levelData) {
      if (levelData.singleImageMode) {
        setImages(levelData.images as string[]);
        setCorrectAnswers(levelData.correctAnswers!);
      } else {
        const shuffledImages = [
          ...(levelData.images as {
            image: string;
            isCorrect: boolean;
            optional?: boolean;
          }[]),
        ].sort(() => Math.random() - 0.5);
        setShuffledImageObjects(shuffledImages);
        setImages(shuffledImages.map((imgObj) => imgObj.image));

        const newCorrectAnswers = shuffledImages
          .map((imgObj, index) =>
            imgObj.isCorrect || imgObj.optional ? index + 1 : -1
          )
          .filter((index) => index !== -1);
        setCorrectAnswers(newCorrectAnswers);
        console.log("newCorrectAnswers", newCorrectAnswers);
      }
    }
  }, [levelData]);

  let modifiedPrompt: string | React.JSX.Element = levelData.prompt;
  if (incorrectGuessCount >= 2) {
    if (levelData.prompt === "loss") {
      modifiedPrompt = (
        <span>
          <a
            href="https://knowyourmeme.com/memes/loss"
            target="_blank"
            rel="noopener noreferrer"
          >
            loss
          </a>
        </span>
      );
    } else if (levelData.prompt === "ingredients in the perfect egg bite") {
      modifiedPrompt = (
        <span>
          ingredients in{" "}
          <a
            href="https://youtu.be/ktVIQZ7tiag"
            target="_blank"
            rel="noopener noreferrer"
          >
            the perfect egg bite
          </a>
        </span>
      );
    }
  }

  const isAnySelected = selected.includes(true);
  const side = Math.sqrt(gridSize);
  const containerWidth = squareSize * side + 4 * (side - 1);

  const reset = () => {
    setSelected(Array(gridSize).fill(false));
  };

  const handleSelect = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const verifyOrSkip = () => {
    if (levelData.singleImageMode) {
      // For single image mode, the selected answers must exactly match the correct answers
      const answer = selected.flatMap((value, index) =>
        value ? index + 1 : []
      );
      if (
        JSON.stringify(answer.sort()) === JSON.stringify(correctAnswers.sort())
      ) {
        setFadeOutClass("fadeOut");
        setTimeout(() => {
          setLevel(level + 1);
        }, 500);
        setTimeout(() => {
          setFadeOutClass("");
        }, 1000);
      } else {
        setIsCorrect(false);
        setIncorrectGuessCount((prev) => prev + 1);
        setTimeout(() => setIsCorrect(true), 250);
      }
    } else {
      const requiredImages = (
        shuffledImageObjects as {
          image: string;
          isCorrect: boolean;
          optional?: boolean;
        }[]
      )
        .map((imgObj, index) => (imgObj.isCorrect ? index + 1 : -1))
        .filter((index) => index !== -1);

      const incorrectImages = (
        shuffledImageObjects as {
          image: string;
          isCorrect: boolean;
          optional?: boolean;
        }[]
      )
        .map((imgObj, index) =>
          !imgObj.isCorrect && !imgObj.optional ? index + 1 : -1
        )
        .filter((index) => index !== -1);

      const answer = selected.flatMap((value, index) =>
        value ? index + 1 : []
      );

      if (
        requiredImages.every((img) => answer.includes(img)) &&
        !answer.some((img) => incorrectImages.includes(img))
      ) {
        setFadeOutClass("fadeOut");
        setTimeout(() => {
          setLevel(level + 1);
        }, 500);
        setTimeout(() => {
          setFadeOutClass("");
        }, 1000);
      } else {
        setIsCorrect(false);
        setIncorrectGuessCount((prev) => prev + 1);
        setTimeout(() => setIsCorrect(true), 250);
      }
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #C1c1c1",
        borderBottom: "0px",
        padding: 8,
        paddingBottom: 0,
        boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 3px",
        width: `${containerWidth}px`,
      }}
      className={`selectContainer ${fadeInClass} ${fadeOutClass}`}
    >
      <SelectPrompt
        plural={plural}
        promptText={modifiedPrompt}
        isAnySelected={isAnySelected}
      />
      <SelectGrid
        gridSize={gridSize}
        squareSize={squareSize}
        originalImageSize={originalImageSize}
        selected={selected}
        handleSelect={handleSelect}
        images={images}
        singleImageMode={levelData.singleImageMode}
      />
      <SelectFooter
        reset={reset}
        isAnySelected={isAnySelected}
        verifyOrSkip={verifyOrSkip}
        isCorrect={isCorrect}
      />
    </Box>
  );
};

export default SelectContainer;
