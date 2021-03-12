class Department {
    // private readonly id: string;
    // public name : string;
    private employees: string[] = [];

    constructor(private readonly id:string, public name: string) {
        //this.id = id;
        //this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name} `);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, public admin: string[]) {
        super(id, 'IT');
        this.admins = admin;
    }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Ula');

//accounting.employees[2] = 'anna';

it.describe();
it.name = 'new name';
it.printEmployeeInformation();

//const accountingCopy = { name: 's', describe: it.describe};

//accountingCopy.describe();
console.log(it);
