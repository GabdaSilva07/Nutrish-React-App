import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import ExerciseRow from "./ExerciseRow";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const targetParts = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];

export default function Exercise() {
  const [exerciseLoaded, setExerciseLoaded] = useState(false);
  const [exerciseSearch, setExerciseSearch] = useState("");


  const handleChange = (event) => {
    setExerciseSearch(event.target.value);
  };

  //TODO: Change button to Select
  const btn = (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Target Part</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={exerciseSearch}
          label="Target Part"
          exerciseSearch
          onChange={handleChange}
        >
          {targetParts.map((parts) => (
            <MenuItem key={parts} value={parts}>
              {parts
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(" ")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  return (
    <Container>
      <Typography variant="h3" align="center">
        Exercise Page
      </Typography>
      <br />
      {btn}
      <React.Fragment>
        <ExerciseRow exerciseSearch={exerciseSearch} />
      </React.Fragment>
    </Container>
  );
}
