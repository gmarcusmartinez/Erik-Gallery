import React from "react";

const PrintsLoading = () => {
  return (
    <>
      <LoadingPrintCard />
      <LoadingPrintCard />
      <LoadingPrintCard />
      <LoadingPrintCard />
      <LoadingPrintCard />
      <LoadingPrintCard />
    </>
  );
};

export default PrintsLoading;

const LoadingPrintCard = () => {
  return (
    <div className="loading-print-card">
      <div className="loading-print-card__img shine"></div>
      <div className="loading-print-card__details shine"></div>
      <div className="loading-print-card__size shine"></div>
    </div>
  );
};
