'use strict';
const {
  Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static async addTask(params) {
        return await Todo.create(params);
      }
      static async showList() {
        console.log("My Todo list \n");
  
        console.log("Overdue");
        console.log(
          (await Todo.overdue())
            .map((todo) => {
              return todo.displayableString();
            })
            .join("\n"),
        );
        console.log("\n");
  
        console.log("Due Today");
        console.log(
          (await Todo.dueToday())
            .map((todo) => todo.displayableString())
            .join("\n"),
        );
        console.log("\n");
  
        console.log("Due Later");
        console.log(
          (await Todo.dueLater())
            .map((todo) => todo.displayableString())
            .join("\n"),
        );
      }
  
      static async overdue() {
        return await Todo.findAll({
        where: {
          dueDate: { [Op.lt]: new Date().toISOString().slice(0, 10) },
        },
      });
      }
  
      static async dueLater() {
        return await Todo.findAll({
          where: { dueDate: { [Op.gt]: new Date().toISOString().slice(0, 10) } },
        });
      }
  
      static async dueToday() {
        return await Todo.findAll({
          where: { dueDate: { [Op.eq]: new Date().toISOString().slice(0, 10) } },
        });
      }
  
      static async markAsComplete(id) {
      await Todo.update({ completed: true }, { where: { id } });
  
      }
  
      displayableString() {
        let checkbox = this.completed ? "[x]" : "[ ]";
        let isToday = this.dueDate === new Date().toISOString().slice(0, 10);
        return `${this.id}. ${checkbox} ${this.title}${
          isToday ? "" : " " + this.dueDate
        }`;
    }
}  
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
