import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">Search</Button>
    </Stack>
  );
}
