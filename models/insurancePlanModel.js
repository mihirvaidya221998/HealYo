const mongoose = require('mongoose');


const insurancePlansSchema = new mongoose.Schema({
    planname: { type: String, required: true },
    providername: { type: String, required: true },
    coverage: { type: [String], required: true },
    creationdate: { type: Date, required: true },
    plantype: {type: String}
  });


  const insurancePlanModel = mongoose.model(
    'insurancePlan',
    insurancePlansSchema
  );
  module.exports = insurancePlanModel;
  