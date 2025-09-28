import 'dotenv/config';

import tasksRoutes from './src/task.routes.js';

// import Express
import express from 'express';
//create an instance of express
const app = express();

//Port Number
const PORT = process.env.PORT || 3000;

// Create a GET route
app.get('/', (req, res) => {
    res.send('Server task manager is running');
})

//Use routes
app.use('/api/tasks', tasksRoutes);

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})