import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectBest() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        width: "177px",
        height: "35px",
        borderRadius: "5px",
        // border: "1px solid rgba(55, 55, 55, 0.30)",
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label" sx={{ color: "#006DAB" }}>
        Best
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Medium</MenuItem>
        <MenuItem value={20}>Worst</MenuItem>
      </Select>
    </FormControl>
  );
}
