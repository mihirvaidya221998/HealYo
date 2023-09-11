import React from "react";
import { useNavigate } from "react-router-dom";

const InsuranceDealsList = ({ deal }) => {
  const { planname, providername, coverage, plantype } = deal;
  const navigate = useNavigate();
  return (
    <div className="card mb-4 p-0 border-0 m-2">
      <div
        className="card-body p-4"
        style={{ cursor: "pointer" }}
      >
        <h5 className="card-title mb-3">
          {planname}
        </h5>
        <p className="card-text mb-1">
          <b>Provider Name:</b> {providername}
        </p>
        <p className="card-text mb-1">
          <b>Coverage:</b> {coverage.toString()}
        </p>
        <p className="card-text mb-1">
          <b>Plan Type:</b>  {plantype}
        </p>
      </div>
    </div>
  );
};

export default InsuranceDealsList;
