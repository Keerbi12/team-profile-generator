// Constructor function for employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns the name.
    getName () {
        return this.name;
    }

    // Returns the Id.
    getId () {
        return this.id;
    }

    // Returns the email.
    getEmail () {
        return this.email;
    }

    // Returns the employees role.
    getRole () {
        return "Employee";
    }
};

module.exports = Employee;