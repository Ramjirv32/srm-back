// Add this middleware before other routes in server.js
app.use((req, res, next) => {
  console.log('Request from origin:', req.headers.origin);
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);
  next();
});
