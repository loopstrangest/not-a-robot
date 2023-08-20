/** @format */

// SelectGrid.tsx
import React, { useEffect, useState } from "react";
import { Box, CSSObject } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type SelectGridProps = {
  gridSize: number;
  squareSize: number;
  originalImageSize: number;
  selected: boolean[];
  handleSelect: (index: number) => void;
  images: string[];
  singleImageMode: boolean;
};

const SelectGrid: React.FC<SelectGridProps> = ({
  gridSize,
  squareSize,
  originalImageSize,
  selected,
  handleSelect,
  images,
  singleImageMode,
}) => {
  const rowsColumns = Math.sqrt(gridSize);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${rowsColumns}, ${squareSize}px)`,
        gridTemplateRows: `repeat(${rowsColumns}, ${squareSize}px)`,
        gap: "4px",
        boxSizing: "border-box",
      }}
    >
      {selected.map((isSelected, index) => {
        const style: CSSObject = {
          width: `${squareSize}px`,
          height: `${squareSize}px`,
          opacity: isSelected ? 0.4 : 1,
          backgroundColor: isSelected ? "lightgrey" : "white",
          backgroundSize: `${squareSize}px`,
        };

        if (singleImageMode) {
          const rows = rowsColumns;
          const cols = rowsColumns;
          const row = Math.floor(index / rows);
          const col = index % cols;

          const backgroundPositionX = (col * originalImageSize) / cols;
          const backgroundPositionY = (row * originalImageSize) / rows;

          style.backgroundImage = `url(${images[0]})`;
          style.backgroundSize = `${originalImageSize}px ${originalImageSize}px`;
          style.backgroundPosition = `-${backgroundPositionX}px -${backgroundPositionY}px`;
        } else {
          style.backgroundImage = `url(${images[index]})`;
        }

        return (
          <Box key={index} onClick={() => handleSelect(index)} sx={style} />
        );
      })}
    </Box>
  );
};

export default SelectGrid;
