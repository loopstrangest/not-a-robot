import * as React from "react";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

type StartBoxProps = {
  setGameState: (state: number) => void;
};

const StartBox: React.FC<StartBoxProps> = ({ setGameState }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setGameState(0);
    }
  }, [checked]);

  return (
    <Box
      sx={{
        width: 300,
        height: 78,
        border: "2px solid #C1C1C1",
        backgroundColor: "#F9F9F9",
        color: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        cursor: "default",
      }}
      onClick={() => setChecked(true)}
    >
      <FormGroup>
        <FormControlLabel
          sx={{
            fontFamily: "Roboto,helvetica,arial,sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "14px",
            cursor: "default",
          }}
          control={
            <Checkbox
              checked={checked}
              sx={{
                cursor: "default",
                "& svg": {
                  fontSize: "36px",
                  border: "none",
                },
                fontSize: "24px",
              }}
            />
          }
          label="I'm not a robot"
          onClick={(event) => {
            event.stopPropagation();
            setChecked(true);
          }}
        />
      </FormGroup>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <AutorenewIcon sx={{ fontSize: "36px", mx: "auto" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "12px", mb: 0 }}>SRIRACHA</Typography>
          <Typography sx={{ fontSize: "12px" }}>Privacy - Terms</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StartBox;
