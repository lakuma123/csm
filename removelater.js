import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [SSIM, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">SSIM</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={SSIM1,SSIM2,SSIM3}
          onChange={handleChange}
          label="SSIM"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={SSIM1}></MenuItem>
          <MenuItem value={SSIM2}></MenuItem>
          <MenuItem value={SSIM3}></MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">SSIM</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={SSIM}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={SSIM1}></MenuItem>
          <MenuItem value={SSIM2}></MenuItem>
          <MenuItem value={SSIM3}></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
