import React from "react";

const LoadingSpinner = (Wrapped) => {
  const Spinner = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <h2 style={{ fontSize: "2rem" }}>Loading please wait...</h2>;
    }
    if (!isLoading) {
      return <Wrapped isLoading={isLoading} {...props} />;
    }
    if (isLoading === "standBy") {
      return {};
    }
  };
  return Spinner;
};

export default LoadingSpinner;
