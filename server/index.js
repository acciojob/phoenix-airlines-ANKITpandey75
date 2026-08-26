const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/flights', (_request, response) => response.json([{ id: 'PX101', from: 'New Delhi', to: 'Mumbai', price: 5499 }]));
app.post('/api/bookings', (request, response) => response.status(201).json({ reference: `PHX${Date.now().toString().slice(-6)}`, ...request.body }));
app.listen(process.env.PORT || 5000, () => console.log('Phoenix API listening on port 5000'));
