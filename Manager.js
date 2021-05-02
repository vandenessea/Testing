class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

const Blart = new Manager("Blart", "099", "cantTouchthis@gmail.com", 9999);
console.log(Blart)
Blart.employeeInfo()