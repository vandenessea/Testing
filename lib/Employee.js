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
























