// borrowRoutes.js - Borrow routes
const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, borrowController.submitBorrowRequest);
router.put('/:id/approve', authMiddleware.verifyToken, borrowController.approveBorrowRequest);
router.put('/:id/deny', authMiddleware.verifyToken, borrowController.denyBorrowRequest);
router.get('/history/:id', authMiddleware.verifyToken, borrowController.getUserBorrowHistory);

module.exports = router;
