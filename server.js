const express = require('express');
const {sequelize} = require('./models');
const eventRoutes = require('./routes/eventRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');
const attendanceRoutes =require('./routes/attendanceRoutes');
const errorHandler =require('./middleware/errorMiddleware');
const swaggerUI =require('swagger-ui-express');
const YAML =require('yamljs');
const app = express();
app.use(express.json());
app.use('/events',eventRoutes);
app.use('/bookings',bookingRoutes);
app.use('/users',userRoutes);
app.use('/attendance',attendanceRoutes);
const swaggerDocument =YAML.load('./swagger/swagger.yaml');
app.use('/api-docs',
swaggerUI.serve,
swaggerUI.setup(swaggerDocument)
);
app.use(errorHandler);
sequelize.sync()
.then(()=>{
app.listen(5000,()=>{
console.log("Server running");
});
});