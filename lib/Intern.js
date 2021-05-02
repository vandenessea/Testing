class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    }
}

const Jezebel = new Intern("Jezebel", "1", "2hot4This@hotmail.com", "University-of-Alabama");
console.log(Jezebel)
Jezebel.employeeInfo()