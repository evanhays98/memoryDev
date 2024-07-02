# Résumé Complet de TypeScript

## Concepts de Base

### Variables et Types de Données

- **Types de données de base :**
    - `number` : nombre
    - `string` : chaîne de caractères
    - `boolean` : booléen (true/false)
    - `any` : type variable
    - `void` : absence de type
    - `null` : nul
    - `undefined` : non défini
    - `array` : tableau
    - `tuple` : tuple
    - `enum` : énumération
    - `object` : objet

```typescript
let x: number = 5;
let y: number = 3.14;
let name: string = "Alice";
let flag: boolean = true;
let numbers: number[] = [1, 2, 3];
let point: [number, number] = [1, 2];
let data: { a: number, b: number } = { a: 1, b: 2 };
let anything: any = "Hello";
```

### Enumérations

```typescript
enum Color { Red, Green, Blue }

let c: Color = Color.Green;
```

## Structures de Contrôle

### Conditionnelles

- Instructions conditionnelles : if, else if, else

```typescript
if (x > 0) {
  console.log("Positive");
} else if (x === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}
```

### Boucles

- Boucle for : pour itérer sur des séquences
- Boucle while : tant que la condition est vraie
- Boucle for..of : pour itérer sur des éléments d'un tableau
- Boucle for..in : pour itérer sur les clés d'un objet

```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (x > 0) {
  console.log(x);
  x -= 1;
}

let array = [1, 2, 3];
for (let item of array) {
  console.log(item);
}

let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key);
}
```

## Fonctions

### Définir des Fonctions

- Création et appel de fonctions :

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));  // Output: Hello, Alice!
```

### Fonctions Fléchées

```typescript
let add = (x: number, y: number): number => x + y;
console.log(add(2, 3));  // Output: 5
```

## Types Avancés

### Interfaces

```typescript
interface Person {
  name: string;
  age: number;
}

let alice: Person = { name: "Alice", age: 25 };
```

### Classes et Objets

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let alice = new Person("Alice", 25);
console.log(alice.greet());  // Output: Hello, my name is Alice and I am 25 years old.
```

### Héritage

```typescript
class Student extends Person {
  studentId: string;

  constructor(name: string, age: number, studentId: string) {
    super(name, age);
    this.studentId = studentId;
  }

  getId(): string {
    return this.studentId;
  }
}

let bob = new Student("Bob", 20, "S12345");
console.log(bob.greet());  // Output: Hello, my name is Bob and I am 20 years old.
console.log(bob.getId());  // Output: S12345
```

## Modules et Espaces de Noms

### Importer et Exporter des Modules

```typescript
// fichier mymodule.ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// fichier principal
import { greet } from './mymodule';

console.log(greet("Alice"));  // Output: Hello, Alice!
```

## Manipulation des Collections

### Tableaux

- Création, accès et manipulation :

```typescript
let numbers: number[] = [1, 2, 3, 4];
console.log(numbers[0]);  // Output: 1
console.log(numbers[numbers.length - 1]);  // Output: 4

numbers.push(5);  // Ajoute 5 à la fin
numbers.splice(numbers.indexOf(2), 1);  // Supprime la première occurrence de 2
numbers.pop();  // Supprime et retourne le dernier élément
numbers.sort((a, b) => a - b);  // Trie la liste
```

### Dictionnaires

- Création, accès et manipulation :

```typescript
interface Student {
  name: string;
  age: number;
  gender?: string;
}

let student: Student = { name: 'Alice', age: 25 };
console.log(student.name);  // Output: Alice

student.age = 26;
student.gender = 'Female';
console.log(student.gender);  // Output: Female
```

### Ensembles

- Création et opérations :

```typescript
let a: Set<number> = new Set([1, 2, 3]);
let b: Set<number> = new Set([3, 4, 5]);

let union = new Set([...a, ...b]);
console.log(union);  // Output: Set { 1, 2, 3, 4, 5 }

let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);  // Output: Set { 3 }

let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);  // Output: Set { 1, 2 }
```

### Slicing

- Accès à des sous-ensembles de séquences :

```typescript
let myList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slicing de base
console.log(myList.slice(2, 5));  // Output: [2, 3, 4]

// Slicing avec des pas (pas directement pris en charge, mais on peut utiliser filter)
console.log(myList.filter((_, index) => index % 2 === 0));  // Output: [0, 2, 4, 6, 8]

// Slicing avec pas négatif (utiliser reverse)
console.log([...myList].reverse());  // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// Slicing avec début et fin spécifiés
console.log(myList.slice(1, 8).filter((_, index) => index % 2 === 0));  // Output: [1, 3, 5, 7]
```

### Utilisation de `reduce`

- Réduire un tableau à une seule valeur

```typescript
let sum = [1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0);
console.log(sum);  // Output: 15

let max = [1, 3, 2, 8, 5].reduce((acc, val) => (val > acc ? val : acc), 0);
console.log(max);  // Output: 8
```

### Utilisation de `groupBy`

- Grouper les éléments d'un tableau selon une clé

```typescript
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 20 }
];

const result = Object.groupBy(people, ({ age }) => age);

// Output: { '20': [ { name: 'Bob', age: 20 }, { name: 'David', age: 20 } ],
//           '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ] }
```

## Gestion des Fichiers

### Lecture et Écriture de Fichiers (avec Node.js)

```typescript
import * as fs from 'fs';

// Écriture
fs.writeFileSync('file.txt', 'Hello, world!', 'utf8');

// Lecture


const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);  // Output: Hello, world!
```

## Gestion des Exceptions

```typescript
try {
  throw new Error("An error occurred");
} catch (error) {
  console.error(error.message);  // Output: An error occurred
} finally {
  console.log("Fin du bloc try");
}
```