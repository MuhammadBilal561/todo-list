#! /usr/bin/env node

import inquirer from "inquirer";

let todo :string[]=[];
let loop=true;

while (loop) {
    const answers:{
        Todo: string,
        addmore: boolean,
    } = await inquirer.prompt([
        {
           "type":"string",
           "name":"Todo",
           "message":"What do you want to add in your Todo? "
        },
        {
            "type":"confirm",
            "name":"addmore",
            "message":" Do you want to add more?",

        "default":false
        }

    ])
    const{Todo,addmore}=answers;
    console.log(answers)
    
    loop=addmore
    if(Todo){
        todo.push(Todo)

    }
    else{
        console.log("kindly add valid input")
    }
}
if(todo.length>0){
    console.log("your todo list")

    todo.forEach(todo =>{
        console.log(todo)
    })
}
else{
    console.log("NO Todos found")
}
