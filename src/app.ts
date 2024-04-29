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

const accounting = new Department("Acc1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Francisco");
// accounting.employees[2] = "Anne";
accounting.describe();
accounting.printEmployeeInformation();
