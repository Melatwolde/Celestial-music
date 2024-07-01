const express = require('express');
const path = require('path');
const app = express();

// Corrected static path
const staticPath = path.join('C:', 'Users', 'j', 'Desktop', 'hakimhub icons', 'htmlandcss', 'img');

// Serve static files from corrected path
app.use(express.static(staticPath));

// Serve a specific file (Untitled design.gif) on a specific route
app.get('/image', (req, res) => {
  const filePath = path.join(staticPath, 'Untitled design.gif'); // Corrected file path
  res.sendFile(filePath);
});

const PORT = 3337;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));