class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class DepartmentIT extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const accounting = new DepartmentIT("Acc1", ["Susan"]);
accounting.addEmployee("Max");
accounting.addEmployee("Francisco");
// accounting.employees[2] = "Anne";
accounting.describe();
accounting.printEmployeeInformation();
