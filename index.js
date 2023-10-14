const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req, res)=>{
  res.send(`Users management server is running on port ${port}`)
});

app.listen(port,()=>{
  console.log(`Users management server is running on port ${port}`)
});