"use client";
import { CircularProgress } from "@mui/material";
import "../styles/globals.css";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default LoadingSpinner;
