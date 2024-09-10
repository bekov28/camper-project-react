import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./style";

export default function SendButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" sx={{ width: "100%" }}>
        Send question
      </Button>
    </Stack>
  );
}
