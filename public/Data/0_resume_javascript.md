# Résumé Complet de JavaScript

## Concepts de Base

### Variables et Types de Données
- **Types de données de base :**
  - `number` : nombre (entier ou flottant)
  - `string` : chaîne de caractères
  - `boolean` : booléen (true/false)
  - `object` : objet
  - `array` : tableau
  - `null` : valeur nulle
  - `undefined` : variable non définie

```javascript
let x = 5;               // number
let y = 3.14;            // number
let name = "Alice";      // string
let flag = true;         // boolean
let numbers = [1, 2, 3]; // array
let person = { name: "Alice", age: 25 }; // object
let value = null;        // null
let data;                // undefined
```

### Structures de Contrôle

#### Conditionnelles
- **Instructions conditionnelles :** `if`, `else if`, `else`

```javascript
if (x > 0) {
    console.log("Positive");
} else if (x === 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}
```

#### Boucles
- **Boucle `for`** : pour itérer sur des séquences
- **Boucle `while`** : tant que la condition est vraie

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}
```

## Fonctions

### Définir des Fonctions
- **Création et appel de fonctions :**

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));  // Output: Hello, Alice!
```

## Fonctions Natives Utiles

- **Fonctions couramment utilisées :**
  - `length` : obtenir la longueur d'une chaîne ou d'un tableau
  - `parseInt()` / `parseFloat()` : conversion de chaîne en nombre
  - `isNaN()` : vérifier si une valeur est NaN
  - `console.log()` : afficher des données
  - `typeof` : obtenir le type d'une variable

```javascript
let str = "123";
console.log(parseInt(str) + 1);  // Output: 124

let arr = [1, 2, 3];
console.log(arr.length);  // Output: 3

console.log(typeof arr);  // Output: object
```

## Manipulation des Collections

### Tableaux
- **Création, accès et manipulation :**

```javascript
let numbers = [1, 2, 3, 4];
console.log(numbers[0]);  // Output: 1
console.log(numbers[numbers.length - 1]);  // Output: 4

numbers.push(5);    // Ajoute 5 à la fin
numbers.splice(1, 1);  // Supprime l'élément à l'index 1
console.log(numbers);  // Output: [1, 3, 4, 5]

numbers.sort();    // Trie le tableau
```

### Objets
- **Création, accès et manipulation :**

```javascript
let person = { name: "Alice", age: 25 };
console.log(person.name);  // Output: Alice

person.age = 26;
person.gender = "Female";
let age = person.age || 0;  // Retourne 0 si 'age' n'existe pas
let keys = Object.keys(person);  // Retourne les clés
let values = Object.values(person);  // Retourne les valeurs
```

## Gestion des Fichiers (Node.js)

### Lecture et Écriture de Fichiers

```javascript
const fs = require('fs');

// Écriture dans un fichier
fs.writeFileSync('file.txt', 'Hello, world!');

// Lecture d'un fichier
const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);  // Output: Hello, world!
```

## Programmation Orientée Objet (POO)

### Classes et Objets

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const alice = new Person("Alice", 25);
console.log(alice.greet());  // Output: Hello, my name is Alice and I am 25 years old.
```

### Héritage

```javascript
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
}

const bob = new Student("Bob", 20, "S12345");
console.log(bob.greet());  // Output: Hello, my name is Bob and I am 20 years old.
console.log(bob.studentId);  // Output: S12345
```

## Fonctions Fléchées et Compréhensions

### Fonctions Fléchées

```javascript
const add = (x, y) => x + y;
console.log(add(2, 3));  // Output: 5
```

### Méthodes Array
- **`map()`**, **`filter()`**, **`reduce()`**

```javascript
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(x => x ** 2);
console.log(squares);  // Output: [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum);  // Output: 15
```

## Modules et Importation

### Importer et Exporter des Modules

```javascript
// fichier module.js
export function greet(name) {
    return `Hello, ${name}!`;
}

// fichier principal.js
import { greet } from './module.js';
console.log(greet("Alice"));  // Output: Hello, Alice!
```

## Gestion des Exceptions

```javascript
try {
    let result = 10 / 0;
} catch (e) {
    console.log("Erreur : Division par zéro!");
} finally {
    console.log("Fin du bloc try");
}
```

## Bibliothèques et Frameworks Populaires

- **React** : bibliothèque pour les interfaces utilisateur
- **Vue.js** : framework pour les interfaces utilisateur
- **Angular** : framework pour le développement web
- **Lodash** : utilitaires pour le travail avec des objets et des tableaux
- **Axios** : client HTTP pour les requêtes

```javascript
import _ from 'lodash';
const array = [1, 2, 3];
console.log(_.reverse(array));  // Output: [3, 2, 1]

import axios from 'axios';
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data));
```
