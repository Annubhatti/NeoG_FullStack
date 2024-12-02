// array of object with filter()

const tasks = [
    {id: 1, title: "Task 1", status: "completed"},
    {id: 2, title: "Task 2", status: "pending"},
    {id: 3, title: "Task 3", status: "completed"},
    {id: 4, title: "Task 4", status: "pending"},
    {id: 5, title: "Task 5", status: "not started"},
]

const filterPendingTasks = tasks.filter(task => task.status === "pending")
console.log(filterPendingTasks)

const filterNotCompletedTasks = tasks.filter(task => task.status !== "completed")
console.log(filterNotCompletedTasks)

const books = [
    {id: 1, title: "Book 1", year: 2005, noOfPages: 250},
    {id: 2, title: "Book 2", year: 2012, noOfPages: 400},
    {id: 3, title: "Book 3", year: 2015, noOfPages: 280},
    {id: 4, title: "Book 4", year: 2008, noOfPages: 350},
]

const filterBooks = books.filter(book => book.year > 2010 && book.noOfPages >300)
console.log(filterBooks)