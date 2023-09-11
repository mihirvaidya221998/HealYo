import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { Row } from "antd";
import InsuranceDealsList from "./InsuranceDealsList";
import { Form, Input } from "antd";


const InsuranceProviderDealsPage = () => {
  const [insuranceProviderDeals, setInsuranceProviderDeals] = useState([]);  
  // login user data
  
  const getDeals = async (values) => {
    console.log("I am here");
    if (!(values && 'userId' in values )){
        return ;
    }
      const res = await axios.get(
        `/api/v1/insuranceProvider/getInsuranceDeals/${values['userId']}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
        
      ).then(res => setInsuranceProviderDeals(res.data)).catch( err => {
        setInsuranceProviderDeals()
      });
                
  };



  return (
    
    <Layout>        
      <h1 className="text-center">Insurance Deals</h1>
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
      <button className="btn btn-primary mb-3" type="submit">Search Deals</button>
      </Form>
      <Row className="margin-left">        
        {insuranceProviderDeals ? insuranceProviderDeals.map((deal) => <InsuranceDealsList deal={deal} /> ): <Row className="margin-left">
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
      </Row>
    </Layout>
  );
};

export default InsuranceProviderDealsPage;
