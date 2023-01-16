const express = require('express');
const studetnController = require('./../Controler/student');

const router = express.Router();

router
  .route('/Student')
  .get(studetnController.getAllStudent)
  .post(studetnController.postStudent);

router
  .route('/Student/:id')
  .get(studetnController.getStudent)
  .patch(studetnController.patchStudent);

module.exports = router;