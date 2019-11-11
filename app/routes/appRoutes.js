'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/appController');

  // todoList Routes

  // get all docs regarding swagger api: https://editor.swagger.io/

  /**
   * @swagger
   * /tasks:
   *  get:
   *   description: Use to request all tasks
   *   responses:
   *      '200':
   *         description: A successful response
   */
  app.route('/tasks').get(todoList.list_all_tasks);

  /**
 * @swagger
 * /tasks:
 *  post:
 *   description: Used to add new tasks
 *   parameters: [{
 *          name: body,
 *          in: body,
 *          required: true,
 *          description: Enter task name and task status to create new task
 *        }]
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks').post(todoList.create_a_task);

  /**
 * @swagger
 * /tasks/{taskId}:
 *  get:
 *   description: Used to get detail of a particular task
 *   parameters: [{
 *        name: taskId,
 *        in: path,
 *        required: true,
 *        type: integer,
 *        description: Enter taskId to get detail
 *    }]
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks/:taskId').get(todoList.read_a_task);

  /**
 * @swagger
 * /tasks/{taskId}:
 *  put:
 *   description: Used to update detail of a particular task
 *   parameters: [{
 *            name: taskId,
 *            in: path,
 *            required: true,
 *            type: integer,
 *            description: Enter taskId to update the task
 *        },
 *        {
 *            name: body,
 *            in: body,
 *            required: true,
 *            description: Enter detail of task and status, if want to update
 *         }]
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks/:taskId').put(todoList.update_a_task);

  /**
 * @swagger
 * /tasks/{taskId}:
 *  delete:
 *   description: Used to delete a particular task
 *   parameters: [{
 *                name: taskId,
 *                in: path,
 *                required: true,
 *                type: integer,
 *                description: Enter the taskId to delete the task
 *          }]
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks/:taskId').delete(todoList.delete_a_task);

  
};