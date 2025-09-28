import { Router } from 'express';
const router = Router();

// Mock data
const tasks = [
    { id: 1, title: 'Imparare Node.js', completed: false},
    { id: 2, title: 'Creare il backend', completed: true},
    { id: 3, title: 'Collegare il database', completed: false }
]

// Define routes for all tasks
// L'URL è: GET /api/tasks
router.get('/', (req, res) => {
    // return array of tasks with json format
    res.json(tasks);
});

// Export the router
export default router;