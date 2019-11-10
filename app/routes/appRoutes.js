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
 *   description: Use to request all tasks
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks').post(todoList.create_a_task);

  /**
 * @swagger
 * /tasks/:taskId:
 *  get:
 *   description: Use to request all tasks
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks/:taskId').get(todoList.read_a_task);

  /**
 * @swagger
 * /tasks/:taskId:
 *  put:
 *   description: Use to request all tasks
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks/:taskId').put(todoList.update_a_task);

  /**
 * @swagger
 * /tasks/:taskId:
 *  delete:
 *   description: Use to request all tasks
 *   responses:
 *      '200':
 *         description: A successful response
 */
  app.route('/tasks/:taskId').delete(todoList.delete_a_task);

  
};