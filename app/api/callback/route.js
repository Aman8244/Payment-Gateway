async function handler(req, res) {
    // Parse the response parameters from Paytm callback
    const { ORDERID, TXNID, TXNAMOUNT, STATUS } = req.query;
  
    // Verify the checksum hash received from Paytm
    // Use the same merchant key used to generate the checksum hash earlier
    const isValidChecksum = await checksum.verifySignature(req.query, 'YOUR_MERCHANT_KEY');
  
    if (isValidChecksum) {
      // Payment verification successful
      if (STATUS === 'TXN_SUCCESS') {
        // Handle successful payment
        // Update your database, send notifications, etc.
        res.status(200).send('Payment successful');
      } else {
        // Handle payment failure or other status
        res.status(200).send('Payment failed');
      }
    } else {
      // Invalid checksum
      res.status(400).send('Invalid checksum');
    }
  }
  export {handler as GET,handler as POST}