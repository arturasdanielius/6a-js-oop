class Cat {
    constructor (name, breed) {
        this.name = name;
        this.breed = breed;
        this.mouse = 0;
    }

    voice() {
        return `${this.name}: Miau miau!`;
    }

    intro() {
        return `Hi, my name is ${this.name} and my breed is ${this.breed} 🐕`;
    }

  /*  changeName(newName) {
        const oldName = this.name;
        this.name = newName;
        return `${oldName} -> ${newName}`;
    }
*/
    getMouse() {
        this.mouse += 1;
        return `${this.name}: ${this.mouse} mouse/-s.`
    }
}

module.exports = Cat;

