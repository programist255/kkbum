const dog = [
    {
        id: 'dog-1',
        name: "Poodle",
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate','Intelligent','Active','Alert'],
    },
    {
        id: 'dog-3',
        name: "Labrador Retriever",
        temperament: [
            'Intelligent',
            'Even Tempered',
            'Kind',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
        ],
    },
]

console.log(dog.find(dogs => dogs.name === 'Bernese mountain Dog'));
console.log(dog.find(dogs => dogs.temperament.includes('Aggressive')));
console.log(dog.find(dogs => dogs.temperament.includes('Trusting')));
console.log(dog.every(dogs => dogs.temperament.includes('Trusting')));
console.log(dog.every(dogs => dogs.temperament.includes('Intelligent')));
console.log(dog.find(dogs => dogs.name === 'Bernese mountain Dog5'));
console.log(dog.find(dogs => dogs.temperament.includes('Aggressive')));
console.log(dog.find(dogs => dogs.temperament.includes('Trusting')));
console.logdog.map(dogs => dogs.name);
console.log(dog.filter(dogs => dogs.temperament.includes('Faithful')));
console.log(dog.reduce((allTemperaments, dogs) => { return [...allTemperaments, ...dogs.temperament]}, []));