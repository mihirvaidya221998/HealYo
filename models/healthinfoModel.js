const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthInfoSchema = new Schema({
    dateofBirth: { type: Date, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    blood_type: { type: String, required: true },
    allergies: { type: [String], required: true },
    premedcondtions: { type: [String], required: true },
    smoking: {type: String, require:true },
    medications: { type: [String], required: true },
    patient: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  });

  const HealthInfoSchemaModel= mongoose.model('HealthInfoSchema', healthInfoSchema);

  module.exports = HealthInfoSchemaModel;