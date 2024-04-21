#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//word counter app
console.log(chalk.redBright.underline.bold.italic("\t\t ****************************************WELCOME TO MEHTAB KANWAL WORD COUNTER APP***************************************************"))

const answers: {
    sentence:string;
} = await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:chalk.magentaBright.bold.underline("\t\tEnter Your Sentence to Count the Words: ")
        }
    ]
)
const response = answers.sentence.trim().split(" ");
console.log(response);
console.log(chalk.blueBright.bold.italic(`\t\t Your Word Count is ${response.length}`));





//character counter app
// console.log(chalk.redBright.underline.bold.italic("\t\t ****************************************WELCOME TO MY CHARACTER COUNTER APP***************************************************"))
// function wordCounter (text:string) {
//     let freeWhileSpace = text.replace(/\s/g,"");
//     return freeWhileSpace.length;
// }
// async function startCounter (wordCounter:(text:string)=> number) {
//     do{
//         let result = await inquirer.prompt(
//                 {
//                     type:"input",
//                     message:chalk.greenBright.bold("write your text..."),
//                     name:"text"
//                 }
            
//         )
//         console.log(chalk.overline.bold.underline.blueBright("Your words count is: "))
//         console.log(chalk.yellowBright(wordCounter(result.text)));
//     }
//     while(true)
    
// }
//  startCounter(wordCounter);