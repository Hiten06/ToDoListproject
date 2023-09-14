const express = require("express");
const auth = require("../middleware/auth");

const route = express.Router();

const {getAllTodos,getTodosById,addTodo,modifyTodo, deleteTodo} = require("../controller/todosController");



/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the todo task
 *         title:
 *           type: string
 *           description: The title of your todo task
 *         description:
 *           type: string
 *           description: The description of the task
 *         status:
 *           type: boolean
 *           description: Whether you have completed the task or not
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the task was added
 *       example:
 *         id: d5fE_asz
 *         title: Entertainment
 *         description: have to watch an movie with friends at 8 pm
 *         status: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */








/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: The todo list managing API
 * /api/todos/alltodos:
 *   get:
 *     security:
 *       - Authorization: []
 *     summary: Lists all the todos task
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: The list of the todo task
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *   
 * /api/todos/getTodo/{id}:
 *   get:
 *     security:
 *       - Authorization: []
 *     summary: Get the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo task id
 *     responses:
 *       200:
 *         description: The todo task response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The Todo task was not found
 * /api/todos/addTodo:
 *   post:
 *     security:
 *       - Authorization: []
 *     summary: Create a new todo task
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The created todo task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 *
 * /api/todos/modifyTodo/{id}:
 *   put:
 *    security:
 *       - Authorization: []
 *    summary: Update the todo task by the id
 *    tags: [Todos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The todo id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Todo'
 *    responses:
 *      200:
 *        description: The todo task status was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Todo'
 *      404:
 *        description: The Todo was not found
 *      500:
 *        description: Some error happened
 * /api/todos/deleteTodo/{id}:   
 *   delete:
 *     security:
 *       - Authorization: []
 *     summary: Remove the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo task id
 *
 *     responses:
 *       200:
 *         description: The Todo task was deleted
 *       404:
 *         description: The todo task was not found
 */



route.get("/alltodos", auth, getAllTodos);

route.get("/getTodo/:id",auth ,getTodosById);

route.post("/addTodo",auth ,addTodo);

route.put("/modifyTodo/:id",auth ,modifyTodo);

route.delete("/deleteTodo/:id",auth ,deleteTodo);


module.exports = route;