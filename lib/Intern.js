const Employee = require('./Employee');

// Intern constructor 
class Intern extends Employee {
    constructor (name, id, email, institute) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.institute = institute;
    }

    getInstitute () {
        return this.institute;
    }

    getRole () {
        return "Intern"
    }
}

module.exports = Intern;