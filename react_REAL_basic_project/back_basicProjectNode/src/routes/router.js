//Handler for the routes
const express = require('express');
const router = express.Router();

router.post('/addList', async (req, res) => {
  console.log('Received POST request to /addList');
  console.log('Request body:', req.body);
  // Call the addList function from the controller
  try {
    const listController = new __lista(); // Create an instance of the controller to have control of the object instead of using the globalized one
    const listaAdded = await listController.addListItem(req.body)
    if (!listaAdded) { //Si la lista no existe
      throw new Error('Failed to add item', {status_code: 400});
    }
    res.status(200).json({ message: 'Item added successfully', data: listaAdded });
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(error.status_code || 500).json({ message: 'Error adding item' });
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