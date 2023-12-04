/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "new todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("return a list of overdue todos", () => {
    expect(todoList().overdue()).toEqual([]);
  });
  test("return a list of todos due today", () => {
    expect(todoList().dueToday()).toEqual([]);
  });
  test("return a list of todos due later", () => {
    expect(todoList().dueLater()).toEqual([]);
  });
  test("return a list of overdue2 todos", () => {
    expect(todoList().overdue()).toEqual([]);
  });
  test("return a list of todos due today2", () => {
    expect(todoList().dueToday()).toEqual([]);
  });
  test("return a list of todos due later2", () => {
    expect(todoList().dueLater()).toEqual([]);
  });
});
