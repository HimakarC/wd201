const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();
describe("Supriya the reason", () =>
{
  beforeAll(() => {
    let himakar = new Date();
    add(
    {
      titile: "Himakar",
      completed: false,
      dueDate: new Date(new Date().setDate(himakar.getDate() + 1))
        .toISOString()
        .slice(0, 10),
    });
    add(
    {
      titile: "Bhavana",
      completed: false,
      dueDate: new Date(new Date().setDate(himakar.getDate() + 1))
        .toISOString()
        .slice(0, 10),
    });
    add(
    {
      titile: "Ananya",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    add(
    {
      titile: "Shivani",
      completed: false,
      dueDate: new Date(new Date().setDate(himakar.getDate() - 1))
        .toISOString()
        .slice(0, 10),
    });
    add(
    {
      titile: "Varshini",
      completed: false,
      dueDate: new Date(new Date().setDate(himakar.getDate() - 1))
        .toISOString()
        .slice(0, 10),
    });
  });
  test("creating a new todo", () => 
  {
    let life = all.length;
    add(
    {
      titile: "Rishitha",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    life += 1;
    expect(all.length).toBe(life);
  });

  test("marking a todo as completed.", () => 
  {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieval of overdue items", () => 
  {
    let ananya = overdue();
    expect(ananya.length).toBe(2);
  });

  test("retrieval of due today items", () => 
  {
    let runanya = dueToday();
    expect(runanya.length).toBe(2);
  });

  test("retrieval of due later items", () => 
  {
    let aranya = dueLater();
    expect(aranya.length).toBe(2);
  });
});
