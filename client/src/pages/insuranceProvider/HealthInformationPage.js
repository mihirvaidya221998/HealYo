import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { Row } from "antd";
import { Form, Input } from "antd";


const datatimeUtil = (dateString) => {
  const dateObject = new Date(dateString);

  const year = dateObject.getUTCFullYear();
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript, so add 1
  const day = String(dateObject.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}


const HealthInformationPage = () => {
  const [insuranceProviderDeals, setInsuranceProviderDeals] = useState();
  // login user data

  const getDeals = async (values) => {
    if (!(values && 'userId' in values)) {
      return;
    }
    try {

      const res = await axios.get(
        `/api/v1/insuranceProvider/getHealthInfo/${values['userId']}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }

      ).then(res => setInsuranceProviderDeals(res.data)).catch(err => setInsuranceProviderDeals());      
    } catch (error) {
      console.log(error);
    }
  };


  return (

    <Layout>
      <h1 className="text-center">Patient Health Information</h1>
      <Form
        layout="vertical"
        onFinish={getDeals}
        className="search-insurance-deals-form"
      >

        <div className="formField">
          <Form.Item label="User ID:" name="userId" >
            <Input type="userId" required />
          </Form.Item>
        </div>
        <button className="btn btn-primary mb-3" type="submit">Search Health Information</button>
      </Form>
      {insuranceProviderDeals ?
        <Row className="margin-left">
          <div className="card mb-4 p-0 border-0 m-2">
            <div
              className="card-body p-4"
              style={{ cursor: "pointer" }}
            >
              <h5 className="card-title mb-3">
                <b>Patient Information</b>
              </h5>
              <p className="card-text mb-1">
                <b>Height: </b> {insuranceProviderDeals.height}
              </p>
              <p className="card-text mb-1">
                <b>Weight: </b>{insuranceProviderDeals.weight}
              </p>
              <p className="card-text mb-1">
                <b>Date of Birth: </b>{datatimeUtil(insuranceProviderDeals.dateofBirth)}
              </p>
              <p className="card-text mb-1">
                <b>Pre-Medical conditions: </b>{insuranceProviderDeals.premedcondtions.toString()}
              </p>
              <p className="card-text mb-1">
                <b>Blood Type :</b> {insuranceProviderDeals.blood_type}
              </p>
              <p className="card-text mb-1">
                <b>Allergies: </b>{insuranceProviderDeals.allergies.toString()}

              </p>
              <p className="card-text mb-0">
                <b>Smoking: </b>{insuranceProviderDeals.smoking}
              </p>
              <p className="card-text mb-0">
                <b>Medications: </b> {insuranceProviderDeals.medications.toString()}
              </p>

            </div>
          </div>
        </Row> : <Row className="margin-left">
          <div className="card mb-4 p-0 border-0 m-2">
            <div
              className="card-body p-4"
              style={{ cursor: "pointer" }}
            >
              <h5 className="card-title mb-3">
                <b>No Patient details exist</b>
              </h5>              

            </div>
          </div> </Row> }

    </Layout>
  );
};

export default HealthInformationPage;
