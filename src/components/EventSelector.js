import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

const EventSelector = () => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl className='selector'>
      <FormLabel id="demo-row-radio-buttons-group-label" color="warning" className="form-title">Select Event</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="wildfire" control={<Radio />} label="Wildfire" />
        <FormControlLabel value="earthquake" control={<Radio />} label="Earthquake" />
        <FormControlLabel value="volcano" control={<Radio />} label="Volcano" />
      </RadioGroup>
    </FormControl>
  )
};

export default EventSelector;
