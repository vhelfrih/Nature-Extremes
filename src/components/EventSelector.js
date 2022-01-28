import { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const EventSelector = ({ onCheck }) => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    onCheck(event.target.value);
    setValue(event.target.value);
  };

  return (
    <FormControl className="selector" sx={{ overflow: "hidden" }}>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        color="warning"
        className="form-title"
        focused="true"
        sx={{
          display: "inline",
          letterSpacing: 2,
          fontWeight: "bold",
          mt: 0.5,
          pt: 1.2,
          textAlign: "center",
        }}
      >
        Select Event
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: 2,
          pb: 1.2,
          mx: 0.5,
        }}
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="Wildfires"
          control={<Radio />}
          label="Wildfires"
        />
        <FormControlLabel
          value="Earthquakes"
          control={<Radio />}
          label="Earthquakes"
        />
        <FormControlLabel
          value="Volcanoes"
          control={<Radio />}
          label="Volcanoes"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default EventSelector;
