import { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {styles} from '@mui/material/styles';
;

const EventSelector = () => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className="selector" sx={{overflow: 'hidden'}}>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        color="warning"
        className="form-title"
        focused="true"
        sx={{
          display: 'inline',
          fontWeight: 'bold',
          mt: 0.5,
          pt: 1.2,
          textAlign: 'center'
        }}
      >
        Select Event
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{
          display: 'inline',
          pl: 2,
          pb: 1.2,
          mx: 0.5,
        }}
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="wildfire"
          control={<Radio />}
          label="Wildfire"
        />
        <FormControlLabel
          value="earthquake"
          control={<Radio />}
          label="Earthquake"
        />
        <FormControlLabel value="volcano" control={<Radio />} label="Volcano" />
      </RadioGroup>
    </FormControl>
  );
};

export default EventSelector;
