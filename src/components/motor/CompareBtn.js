import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function CompareBtn() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "right",
        textDecoration: "none",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          "&:hover": {
            color: "white",
            backgroundColor: "#006DAB",
          },
          borderRadius: "10px",
        }}
      >
        Compare
      </Button>
    </Stack>
  );
}
