//Handler for the routes
const express = require('express');
const router = express.Router();

router.post('/addList', async (req, res) => {
  try{
  console.log('Received POST request to /addList');
  console.log('Request body:', req.body);
  // Call the addList function from the controller
  const listController = new __lista(); // Create an instance of the controller to have control of the object instead of using the globalized one
  await listController.addListItem(req.body)
    .then(() => {
      res.status(200).json({ message: 'Item added successfully' });
    })
    .catch((error) => {
      console.error('Error adding item:', error);
      res.status(500).json({ message: 'Error adding item' });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Unexpected error occurred' });
  }
});

router.get('/getList', async (req, res) => {
  console.log('Received GET request to /getList');
  // Call the getList function from the controller
  const listController = new __lista();
  await listController.getList()
    .then((data) => { 
      res.status(200).json({ message: 'List retrieved successfully', data });
    })
    .catch((error) => {
      console.error('Error retrieving list:', error);
      res.status(500).json({ message: 'Error retrieving list' });
    });
});


module.exports = router;