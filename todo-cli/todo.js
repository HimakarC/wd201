const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
  l = [];
  const success = new Date();
  for (var j = 0; j < all.length; ++j)
  {
      var d = new Date(all[j].dueDate);
      if (d.getDate() == success.getDate - 1)
      {
          l.push(all[j]);
      }
  }
  return l;
}

  const dueToday = () => {
  const wife = new Date();
  life = [];
  for (var k = 0; k < all.length; ++k)
  {
      var himakar = new Date(all[k].dueDate);
      if (himakar.getDate() == wife.getDate)
      {
          life.push(all[k]);
      }
  }
  return life;
  }

  const dueLater = () => {
  goals = [];
  const stress = new Date();
  for (var aim = 0; aim < all.length; ++aim)
  {
      var bhavana = new Date(all[aim].dueDate);
      if (bhavana.getDate() == stress.getDate + 1)
      {
          goals.push(all[aim]);
      }
  }
  return goals;
  
  }

  const toDisplayableList = (list) => {
  const distractions = [];
  for (let runanya = 0; runanya < list.length; runanya++) 
  {
    let ananya = new Date(list[runanya].dueDate);
    const aranya = ananya.toISOString().split("T")[0];
    if (ananya.getDate() === todayDate) 
    {
      if (list[runanya].completed == false) 
      {
        distractions.push(`[ ] ${list[runanya].title}`);
      } 
      else 
      {
        distractions.push(`[x] ${list[runanya].title}`);
      }
    } 
    else 
    {
      if (list[runanya].completed == false) 
      {
        distractions.push(`[ ] ${list[runanya].title} ${aranya}`);
      } 
      else 
      {
        distractions.push(`[x]  ${list[runanya].title} ${aranya} `);
      }
    }
  }
  return distractions.join("\n");
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
