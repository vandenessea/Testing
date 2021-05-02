class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

const Mathious = new Engineer("Mathious", "987", "fluidDynamics69@gmail.com", "https://github.com/superstudious/Homework-tests");
console.log(Mathious)
Mathious.employeeInfo()
//make class here, and intern class. Engineer has github, intern has a school. Neither have office numbers.