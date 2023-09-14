const express = require("express");
const {registerUser,LoginUser} = require("../controller/userController");
const routes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         name:
 *           type: string
 *           description: The name of user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: password of the user
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *       example:
 *         id: d5Eg_asz
 *         name: Hiten
 *         email: hiten@example.com
 *         password: Password
 *         createdAt: 2023-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user list managing API
 * 
 * /api/user/register:
 *   post:
 *     
 *     summary: Create a new user by signup
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created User sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 * 
 * 
 * /api/user/login:
 *   post:
 *     
 *     summary:  login the user and generate token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User Logged In and created Token sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * 
 * 
 * 
 * 
 * 
 * 
 */


routes.post("/register",registerUser);
routes.post("/login",LoginUser);
module.exports = routes;