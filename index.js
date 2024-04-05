import inquirer from "inquirer";
let questions = await inquirer.prompt([
    {
        type: 'input',
        name: "userID",
        message: "Please Enter Your UserID",
    },
    {
        type: 'number',
        name: "userPin",
        message: "Please Enter Your UserPin",
    },
    {
        type: 'list',
        name: "accountType",
        message: "Please Enter Your accountType",
        choices: ["Current", "Saving", "Default"]
    },
    {
        type: 'list',
        name: "transactoinType",
        message: "Please Enter Your transactoinType",
        choices: ["FastCash", "AtmWithdrawl"],
    },
    {
        type: 'number',
        name: "amount",
        message: "Please Enter Your amount",
        when(answer) {
            return answer.transactoinType == "FastCash";
        }
    },
    {
        type: 'list',
        name: "amount",
        message: "Please Enter Your Desire amount",
        choices: [1000, 5000, 20000, 50000],
        when(answer) {
            return answer.transactoinType == "AtmWithdrawl";
        }
    },
]);
if (questions.userID && questions.userPin) {
    const balance = Math.floor(Math.random() * 1000000) + 1; // Generate a random number
    console.log(balance);
    const enteredAmount = questions.amount;
    let remainingBalance = balance - enteredAmount;
    if (enteredAmount > balance) {
        console.log("insufficent Fund");
    }
}
