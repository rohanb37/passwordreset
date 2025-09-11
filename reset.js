const express = require('express');
const app = express();
// ACS endpoint
app.post("/acs", (req, res) => {
  console.log("Received SAMLResponse, redirecting user...");
  res.redirect("https://resetpassword-demo.s3.eu-north-1.amazonaws.com/resetpassword.html");
});




app.listen(3010, () => console.log('App listening on port 3010'));