const crypto = require('crypto');
require("dotenv")

function generateSignature(data, key) {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest('hex');
}

// Example usage
const merchantKey = 'b@PIFRUD%TA#3#Bw';
const merchantId = 'sVTEIe17420461517426';
const payload = `${merchantId}|ORDERID_98765|1.00|INR|CUST_001|http://localhost:3002/success|WEBSTAGING`

const signature = generateSignature(payload, merchantKey);
console.log(signature);
