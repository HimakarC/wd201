/* eslint-disable no-undef */
const todoList = require("../todo");

const { add, markAsComplete, all, dueToday, dueLater, overdue } = todoList();

describe("Supriya the reason", () => {
  test("creating a new todo", () => 
  {
    expect(all.length).toBe(0);
    const himakar = new Date();
    const bhavana = new Date(himakar);
    const ananya = new Date(himakar);
    ananya.setDate(himakar.getDate() + 1);
    bhavana.setDate(himakar.getDate() - 1);

    add({
      title: "Himakar",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    add({
      title: "Bhavana",
      completed: false,
      dueDate: bhavana.toLocaleDateString("en-CA"),
    });

    add({
      title: "Ananya",
      completed: false,
      dueDate: ananya.toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(3);
  });

  test("marking a todo as complete.", () => 
  {
    expect(all[0].completed).toBe(false);

    markAsComplete(0);

    expect(all[0].completed).toBe(true);
  });

  test("retrieval of due today items.", () => 
  {
    expect(all.length).toBe(3);
    const supriya = dueToday();
    expect(supriya.length).toBe(1);
  });

  test("retrieval of overdue items.", () => 
  {
    let varshini = [];
    expect(varshini.length).toBe(0);
    varshini = overdue();
    expect(varshini.length).toBe(1);
  });

  test("retrieval of due later items.", () => 
  {
    let shivani = [];
    expect(shivani.length).toBe(0);
    shivani = dueLater();
    expect(shivani.length).toBe(1);
  });
});
