import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";



ReactDOM.render(<App />, document.getElementById("root"));

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const flights = [{ id: 'PX101', from: 'New Delhi', to: 'Mumbai', price: 5499 }, { id: 'PX214', from: 'New Delhi', to: 'Mumbai', price: 6299 }];
app.get('/api/flights', (_req, res) => res.json(flights));
app.post('/api/bookings', (req, res) => res.status(201).json({ reference: `PHX${Date.now().toString().slice(-6)}`, ...req.body }));
app.listen(process.env.PORT || 5000, () => console.log('Phoenix API listening on port 5000'));
