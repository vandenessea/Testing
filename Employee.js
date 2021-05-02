class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    employeeInfo()  {
        console.log(this.name, this.id, this.email)
    }



}

const Alex = new Employee("Alex", "1985", "workout4life@gmail.com");
//console.log(Alex)
const Frank = new Employee("Frank", "1925", "backInmyday@gmail.com");
//console.log(Frank)

//console.log(Frank.name)
Alex.employeeInfo()


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

const Blart = new Manager("Blart", "099", "cantTouchthis@gmail.com", 9999);
console.log(Blart)
Blart.employeeInfo()


class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    }
}

const Jezebel = new Intern("Jezebel", "1", "2hot4This@hotmail.com", "University-of-Alabama");
console.log(Jezebel)
Jezebel.employeeInfo()


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















