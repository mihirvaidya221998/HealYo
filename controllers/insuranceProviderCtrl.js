const insuranceProviderModel = require('../models/insuranceProviderModel');
const userModel = require('../models/userModels');
const HealthInfoSchemaModel = require('../models/healthinfoModel')
const insurancePlanModel = require('../models/insurancePlanModel')
const mongoose = require('mongoose');


const getInsuranceProviderInfoController = async (req, res) => {
  try {
    const insuranceProvider = await insuranceProviderModel.findOne({
      userId: req.body.userId,
    });
    res.status(200).send({
      success: true,
      message: 'insuranceprovider data fetch success',
      data: insuranceProvider,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: 'Error in Fetching InsuranceProvider Details',
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const insuranceProvider = await insuranceProviderModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: 'InsuranceProvider Profile Updated',
      data: insuranceProvider,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'InsuranceProvider Profile Update issue',
      error,
    });
  }
};

//get single docotor
const getInsuranceProviderByIdController = async (req, res) => {
  try {
    const insuranceProvider = await insuranceProviderModel.findOne({
      _id: req.body.insuranceProviderId,
    });
    res.status(200).send({
      success: true,
      message: 'Sigle Doc Info Fetched',
      data: insuranceProvider,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: 'Erro in Single docot info',
    });
  }
};


const getHealthInfoDetails =  async (req, res) => {
  try {
    const patient = mongoose.Types.ObjectId(req.params.id)
    console.log('patient id is',patient)
    const patientRecord = await HealthInfoSchemaModel.findOne({patient}).exec();
    console.log(JSON.stringify(patientRecord))
    if (!patientRecord) {
      return res.status(404).json({ msg: `Patient not found with ID: ${patientId}` });
    }

    res.json(patientRecord);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};


const getBestInsuranceDealsRequest  =  async (req, res) => {
    try {
      const patient = mongoose.Types.ObjectId(req.params.id)
      console.log('patient id is',patient)  
      // Fetch patient's health information
      const patientHealthInfo = await HealthInfoSchemaModel.findOne({ patient });
  
      if (!patientHealthInfo) {
        return res.status(404).json({ message: 'Patient not found or health information missing.' });
      }
  
      // Calculate best insurance deals based on patient's health information
      const bestInsuranceDeals = await getBestInsuranceDeals(patientHealthInfo);
  
      res.status(200).json(bestInsuranceDeals);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while fetching the best insurance deals.' + error });
    }
  };
  
const getBestInsuranceDeals = async  (healthInfo) => {
      
  const tier = getTierBasedOnHealthInfo(healthInfo)
  return insurancePlanModel.find({plantype:tier})      
}
  

function getTierBasedOnHealthInfo(healthInfo){

  console.log("health info is",healthInfo);
  
  let score = 0;
  const currentDate = new Date();
  const birthDate = new Date(healthInfo.dateofBirth);
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  console.log("age is",age);
  if(age){

    if (age>50){
      score +=10
    }
    else if(age>30){
      score += 5
    }

  }
  
  if(healthInfo.height){
    if(healthInfo.height>150){
      score += 5
    }
    else if (healthInfo.height>=200){
      score += 10
    }
    else if (healthInfo.height <=100){
      score += 10
    }
    
  }
  if(healthInfo.weight){
    if(healthInfo.weight>50){
      score +=5
    }
    else if(healthInfo.weight >=200){
      score += 20
    }      
  }

  console.log("score is",score);

  if(score >30){
    return "tier1"
  }
  else {
    return "tier2"
  }
}


/*
const insuranceProviderAppointmentsController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      doctorId: doctor._id,
    });
    res.status(200).send({
      success: true,
      message: "Doctor Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });
  }
};


const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/doctor-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};
*/

module.exports = {
  getInsuranceProviderInfoController,
  updateProfileController,
  getInsuranceProviderByIdController,
  getHealthInfoDetails,
  getBestInsuranceDealsRequest
  //doctorAppointmentsController,
  //updateStatusController,
};
