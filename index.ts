#! /usr/bin/env node

import inquirer from "inquirer" ;

let todos = [];
let condition = true;
while(condition){
    let addTodo= await inquirer.prompt([
     {
        message: "What do you want to store in Todo",
        type: "input",
        name: "todo"
     },
     {

        name: "addmore",
        type: "confirm",
        message: "Do you want to add more",
        default: false
     }
    ]);
    todos.push(addTodo.todo);
    condition = addTodo.addmore
    console.log(todos);
}