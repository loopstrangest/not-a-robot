// SelectGrid.tsx
import React, { useState } from "react";
import { Box, CSSObject } from "@mui/material";

type SelectGridProps = {
  gridSize: number;
  selected: boolean[];
  handleSelect: (index: number) => void;
  images: string[];
  singleImageMode: boolean;
};

const SelectGrid: React.FC<SelectGridProps> = ({
  gridSize,
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
        gridTemplateColumns: `repeat(${rowsColumns}, 1fr)`,
        gridTemplateRows: `repeat(${rowsColumns}, 1fr)`,
        gap: "4px",
        boxSizing: "border-box",
      }}
    >
      {selected.map((isSelected, index) => {
        const style: CSSObject = {
          width: "100px",
          height: "100px",
          opacity: isSelected ? 0.4 : 1,
          backgroundColor: isSelected ? "lightgrey" : "white",
        };

        if (singleImageMode) {
          const rows = rowsColumns;
          const cols = rowsColumns;
          const row = Math.floor(index / rows);
          const col = index % cols;
          const backgroundSize = `${cols * 100}% ${rows * 100}%`;
          const backgroundPosition = `${(col / (cols - 1)) * 100}% ${
            (row / (rows - 1)) * 100
          }%`;

          style.backgroundImage = `url(${images[0]})`;
          style.backgroundSize = backgroundSize;
          style.backgroundPosition = backgroundPosition;
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
