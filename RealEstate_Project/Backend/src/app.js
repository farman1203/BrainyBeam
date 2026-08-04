const express = require('express')
const authRoutes = require('./routes/auth.routes')
const adminRoutes = require('./routes/admin.routes');
const profile = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const cors = require("cors");
const propertyRoutes = require('./routes/property.rotes');

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:5173", credentials: true, }));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/property', propertyRoutes)
app.use('/api/user', profile)
module.exports = app;