const express = require('express');
const router = express.Router();
/**
* @openapi
* /api/hello:
*   get:
*     description: Welcome to swagger-jsdoc!
*     parameters:
*       - name: name
*         in: query
*         required: false
*         schema:
*           type: string
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/hello', function (req, res, next) {
  const name = req.query.name || 'World';
  res.json({ message: `Hello ${name}` });
});
/**
* @openapi
* /api/hello:
*   post:
*     tags:
*     - "pet"
*     summary: "Add a new pet to the store"
*     description: ""
*     operationId: "addPet"
*     consumes:
*     - "application/json"
*     produces:
*     - "application/json"
*     parameters:
*     - in: "body"
*       name: "body"
*       description: "Pet object that needs to be added to the store"
*       required: true
*       schema:
*         type: object
*         properties:
*           name:
*             type: string
*       requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*     responses:
*       405:
*         description: "Invalid input"
*/
router.post('/hello', function (req, res, next) {
  console.log(req.body)
  const name = req.body.name || 'World';
  res.json({ message: `Hello ${name}` });
});
module.exports = router;
