const {Router} = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');
const router = Router();
// router.get('/', (req, res) => {
//   res.json({message: 'Hey there!'});
// });

router.get('/', getToDo);//get all the todos from the database and send them as a response.
router.post('/save', saveToDo);//save a new todo to the database.
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);
module.exports = router;