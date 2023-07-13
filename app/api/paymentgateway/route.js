import checksum from 'paytm-pg-node-sdk/checksum';
 async function handler(req, res) {
  // Generate a unique order ID
  const orderId = 'YOUR_UNIQUE_ORDER_ID';

  // Configure your Paytm merchant credentials
  const paytmParams = {
    MID: 'Oj',
    WEBSITE: 'WEBSTAGING', // Change to 'DEFAULT' for production
    CHANNEL_ID: 'WEB',
    INDUSTRY_TYPE_ID: 'Retail',
    ORDER_ID: orderId,
    CUST_ID: 'CUSTOMER_ID',
    MOBILE_NO: 'CUSTOMER_MOBILE_NUMBER',
    EMAIL: 'CUSTOMER_EMAIL',
    TXN_AMOUNT: '100', // Payment amount
    CALLBACK_URL: 'http://localhost:3000/api/callback', // Payment callback URL
  };

  // Generate checksum hash using your merchant key
  const checksumHash = await checksum.generateSignature(paytmParams, 'YOUR_MERCHANT_KEY');

  // Add the checksum hash to the Paytm parameters
  paytmParams.CHECKSUMHASH = checksumHash;

  // Redirect the user to the Paytm payment page
  res.redirect(`https://securegw-stage.paytm.in/theia/processTransaction?orderid=${orderId}`);
}
export {handler as GET,handler as POST}