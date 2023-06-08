import React from "react";
import CircularProgress from "@mui/material/CircularProgrees";

export default function Loading() {
  return (
    <div className="center">
      <CircularProgress color="inherit" sinze={96} />;
    </div>
  );
}
