var city1 = {
    name: 'Tegusigalpa',
    population: 10**6,

    getName() {
        console.log('Name -', this.name);
    },

    exportStr() {
        console.log(`Name - ${this.name}`, '\n', `Population - ${this.population}`, '\n');
    }
};

var city2 = {
    name: 'Antananarivu',
    population: 10**6,

    getName() {
        console.log('Name -', this.name);
    },

    exportStr() {
        console.log(`Name - ${this.name}`, '\n', `Population - ${this.population}`);
    }
}

city1.getName()
city1.exportStr()

city2.getName()
city2.exportStr()
