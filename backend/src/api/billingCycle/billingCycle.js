const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
})

const debtSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, "Set the value of debt"] },
  status: { type: String, required: false, uppercase: true,
            enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, required: true },
  day: { type: Number, min: 1, max: 31, required: false },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)