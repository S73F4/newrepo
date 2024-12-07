const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Simple Node.js Express Web Page!</h1>');
});


// Additional route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This is a simple Node.js Express webpage!</p>');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
