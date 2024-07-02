export const devData = {
  javascript:
    '# Résumé Complet de JavaScript\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Variables et Types de Données\n' +
    '- **Types de données de base :**\n' +
    '  - `number` : nombre (entier ou flottant)\n' +
    '  - `string` : chaîne de caractères\n' +
    '  - `boolean` : booléen (true/false)\n' +
    '  - `object` : objet\n' +
    '  - `array` : tableau\n' +
    '  - `null` : valeur nulle\n' +
    '  - `undefined` : variable non définie\n' +
    '\n' +
    '```javascript\n' +
    'let x = 5;               // number\n' +
    'let y = 3.14;            // number\n' +
    'let name = "Alice";      // string\n' +
    'let flag = true;         // boolean\n' +
    'let numbers = [1, 2, 3]; // array\n' +
    'let person = { name: "Alice", age: 25 }; // object\n' +
    'let value = null;        // null\n' +
    'let data;                // undefined\n' +
    '```\n' +
    '\n' +
    '### Structures de Contrôle\n' +
    '\n' +
    '#### Conditionnelles\n' +
    '- **Instructions conditionnelles :** `if`, `else if`, `else`\n' +
    '\n' +
    '```javascript\n' +
    'if (x > 0) {\n' +
    '    console.log("Positive");\n' +
    '} else if (x === 0) {\n' +
    '    console.log("Zero");\n' +
    '} else {\n' +
    '    console.log("Negative");\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '#### Boucles\n' +
    '- **Boucle `for`** : pour itérer sur des séquences\n' +
    '- **Boucle `while`** : tant que la condition est vraie\n' +
    '\n' +
    '```javascript\n' +
    'for (let i = 0; i < 5; i++) {\n' +
    '    console.log(i);\n' +
    '}\n' +
    '\n' +
    'let i = 5;\n' +
    'while (i > 0) {\n' +
    '    console.log(i);\n' +
    '    i--;\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Fonctions\n' +
    '\n' +
    '### Définir des Fonctions\n' +
    '- **Création et appel de fonctions :**\n' +
    '\n' +
    '```javascript\n' +
    'function greet(name) {\n' +
    '    return `Hello, ${name}!`;\n' +
    '}\n' +
    '\n' +
    'console.log(greet("Alice"));  // Output: Hello, Alice!\n' +
    '```\n' +
    '\n' +
    '## Fonctions Natives Utiles\n' +
    '\n' +
    '- **Fonctions couramment utilisées :**\n' +
    '  - `length` : obtenir la longueur d\'une chaîne ou d\'un tableau\n' +
    '  - `parseInt()` / `parseFloat()` : conversion de chaîne en nombre\n' +
    '  - `isNaN()` : vérifier si une valeur est NaN\n' +
    '  - `console.log()` : afficher des données\n' +
    '  - `typeof` : obtenir le type d\'une variable\n' +
    '\n' +
    '```javascript\n' +
    'let str = "123";\n' +
    'console.log(parseInt(str) + 1);  // Output: 124\n' +
    '\n' +
    'let arr = [1, 2, 3];\n' +
    'console.log(arr.length);  // Output: 3\n' +
    '\n' +
    'console.log(typeof arr);  // Output: object\n' +
    '```\n' +
    '\n' +
    '## Manipulation des Collections\n' +
    '\n' +
    '### Tableaux\n' +
    '- **Création, accès et manipulation :**\n' +
    '\n' +
    '```javascript\n' +
    'let numbers = [1, 2, 3, 4];\n' +
    'console.log(numbers[0]);  // Output: 1\n' +
    'console.log(numbers[numbers.length - 1]);  // Output: 4\n' +
    '\n' +
    'numbers.push(5);    // Ajoute 5 à la fin\n' +
    'numbers.splice(1, 1);  // Supprime l\'élément à l\'index 1\n' +
    'console.log(numbers);  // Output: [1, 3, 4, 5]\n' +
    '\n' +
    'numbers.sort();    // Trie le tableau\n' +
    '```\n' +
    '\n' +
    '### Objets\n' +
    '- **Création, accès et manipulation :**\n' +
    '\n' +
    '```javascript\n' +
    'let person = { name: "Alice", age: 25 };\n' +
    'console.log(person.name);  // Output: Alice\n' +
    '\n' +
    'person.age = 26;\n' +
    'person.gender = "Female";\n' +
    'let age = person.age || 0;  // Retourne 0 si \'age\' n\'existe pas\n' +
    'let keys = Object.keys(person);  // Retourne les clés\n' +
    'let values = Object.values(person);  // Retourne les valeurs\n' +
    '```\n' +
    '\n' +
    '## Gestion des Fichiers (Node.js)\n' +
    '\n' +
    '### Lecture et Écriture de Fichiers\n' +
    '\n' +
    '```javascript\n' +
    'const fs = require(\'fs\');\n' +
    '\n' +
    '// Écriture dans un fichier\n' +
    'fs.writeFileSync(\'file.txt\', \'Hello, world!\');\n' +
    '\n' +
    '// Lecture d\'un fichier\n' +
    'const content = fs.readFileSync(\'file.txt\', \'utf8\');\n' +
    'console.log(content);  // Output: Hello, world!\n' +
    '```\n' +
    '\n' +
    '## Programmation Orientée Objet (POO)\n' +
    '\n' +
    '### Classes et Objets\n' +
    '\n' +
    '```javascript\n' +
    'class Person {\n' +
    '    constructor(name, age) {\n' +
    '        this.name = name;\n' +
    '        this.age = age;\n' +
    '    }\n' +
    '\n' +
    '    greet() {\n' +
    '        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'const alice = new Person("Alice", 25);\n' +
    'console.log(alice.greet());  // Output: Hello, my name is Alice and I am 25 years old.\n' +
    '```\n' +
    '\n' +
    '### Héritage\n' +
    '\n' +
    '```javascript\n' +
    'class Student extends Person {\n' +
    '    constructor(name, age, studentId) {\n' +
    '        super(name, age);\n' +
    '        this.studentId = studentId;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'const bob = new Student("Bob", 20, "S12345");\n' +
    'console.log(bob.greet());  // Output: Hello, my name is Bob and I am 20 years old.\n' +
    'console.log(bob.studentId);  // Output: S12345\n' +
    '```\n' +
    '\n' +
    '## Fonctions Fléchées et Compréhensions\n' +
    '\n' +
    '### Fonctions Fléchées\n' +
    '\n' +
    '```javascript\n' +
    'const add = (x, y) => x + y;\n' +
    'console.log(add(2, 3));  // Output: 5\n' +
    '```\n' +
    '\n' +
    '### Méthodes Array\n' +
    '- **`map()`**, **`filter()`**, **`reduce()`**\n' +
    '\n' +
    '```javascript\n' +
    'const numbers = [1, 2, 3, 4, 5];\n' +
    '\n' +
    'const squares = numbers.map(x => x ** 2);\n' +
    'console.log(squares);  // Output: [1, 4, 9, 16, 25]\n' +
    '\n' +
    'const evenNumbers = numbers.filter(x => x % 2 === 0);\n' +
    'console.log(evenNumbers);  // Output: [2, 4]\n' +
    '\n' +
    'const sum = numbers.reduce((acc, x) => acc + x, 0);\n' +
    'console.log(sum);  // Output: 15\n' +
    '```\n' +
    '\n' +
    '## Modules et Importation\n' +
    '\n' +
    '### Importer et Exporter des Modules\n' +
    '\n' +
    '```javascript\n' +
    '// fichier module.js\n' +
    'export function greet(name) {\n' +
    '    return `Hello, ${name}!`;\n' +
    '}\n' +
    '\n' +
    '// fichier principal.js\n' +
    'import { greet } from \'./module.js\';\n' +
    'console.log(greet("Alice"));  // Output: Hello, Alice!\n' +
    '```\n' +
    '\n' +
    '## Gestion des Exceptions\n' +
    '\n' +
    '```javascript\n' +
    'try {\n' +
    '    let result = 10 / 0;\n' +
    '} catch (e) {\n' +
    '    console.log("Erreur : Division par zéro!");\n' +
    '} finally {\n' +
    '    console.log("Fin du bloc try");\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Frameworks Populaires\n' +
    '\n' +
    '- **React** : bibliothèque pour les interfaces utilisateur\n' +
    '- **Vue.js** : framework pour les interfaces utilisateur\n' +
    '- **Angular** : framework pour le développement web\n' +
    '- **Lodash** : utilitaires pour le travail avec des objets et des tableaux\n' +
    '- **Axios** : client HTTP pour les requêtes\n' +
    '\n' +
    '```javascript\n' +
    'import _ from \'lodash\';\n' +
    'const array = [1, 2, 3];\n' +
    'console.log(_.reverse(array));  // Output: [3, 2, 1]\n' +
    '\n' +
    'import axios from \'axios\';\n' +
    'axios.get(\'https://api.example.com/data\')\n' +
    '    .then(response => console.log(response.data));\n' +
    '```\n',
  python:
    '\n' +
    'Je comprends, vous voulez que chaque section soit correctement structurée avec des titres de niveaux appropriés dans le Markdown. Voici le contenu révisé pour un fichier Markdown avec des sections bien ' +
    '' +
    'markdown\n' +
    'Copy code\n' +
    '# Résumé Complet de Python\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Variables et Types de Données\n' +
    '- **Types de données de base :**\n' +
    '  - `int` : entier\n' +
    '  - `float` : nombre à virgule flottante\n' +
    '  - `str` : chaîne de caractères\n' +
    '  - `bool` : booléen (True/False)\n' +
    '  - `list` : liste\n' +
    '  - `tuple` : tuple (immuable)\n' +
    '  - `dict` : dictionnaire\n' +
    '  - `set` : ensemble\n' +
    '\n' +
    '```python\n' +
    'x = 5          # int\n' +
    'y = 3.14       # float\n' +
    'name = "Alice" # str\n' +
    'flag = True    # bool\n' +
    'numbers = [1, 2, 3] # list\n' +
    'point = (1, 2) # tuple\n' +
    'data = {\'a\': 1, \'b\': 2} # dict\n' +
    'unique = {1, 2, 3} # set\n' +
    '```\n' +
    '\n' +
    '## Structures de Contrôle\n' +
    '\n' +
    '### Conditionnelles\n' +
    '- Instructions if, elif, else\n' +
    '\n' +
    '```python\n' +
    'if x > 0:\n' +
    '    print("Positive")\n' +
    'elif x == 0:\n' +
    '    print("Zero")\n' +
    'else:\n' +
    '    print("Negative")\n' +
    '```\n' +
    '\n' +
    '### Boucles\n' +
    '\n' +
    '- Boucle for : pour itérer sur des séquences\n' +
    '- Boucle while : tant que la condition est vraie\n' +
    '\n' +
    '```python\n' +
    'for i in range(5):\n' +
    '    print(i)\n' +
    '\n' +
    'while x > 0:\n' +
    '    print(x)\n' +
    '    x -= 1\n' +
    '```\n' +
    '\n' +
    '## Fonctions\n' +
    '\n' +
    '### Définir des Fonctions\n' +
    '\n' +
    '- Création et appel de ' +
    '```python\n' +
    'def greet(name):\n' +
    '    return f"Hello, {name}!"\n' +
    '\n' +
    'print(greet("Alice"))  # Output: Hello, Alice!\n' +
    '```\n' +
    '\n' +
    '## Fonctions Natives Utiles\n' +
    '- **Fonctions couramment utilisées :**\n' +
    '  - `len()` : obtenir la longueur d\'un objet\n' +
    '  - `range()` : générer une séquence de nombres\n' +
    '  - `print()` : afficher des données\n' +
    '  - `type()` : obtenir le type d\'une variable\n' +
    '  - `int()`, `float()`, `str()` : conversion de types\n' +
    '  - `input()` : lire l\'entrée de l\'utilisateur\n' +
    '  - `open()` : ouvrir des fichier\n' +
    '  \n' +
    '```python\n' +
    'lst = [1, 2, 3]\n' +
    'print(len(lst))  # Output: 3\n' +
    '\n' +
    'for i in range(3):\n' +
    '    print(i)  # Output: 0 1 2\n' +
    '\n' +
    'print(type(lst))  # Output: <class \'list\'>\n' +
    '\n' +
    'x = "123"\n' +
    'print(int(x) + 1)  # Output: 124\n' +
    '\n' +
    'name = input("Enter your name: ")\n' +
    'print(f"Hello, {name}!")\n' +
    '```\n' +
    '\n' +
    '## Manipulation des Collections\n' +
    '\n' +
    '### Listes\n' +
    '\n' +
    '- Création, accès et ' +
    '' +
    '```python\n' +
    'numbers = [1, 2, 3, 4]\n' +
    'print(numbers[0])  # Output: 1\n' +
    'print(numbers[-1])  # Output: 4\n' +
    '\n' +
    'numbers.append(5)  # Ajoute 5 à la fin\n' +
    'numbers.remove(2)  # Supprime la première occurrence de 2\n' +
    'numbers.pop()      # Supprime et retourne le dernier élément\n' +
    'numbers.sort()     # Trie la liste\n' +
    '```\n' +
    '\n' +
    '### Dictionnaires\n' +
    '- Création, accès et ' +
    '```python\n' +
    'student = {\'name\': \'Alice\', \'age\': 25}\n' +
    'print(student[\'name\'])  # Output: Alice\n' +
    '\n' +
    'student[\'age\'] = 26\n' +
    'student[\'gender\'] = \'Female\'\n' +
    'age = student.get(\'age\', 0)  # Retourne 0 si \'age\' n\'existe pas\n' +
    'keys = student.keys()  # Retourne les clés\n' +
    'values = student.values()  # Retourne les valeurs\n' +
    '```\n' +
    '\n' +
    '### Ensembles\n' +
    '- Création et ' +
    '```\n' +
    'a = {1, 2, 3}\n' +
    'b = {3, 4, 5}\n' +
    'print(a | b)  # Union: {1, 2, 3, 4, 5}\n' +
    'print(a & b)  # Intersection: {3}\n' +
    'print(a - b)  # Différence: {1, 2}\n' +
    '```\n' +
    '\n' +
    '## Gestion des Fichiers\n' +
    '\n' +
    '### Lecture et Écriture de Fichiers\n' +
    '\n' +
    '```\n' +
    'with open(\'file.txt\', \'w\') as f:\n' +
    '    f.write("Hello, world!")\n' +
    '\n' +
    'with open(\'file.txt\', \'r\') as f:\n' +
    '    content = f.read()\n' +
    '    print(content)  # Output: Hello, world!\n' +
    '```\n' +
    '\n' +
    '## Programmation Orientée Objet (POO)\n' +
    '\n' +
    '### Classes et Objets\n' +
    '```python\n' +
    'class Person:\n' +
    '    def __init__(self, name, age):\n' +
    '        self.name = name\n' +
    '        self.age = age\n' +
    '\n' +
    '    def greet(self):\n' +
    '        return f"Hello, my name is {self.name} and I am {self.age} years old."\n' +
    '\n' +
    'alice = Person("Alice", 25)\n' +
    'print(alice.greet())  # Output: Hello, my name is Alice and I am 25 years old.\n' +
    '```\n' +
    '\n' +
    '### Héritage\n' +
    '\n' +
    '```python\n' +
    'class Student(Person):\n' +
    '    def __init__(self, name, age, student_id):\n' +
    '        super().__init__(name, age)\n' +
    '        self.student_id = student_id\n' +
    '\n' +
    'bob = Student("Bob", 20, "S12345")\n' +
    'print(bob.greet())  # Output: Hello, my name is Bob and I am 20 years old.\n' +
    'print(bob.student_id)  # Output: S12345\n' +
    '```\n' +
    '\n' +
    '## Fonctions Lambda et Compréhensions\n' +
    '\n' +
    '### Fonctions Lambda\n' +
    '\n' +
    '```python\n' +
    'add = lambda x, y: x + y\n' +
    'print(add(2, 3))  # Output: 5\n' +
    '```\n' +
    '\n' +
    '### Compréhensions de Liste\n' +
    '\n' +
    '```python\n' +
    'squares = [x**2 for x in range(10)]\n' +
    'print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n' +
    '```\n' +
    '\n' +
    '### Compréhensions de Dictionnaire\n' +
    '```python\n' +
    'square_dict = {x: x**2 for x in range(10)}\n' +
    'print(square_dict)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}\n' +
    '```\n' +
    '\n' +
    '## Modules et Paquets\n' +
    '\n' +
    '### Importer des Modules\n' +
    '\n' +
    '```python\n' +
    'import math\n' +
    'print(math.sqrt(16))  # Output: 4.0\n' +
    '```\n' +
    '\n' +
    '### Créer et Importer des Modules Personnalisés\n' +
    '\n' +
    '```python\n' +
    '# fichier mymodule.py\n' +
    'def greet(name):\n' +
    '    return f"Hello, {name}!"\n' +
    '\n' +
    '# fichier principal\n' +
    'import mymodule\n' +
    'print(mymodule.greet("Alice"))  # Output: Hello, Alice!\n' +
    '```\n' +
    '\n' +
    '## Gestion des Exceptions\n' +
    '```python\n' +
    'try:\n' +
    '    result = 10 / 0\n' +
    'except ZeroDivisionError:\n' +
    '    print("Erreur : Division par zéro!")\n' +
    'finally:\n' +
    '    print("Fin du bloc try")\n' +
    '```',
  cSharp:
    '# Résumé Complet de C#\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Variables et Types de Données\n' +
    '- **Types de données de base :**\n' +
    '  - `int` : entier\n' +
    '  - `float` : nombre à virgule flottante\n' +
    '  - `double` : nombre à double précision\n' +
    '  - `char` : caractère\n' +
    '  - `bool` : booléen (true/false)\n' +
    '  - `string` : chaîne de caractères\n' +
    '\n' +
    '```csharp\n' +
    'int x = 5;          // int\n' +
    'float y = 3.14f;    // float\n' +
    'double z = 3.14159; // double\n' +
    'char letter = \'A\';  // char\n' +
    'bool flag = true;   // bool\n' +
    'string name = "Alice"; // string\n' +
    '```\n' +
    '\n' +
    '### Structures de Contrôle\n' +
    '\n' +
    '#### Conditionnelles\n' +
    '- **Instructions conditionnelles :** `if`, `else if`, `else`\n' +
    '\n' +
    '```csharp\n' +
    'if (x > 0)\n' +
    '{\n' +
    '    Console.WriteLine("Positive");\n' +
    '}\n' +
    'else if (x == 0)\n' +
    '{\n' +
    '    Console.WriteLine("Zero");\n' +
    '}\n' +
    'else\n' +
    '{\n' +
    '    Console.WriteLine("Negative");\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '#### Boucles\n' +
    '- **Boucle `for`** : pour itérer sur des séquences\n' +
    '- **Boucle `while`** : tant que la condition est vraie\n' +
    '- **Boucle `do-while`** : exécute au moins une fois\n' +
    '\n' +
    '```csharp\n' +
    'for (int i = 0; i < 5; i++)\n' +
    '{\n' +
    '    Console.WriteLine(i);\n' +
    '}\n' +
    '\n' +
    'int i = 5;\n' +
    'while (i > 0)\n' +
    '{\n' +
    '    Console.WriteLine(i);\n' +
    '    i--;\n' +
    '}\n' +
    '\n' +
    'do\n' +
    '{\n' +
    '    Console.WriteLine(i);\n' +
    '    i++;\n' +
    '} while (i < 5);\n' +
    '```\n' +
    '\n' +
    '## Fonctions\n' +
    '\n' +
    '### Définir des Méthodes\n' +
    '- **Création et appel de méthodes :**\n' +
    '\n' +
    '```csharp\n' +
    'using System;\n' +
    '\n' +
    'class Program\n' +
    '{\n' +
    '    static void Main()\n' +
    '    {\n' +
    '        Console.WriteLine(Greet("Alice")); // Output: Hello, Alice!\n' +
    '    }\n' +
    '\n' +
    '    static string Greet(string name)\n' +
    '    {\n' +
    '        return "Hello, " + name + "!";\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Fonctions Natives Utiles\n' +
    '\n' +
    '- **Fonctions couramment utilisées :**\n' +
    '  - `Length` : obtenir la longueur d\'une chaîne ou d\'un tableau\n' +
    '  - `Parse()` : conversion de chaîne en nombre\n' +
    '  - `String.Format()` : formatage de chaînes\n' +
    '  - `Console.WriteLine()` : afficher des données\n' +
    '  - `typeof` : obtenir le type d\'une variable\n' +
    '\n' +
    '```csharp\n' +
    'string str = "123";\n' +
    'int num = int.Parse(str) + 1;\n' +
    'Console.WriteLine(num);  // Output: 124\n' +
    '\n' +
    'string formatted = string.Format("Value: {0:F2}", 3.14159);\n' +
    'Console.WriteLine(formatted);  // Output: Value: 3.14\n' +
    '```\n' +
    '\n' +
    '## Manipulation des Collections\n' +
    '\n' +
    '### Tableaux\n' +
    '- **Création, accès et manipulation :**\n' +
    '\n' +
    '```csharp\n' +
    'int[] numbers = {1, 2, 3, 4};\n' +
    'Console.WriteLine(numbers[0]);  // Output: 1\n' +
    'Console.WriteLine(numbers[numbers.Length - 1]);  // Output: 4\n' +
    '\n' +
    '// Initialiser un tableau\n' +
    'int[] moreNumbers = new int[5];\n' +
    'moreNumbers[0] = 10;\n' +
    'moreNumbers[1] = 20;\n' +
    '\n' +
    '// Parcourir un tableau\n' +
    'foreach (int num in moreNumbers)\n' +
    '{\n' +
    '    Console.WriteLine(num);\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Listes et Autres Collections\n' +
    '- **Utiliser `List<T>`, `Dictionary<TKey, TValue>`, etc. :**\n' +
    '\n' +
    '```csharp\n' +
    'using System.Collections.Generic;\n' +
    '\n' +
    'List<string> list = new List<string>();\n' +
    'list.Add("Alice");\n' +
    'list.Add("Bob");\n' +
    'Console.WriteLine(list[0]);  // Output: Alice\n' +
    '\n' +
    'Dictionary<string, int> map = new Dictionary<string, int>();\n' +
    'map["Alice"] = 25;\n' +
    'map["Bob"] = 30;\n' +
    'Console.WriteLine(map["Alice"]);  // Output: 25\n' +
    '```\n' +
    '\n' +
    '## Gestion des Fichiers\n' +
    '\n' +
    '### Lecture et Écriture de Fichiers\n' +
    '\n' +
    '```csharp\n' +
    'using System;\n' +
    'using System.IO;\n' +
    '\n' +
    'class FileExample\n' +
    '{\n' +
    '    static void Main()\n' +
    '    {\n' +
    '        // Écriture dans un fichier\n' +
    '        File.WriteAllText("file.txt", "Hello, world!");\n' +
    '\n' +
    '        // Lecture d\'un fichier\n' +
    '        string content = File.ReadAllText("file.txt");\n' +
    '        Console.WriteLine(content);  // Output: Hello, world!\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Programmation Orientée Objet (POO)\n' +
    '\n' +
    '### Classes et Objets\n' +
    '\n' +
    '```csharp\n' +
    'using System;\n' +
    '\n' +
    'class Person\n' +
    '{\n' +
    '    public string Name { get; set; }\n' +
    '    public int Age { get; set; }\n' +
    '\n' +
    '    public Person(string name, int age)\n' +
    '    {\n' +
    '        Name = name;\n' +
    '        Age = age;\n' +
    '    }\n' +
    '\n' +
    '    public string Greet()\n' +
    '    {\n' +
    '        return $"Hello, my name is {Name} and I am {Age} years old.";\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'class Program\n' +
    '{\n' +
    '    static void Main()\n' +
    '    {\n' +
    '        Person alice = new Person("Alice", 25);\n' +
    '        Console.WriteLine(alice.Greet());  // Output: Hello, my name is Alice and I am 25 years old.\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Héritage\n' +
    '\n' +
    '```csharp\n' +
    'using System;\n' +
    '\n' +
    'class Student : Person\n' +
    '{\n' +
    '    public string StudentId { get; set; }\n' +
    '\n' +
    '    public Student(string name, int age, string studentId) : base(name, age)\n' +
    '    {\n' +
    '        StudentId = studentId;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'class Program\n' +
    '{\n' +
    '    static void Main()\n' +
    '    {\n' +
    '        Student bob = new Student("Bob", 20, "S12345");\n' +
    '        Console.WriteLine(bob.Greet());  // Output: Hello, my name is Bob and I am 20 years old.\n' +
    '        Console.WriteLine(bob.StudentId);  // Output: S12345\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Interfaces et Classes Abstraites\n' +
    '\n' +
    '### Interfaces\n' +
    '\n' +
    '```csharp\n' +
    'interface IDrawable\n' +
    '{\n' +
    '    void Draw();\n' +
    '}\n' +
    '\n' +
    'class Circle : IDrawable\n' +
    '{\n' +
    '    public void Draw()\n' +
    '    {\n' +
    '        Console.WriteLine("Drawing a circle.");\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Classes Abstraites\n' +
    '\n' +
    '```csharp\n' +
    'abstract class Shape\n' +
    '{\n' +
    '    public abstract void Draw();\n' +
    '}\n' +
    '\n' +
    'class Rectangle : Shape\n' +
    '{\n' +
    '    public override void Draw()\n' +
    '    {\n' +
    '        Console.WriteLine("Drawing a rectangle.");\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Gestion des Exceptions\n' +
    '\n' +
    '```csharp\n' +
    'using System;\n' +
    '\n' +
    'class ExceptionHandling\n' +
    '{\n' +
    '    static void Main()\n' +
    '    {\n' +
    '        try\n' +
    '        {\n' +
    '            int result = 10 / 0;\n' +
    '        }\n' +
    '        catch (DivideByZeroException)\n' +
    '        {\n' +
    '            Console.WriteLine("Error: Division by zero!");\n' +
    '        }\n' +
    '        finally\n' +
    '        {\n' +
    '            Console.WriteLine("End of try block");\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '\n' +
    '## Bibliothèques et Frameworks Populaires\n' +
    '\n' +
    '- **ASP.NET** : framework pour le développement web\n' +
    '- **Entity Framework** : ORM pour la gestion des bases de données\n' +
    '- **XUnit** / **NUnit** : frameworks pour les tests unitaires\n' +
    '- **Newtonsoft.Json** : bibliothèque pour la manipulation de JSON\n' +
    '\n' +
    '```csharp\n' +
    'using Newtonsoft.Json;\n' +
    '\n' +
    'class Program\n' +
    '{\n' +
    '    static void Main()\n' +
    '    {\n' +
    '        var json = JsonConvert.SerializeObject(new { Name = "Alice", Age = 25 });\n' +
    '        Console.WriteLine(json);  // Output: {"Name":"Alice","Age":25}\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    'Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon développeur C#. Utilisez-le comme guide de référence pendant votre apprentissage.\n' +
    '```\n',
  java:
    '# Résumé Complet de Java\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Variables et Types de Données\n' +
    '- **Types de données de base :**\n' +
    '  - `int` : entier\n' +
    '  - `float` : nombre à virgule flottante\n' +
    '  - `double` : nombre à double précision\n' +
    '  - `char` : caractère\n' +
    '  - `boolean` : booléen (true/false)\n' +
    '  - `String` : chaîne de caractères\n' +
    '\n' +
    '```java\n' +
    'int x = 5;          // int\n' +
    'float y = 3.14f;    // float\n' +
    'double z = 3.14159; // double\n' +
    'char letter = \'A\';  // char\n' +
    'boolean flag = true;// boolean\n' +
    'String name = "Alice"; // String\n' +
    '```\n' +
    '\n' +
    '### Structures de Contrôle\n' +
    '\n' +
    '#### Conditionnelles\n' +
    '- **Instructions conditionnelles :** `if`, `else if`, `else`\n' +
    '\n' +
    '```java\n' +
    'if (x > 0) {\n' +
    '    System.out.println("Positive");\n' +
    '} else if (x == 0) {\n' +
    '    System.out.println("Zero");\n' +
    '} else {\n' +
    '    System.out.println("Negative");\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '#### Boucles\n' +
    '- **Boucle `for`** : pour itérer sur des séquences\n' +
    '- **Boucle `while`** : tant que la condition est vraie\n' +
    '- **Boucle `do-while`** : exécute au moins une fois\n' +
    '\n' +
    '```java\n' +
    'for (int i = 0; i < 5; i++) {\n' +
    '    System.out.println(i);\n' +
    '}\n' +
    '\n' +
    'int i = 5;\n' +
    'while (i > 0) {\n' +
    '    System.out.println(i);\n' +
    '    i--;\n' +
    '}\n' +
    '\n' +
    'do {\n' +
    '    System.out.println(i);\n' +
    '    i++;\n' +
    '} while (i < 5);\n' +
    '```\n' +
    '\n' +
    '## Fonctions\n' +
    '\n' +
    '### Définir des Méthodes\n' +
    '- **Création et appel de méthodes :**\n' +
    '\n' +
    '```java\n' +
    'public class Main {\n' +
    '    public static void main(String[] args) {\n' +
    '        System.out.println(greet("Alice")); // Output: Hello, Alice!\n' +
    '    }\n' +
    '\n' +
    '    public static String greet(String name) {\n' +
    '        return "Hello, " + name + "!";\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Fonctions Natives Utiles\n' +
    '\n' +
    '- **Fonctions couramment utilisées :**\n' +
    '  - `length()` : obtenir la longueur d\'une chaîne ou d\'un tableau\n' +
    '  - `parseInt()` / `parseDouble()` : conversion de chaîne en nombre\n' +
    '  - `String.format()` : formatage de chaînes\n' +
    '  - `System.out.println()` : afficher des données\n' +
    '  - `instanceof` : vérifier le type d\'un objet\n' +
    '\n' +
    '```java\n' +
    'String str = "123";\n' +
    'int num = Integer.parseInt(str) + 1;\n' +
    'System.out.println(num);  // Output: 124\n' +
    '\n' +
    'String formatted = String.format("Value: %.2f", 3.14159);\n' +
    'System.out.println(formatted);  // Output: Value: 3.14\n' +
    '```\n' +
    '\n' +
    '## Manipulation des Collections\n' +
    '\n' +
    '### Tableaux\n' +
    '- **Création, accès et manipulation :**\n' +
    '\n' +
    '```java\n' +
    'int[] numbers = {1, 2, 3, 4};\n' +
    'System.out.println(numbers[0]);  // Output: 1\n' +
    'System.out.println(numbers[numbers.length - 1]);  // Output: 4\n' +
    '\n' +
    '// Initialiser un tableau\n' +
    'int[] moreNumbers = new int[5];\n' +
    'moreNumbers[0] = 10;\n' +
    'moreNumbers[1] = 20;\n' +
    '\n' +
    '// Parcourir un tableau\n' +
    'for (int num : moreNumbers) {\n' +
    '    System.out.println(num);\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Listes et Autres Collections\n' +
    '- **Utiliser `ArrayList`, `HashMap`, etc. :**\n' +
    '\n' +
    '```java\n' +
    'import java.util.ArrayList;\n' +
    'import java.util.HashMap;\n' +
    '\n' +
    'ArrayList<String> list = new ArrayList<>();\n' +
    'list.add("Alice");\n' +
    'list.add("Bob");\n' +
    'System.out.println(list.get(0));  // Output: Alice\n' +
    '\n' +
    'HashMap<String, Integer> map = new HashMap<>();\n' +
    'map.put("Alice", 25);\n' +
    'map.put("Bob", 30);\n' +
    'System.out.println(map.get("Alice"));  // Output: 25\n' +
    '```\n' +
    '\n' +
    '## Gestion des Fichiers\n' +
    '\n' +
    '### Lecture et Écriture de Fichiers\n' +
    '\n' +
    '```java\n' +
    'import java.io.*;\n' +
    '\n' +
    'public class FileExample {\n' +
    '    public static void main(String[] args) {\n' +
    '        try {\n' +
    '            // Écriture dans un fichier\n' +
    '            FileWriter writer = new FileWriter("file.txt");\n' +
    '            writer.write("Hello, world!");\n' +
    '            writer.close();\n' +
    '\n' +
    '            // Lecture d\'un fichier\n' +
    '            FileReader reader = new FileReader("file.txt");\n' +
    '            BufferedReader bufferedReader = new BufferedReader(reader);\n' +
    '            String line = bufferedReader.readLine();\n' +
    '            System.out.println(line);  // Output: Hello, world!\n' +
    '            bufferedReader.close();\n' +
    '        } catch (IOException e) {\n' +
    '            e.printStackTrace();\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Programmation Orientée Objet (POO)\n' +
    '\n' +
    '### Classes et Objets\n' +
    '\n' +
    '```java\n' +
    'public class Person {\n' +
    '    private String name;\n' +
    '    private int age;\n' +
    '\n' +
    '    public Person(String name, int age) {\n' +
    '        this.name = name;\n' +
    '        this.age = age;\n' +
    '    }\n' +
    '\n' +
    '    public String greet() {\n' +
    '        return "Hello, my name is " + name + " and I am " + age + " years old.";\n' +
    '    }\n' +
    '\n' +
    '    public static void main(String[] args) {\n' +
    '        Person alice = new Person("Alice", 25);\n' +
    '        System.out.println(alice.greet());  // Output: Hello, my name is Alice and I am 25 years old.\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Héritage\n' +
    '\n' +
    '```java\n' +
    'public class Student extends Person {\n' +
    '    private String studentId;\n' +
    '\n' +
    '    public Student(String name, int age, String studentId) {\n' +
    '        super(name, age);\n' +
    '        this.studentId = studentId;\n' +
    '    }\n' +
    '\n' +
    '    public static void main(String[] args) {\n' +
    '        Student bob = new Student("Bob", 20, "S12345");\n' +
    '        System.out.println(bob.greet());  // Output: Hello, my name is Bob and I am 20 years old.\n' +
    '        System.out.println(bob.studentId);  // Output: S12345\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Interfaces et Classes Abstraites\n' +
    '\n' +
    '### Interfaces\n' +
    '\n' +
    '```java\n' +
    'interface Drawable {\n' +
    '    void draw();\n' +
    '}\n' +
    '\n' +
    'class Circle implements Drawable {\n' +
    '    public void draw() {\n' +
    '        System.out.println("Drawing a circle.");\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Classes Abstraites\n' +
    '\n' +
    '```java\n' +
    'abstract class Shape {\n' +
    '    abstract void draw();\n' +
    '}\n' +
    '\n' +
    'class Rectangle extends Shape {\n' +
    '    void draw() {\n' +
    '        System.out.println("Drawing a rectangle.");\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Gestion des Exceptions\n' +
    '\n' +
    '```java\n' +
    'public class ExceptionHandling {\n' +
    '    public static void main(String[] args) {\n' +
    '        try {\n' +
    '            int result = 10 / 0;\n' +
    '        } catch (ArithmeticException e) {\n' +
    '            System.out.println("Error: Division by zero!");\n' +
    '        } finally {\n' +
    '            System.out.println("End of try block");\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Frameworks Populaires\n' +
    '\n' +
    '- **Spring** : framework pour le développement d\'applications Java\n' +
    '- **Hibernate** : framework pour la gestion des bases de données\n' +
    '- **JUnit** : framework pour les tests unitaires\n' +
    '- **Apache Commons** : utilitaires pour diverses tâches courantes\n' +
    '\n' +
    '```java\n' +
    'import org.junit.Test;\n' +
    'import static org.junit.Assert.assertEquals;\n' +
    '\n' +
    'public class TestExample {\n' +
    '    @Test\n' +
    '    public void testAddition() {\n' +
    '        assertEquals(5, 2 + 3);\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    'Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon développeur Java. Utilisez-le comme guide de référence pendant votre apprentissage.\n' +
    '```',
  postgreSQL:
    '# Résumé Complet de PostgreSQL\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Introduction à PostgreSQL\n' +
    '- **PostgreSQL** est un système de gestion de base de données relationnelle (SGBDR) open-source connu pour sa robustesse, son extensibilité et son respect des standards SQL.\n' +
    '- **Philosophie** : offrir des fonctionnalités avancées, un haut niveau de conformité avec les standards SQL, et une extensibilité.\n' +
    '\n' +
    '## Installation et Configuration\n' +
    '\n' +
    '### Installation de PostgreSQL\n' +
    '- **Via Docker** :\n' +
    '  ```bash\n' +
    '  docker pull postgres:latest\n' +
    '  docker run -d -p 5432:5432 --name postgres-container -e POSTGRES_PASSWORD=mysecretpassword postgres:latest\n' +
    '  ```\n' +
    '- **Via Package Manager** (sur Ubuntu) :\n' +
    '  ```bash\n' +
    '  sudo apt update\n' +
    '  sudo apt install postgresql postgresql-contrib\n' +
    '  ```\n' +
    '- **Accéder à PostgreSQL** : Utilisez le client en ligne de commande `psql` ou un outil graphique comme pgAdmin.\n' +
    '\n' +
    '### Connexion à PostgreSQL\n' +
    '- **Via psql** :\n' +
    '  ```bash\n' +
    '  psql -U postgres\n' +
    '  ```\n' +
    '- **Configuration du fichier `pg_hba.conf`** :\n' +
    '  - Pour configurer les méthodes d\'authentification et les accès réseau.\n' +
    '\n' +
    '## Concepts Clés\n' +
    '\n' +
    '### Bases de Données\n' +
    '- **Création d\'une Base de Données** :\n' +
    '  ```sql\n' +
    '  CREATE DATABASE mydatabase;\n' +
    '  ```\n' +
    '- **Suppression d\'une Base de Données** :\n' +
    '  ```sql\n' +
    '  DROP DATABASE mydatabase;\n' +
    '  ```\n' +
    '\n' +
    '### Tables\n' +
    '- **Création d\'une Table** :\n' +
    '  ```sql\n' +
    '  CREATE TABLE employees (\n' +
    '      id SERIAL PRIMARY KEY,\n' +
    '      name VARCHAR(100),\n' +
    '      position VARCHAR(50),\n' +
    '      salary NUMERIC\n' +
    '  );\n' +
    '  ```\n' +
    '- **Modification d\'une Table** :\n' +
    '  ```sql\n' +
    '  ALTER TABLE employees ADD COLUMN hire_date DATE;\n' +
    '  ```\n' +
    '- **Suppression d\'une Table** :\n' +
    '  ```sql\n' +
    '  DROP TABLE employees;\n' +
    '  ```\n' +
    '\n' +
    '### Types de Données\n' +
    '- **Types Primitifs** :\n' +
    '  - `INTEGER`, `VARCHAR`, `TEXT`, `BOOLEAN`, `DATE`, `TIMESTAMP`\n' +
    '- **Types Avancés** :\n' +
    '  - `ARRAY`, `JSON`, `UUID`\n' +
    '\n' +
    '### Index\n' +
    '- **Création d\'un Index** :\n' +
    '  ```sql\n' +
    '  CREATE INDEX idx_name ON employees (name);\n' +
    '  ```\n' +
    '- **Suppression d\'un Index** :\n' +
    '  ```sql\n' +
    '  DROP INDEX idx_name;\n' +
    '  ```\n' +
    '\n' +
    '### Requêtes SQL\n' +
    '- **Insertion de Données** :\n' +
    '  ```sql\n' +
    '  INSERT INTO employees (name, position, salary) VALUES (\'John Doe\', \'Engineer\', 75000);\n' +
    '  ```\n' +
    '- **Mise à Jour de Données** :\n' +
    '  ```sql\n' +
    '  UPDATE employees SET salary = 80000 WHERE name = \'John Doe\';\n' +
    '  ```\n' +
    '- **Suppression de Données** :\n' +
    '  ```sql\n' +
    '  DELETE FROM employees WHERE name = \'John Doe\';\n' +
    '  ```\n' +
    '- **Sélection de Données** :\n' +
    '  ```sql\n' +
    '  SELECT * FROM employees;\n' +
    '  ```\n' +
    '\n' +
    '### Transactions\n' +
    '- **Début d\'une Transaction** :\n' +
    '  ```sql\n' +
    '  BEGIN;\n' +
    '  ```\n' +
    '- **Commit d\'une Transaction** :\n' +
    '  ```sql\n' +
    '  COMMIT;\n' +
    '  ```\n' +
    '- **Rollback d\'une Transaction** :\n' +
    '  ```sql\n' +
    '  ROLLBACK;\n' +
    '  ```\n' +
    '\n' +
    '### Vues et Fonctions\n' +
    '- **Création d\'une Vue** :\n' +
    '  ```sql\n' +
    '  CREATE VIEW employee_view AS\n' +
    '  SELECT name, position FROM employees;\n' +
    '  ```\n' +
    '- **Création d\'une Fonction** :\n' +
    '  ```sql\n' +
    '  CREATE FUNCTION get_employee_salary(employee_name VARCHAR) RETURNS NUMERIC AS $$\n' +
    '  DECLARE\n' +
    '      salary NUMERIC;\n' +
    '  BEGIN\n' +
    '      SELECT salary INTO salary FROM employees WHERE name = employee_name;\n' +
    '      RETURN salary;\n' +
    '  END;\n' +
    '  $$ LANGUAGE plpgsql;\n' +
    '  ```\n' +
    '\n' +
    '## Jointures (Joins)\n' +
    '\n' +
    'Les jointures permettent de combiner les lignes de deux ou plusieurs tables en fonction d\'une condition de correspondance.\n' +
    '\n' +
    '### JOIN (ou INNER JOIN)\n' +
    '- **Définition** : Renvoie les lignes qui ont des correspondances dans les deux tables.\n' +
    '- **Exemple** :\n' +
    '  ```sql\n' +
    '  SELECT employees.name, departments.department_name\n' +
    '  FROM employees\n' +
    '  INNER JOIN departments ON employees.department_id = departments.id;\n' +
    '  ```\n' +
    '\n' +
    '### LEFT JOIN (ou LEFT OUTER JOIN)\n' +
    '- **Définition** : Renvoie toutes les lignes de la table de gauche et les lignes correspondantes de la table de droite. Les lignes sans correspondance dans la table de droite auront des valeurs NULL.\n' +
    '- **Exemple** :\n' +
    '  ```sql\n' +
    '  SELECT employees.name, departments.department_name\n' +
    '  FROM employees\n' +
    '  LEFT JOIN departments ON employees.department_id = departments.id;\n' +
    '  ```\n' +
    '\n' +
    '### RIGHT JOIN (ou RIGHT OUTER JOIN)\n' +
    '- **Définition** : Renvoie toutes les lignes de la table de droite et les lignes correspondantes de la table de gauche. Les lignes sans correspondance dans la table de gauche auront des valeurs NULL.\n' +
    '- **Exemple** :\n' +
    '  ```sql\n' +
    '  SELECT employees.name, departments.department_name\n' +
    '  FROM employees\n' +
    '  RIGHT JOIN departments ON employees.department_id = departments.id;\n' +
    '  ```\n' +
    '\n' +
    '### FULL JOIN (ou FULL OUTER JOIN)\n' +
    '- **Définition** : Renvoie toutes les lignes lorsque qu\'il y a une correspondance dans l\'une des tables. Les lignes sans correspondance dans les deux tables auront des valeurs NULL.\n' +
    '- **Exemple** :\n' +
    '  ```sql\n' +
    '  SELECT employees.name, departments.department_name\n' +
    '  FROM employees\n' +
    '  FULL JOIN departments ON employees.department_id = departments.id;\n' +
    '  ```\n' +
    '\n' +
    '## Administration et Maintenance\n' +
    '\n' +
    '### Sauvegarde et Restauration\n' +
    '- **Sauvegarde** :\n' +
    '  ```bash\n' +
    '  pg_dump mydatabase > mydatabase_backup.sql\n' +
    '  ```\n' +
    '- **Restauration** :\n' +
    '  ```bash\n' +
    '  psql mydatabase < mydatabase_backup.sql\n' +
    '  ```\n' +
    '\n' +
    '### Gestion des Utilisateurs\n' +
    '- **Création d\'un Utilisateur** :\n' +
    '  ```sql\n' +
    '  CREATE USER myuser WITH PASSWORD \'mypassword\';\n' +
    '  ```\n' +
    '- **Attribution de Privilèges** :\n' +
    '  ```sql\n' +
    '  GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;\n' +
    '  ```\n' +
    '\n' +
    '### Optimisation des Performances\n' +
    '- **Analyse des Requêtes** :\n' +
    '  - Utilisez `EXPLAIN` pour analyser le plan d\'exécution des requêtes.\n' +
    '- **Vacuum** :\n' +
    '  - Nettoyez les tables pour libérer l\'espace et optimiser les performances.\n' +
    '  ```sql\n' +
    '  VACUUM;\n' +
    '  ```\n' +
    '\n' +
    '## Sécurité\n' +
    '\n' +
    '### Gestion des Accès\n' +
    '- **Configuration du fichier `postgresql.conf`** :\n' +
    '  - Pour définir les paramètres de connexion et les paramètres de sécurité.\n' +
    '- **Définition des Rôles et Privilèges** :\n' +
    '  ```sql\n' +
    '  CREATE ROLE readonly;\n' +
    '  GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;\n' +
    '  ```\n' +
    '\n' +
    '### Chiffrement\n' +
    '- **Chiffrement des Données** :\n' +
    '  - Utilisez les extensions comme `pgcrypto` pour le chiffrement des données au niveau des colonnes.\n' +
    '\n' +
    '## Raccourcis Utiles\n' +
    '\n' +
    '- **Afficher les Bases de Données** :\n' +
    '  ```sql\n' +
    '  \\l\n' +
    '  ```\n' +
    '- **Afficher les Tables** :\n' +
    '  ```sql\n' +
    '  \\dt\n' +
    '  ```\n' +
    '- **Afficher les Colonnes d\'une Table** :\n' +
    '  ```sql\n' +
    '  \\d employees\n' +
    '  ```\n' +
    '- **Quitter psql** :\n' +
    '  ```sql\n' +
    '  \\q\n' +
    '  ```\n' +
    '\n' +
    '## Outils Complémentaires\n' +
    '\n' +
    '### pgAdmin\n' +
    '- **Définition** : Outil de gestion graphique pour PostgreSQL.\n' +
    '- **Installation** : Téléchargez et installez depuis [pgAdmin](https://www.pgadmin.org/download/).\n' +
    '\n' +
    '### PostGIS\n' +
    '- **Définition** : Extension pour le support des données géospatiales.\n' +
    '- **Installation** :\n' +
    '  ```sql\n' +
    '  CREATE EXTENSION postgis;\n' +
    '  ```\n' +
    '\n' +
    '### pgBouncer\n' +
    '- **Définition** : Pooler de connexions pour améliorer les performances de PostgreSQL.\n' +
    '- **Installation et Configuration** :\n' +
    '  - Suivez les instructions sur [pgBouncer GitHub](https://github.com/pgbouncer/pgbouncer).\n' +
    '\n' +
    'Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon utilisateur de PostgreSQL. Utilisez-le comme guide de référence pendant votre apprentissage.\n' +
    '```',
  react:
    '# Résumé Complet de React\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Introduction à React\n' +
    '- **React** est une bibliothèque JavaScript pour la création d\'interfaces utilisateur (UI) dynamiques.\n' +
    '- Utilise des composants pour construire des interfaces complexes à partir de petits morceaux de code réutilisables.\n' +
    '\n' +
    '## Configuration de l\'Environnement\n' +
    '\n' +
    '### Création d\'un Projet React\n' +
    '- **Utilisation de Create React App** : un outil de configuration rapide pour créer des applications React.\n' +
    '\n' +
    '```bash\n' +
    'npx create-react-app my-app\n' +
    'cd my-app\n' +
    'npm start\n' +
    '```\n' +
    '\n' +
    '## Composants\n' +
    '\n' +
    '### Composants Fonctionnels\n' +
    '- **Définition** : fonctions JavaScript qui retournent des éléments React.\n' +
    '- **Syntaxe** :\n' +
    '\n' +
    '```jsx\n' +
    'import React from \'react\';\n' +
    '\n' +
    'function Welcome(props) {\n' +
    '    return <h1>Hello, {props.name}</h1>;\n' +
    '}\n' +
    '\n' +
    'export default Welcome;\n' +
    '```\n' +
    '\n' +
    '### Composants de Classe\n' +
    '- **Définition** : classes JavaScript qui étendent `React.Component`.\n' +
    '- **Syntaxe** :\n' +
    '\n' +
    '```jsx\n' +
    'import React, { Component } from \'react\';\n' +
    '\n' +
    'class Welcome extends Component {\n' +
    '    render() {\n' +
    '        return <h1>Hello, {this.props.name}</h1>;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'export default Welcome;\n' +
    '```\n' +
    '\n' +
    '## JSX\n' +
    '\n' +
    '### Syntaxe JSX\n' +
    '- **JSX** : extension de syntaxe pour JavaScript qui ressemble à du HTML.\n' +
    '- **Exemple** :\n' +
    '\n' +
    '```jsx\n' +
    'const element = <h1>Hello, world!</h1>;\n' +
    '```\n' +
    '\n' +
    '### Expressions JSX\n' +
    '- **Insérer des expressions JavaScript dans JSX** :\n' +
    '\n' +
    '```jsx\n' +
    'const name = \'Alice\';\n' +
    'const element = <h1>Hello, {name}</h1>;\n' +
    '```\n' +
    '\n' +
    '## Props et État\n' +
    '\n' +
    '### Props\n' +
    '- **Définition** : arguments passés aux composants.\n' +
    '- **Exemple** :\n' +
    '\n' +
    '```jsx\n' +
    'function App() {\n' +
    '    return <Welcome name="Alice" />;\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### État\n' +
    '- **Définition** : données internes d\'un composant qui peuvent changer.\n' +
    '- **Utilisation dans un composant fonctionnel avec `useState`** :\n' +
    '\n' +
    '```jsx\n' +
    'import React, { useState } from \'react\';\n' +
    '\n' +
    'function Counter() {\n' +
    '    const [count, setCount] = useState(0);\n' +
    '\n' +
    '    return (\n' +
    '        <div>\n' +
    '            <p>You clicked {count} times</p>\n' +
    '            <button onClick={() => setCount(count + 1)}>Click me</button>\n' +
    '        </div>\n' +
    '    );\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Gestion des Événements\n' +
    '\n' +
    '### Événements en React\n' +
    '- **Attacher des événements** :\n' +
    '\n' +
    '```jsx\n' +
    'function Button() {\n' +
    '    function handleClick() {\n' +
    '        alert(\'Button clicked\');\n' +
    '    }\n' +
    '\n' +
    '    return <button onClick={handleClick}>Click me</button>;\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Cycle de Vie des Composants\n' +
    '\n' +
    '### Méthodes du Cycle de Vie (Composants de Classe)\n' +
    '- **Principales méthodes** :\n' +
    '  - `componentDidMount()` : appelé après que le composant soit monté.\n' +
    '  - `componentDidUpdate(prevProps, prevState)` : appelé après que le composant soit mis à jour.\n' +
    '  - `componentWillUnmount()` : appelé avant que le composant soit démonté.\n' +
    '\n' +
    '```jsx\n' +
    'class MyComponent extends React.Component {\n' +
    '    componentDidMount() {\n' +
    '        console.log(\'Component did mount\');\n' +
    '    }\n' +
    '\n' +
    '    componentDidUpdate(prevProps, prevState) {\n' +
    '        console.log(\'Component did update\');\n' +
    '    }\n' +
    '\n' +
    '    componentWillUnmount() {\n' +
    '        console.log(\'Component will unmount\');\n' +
    '    }\n' +
    '\n' +
    '    render() {\n' +
    '        return <div>Hello World</div>;\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '### Hooks de Cycle de Vie (Composants Fonctionnels)\n' +
    '- **Utilisation des Hooks comme `useEffect` pour le cycle de vie** :\n' +
    '\n' +
    '```jsx\n' +
    'import React, { useEffect } from \'react\';\n' +
    '\n' +
    'function MyComponent() {\n' +
    '    useEffect(() => {\n' +
    '        console.log(\'Component did mount or update\');\n' +
    '        \n' +
    '        return () => {\n' +
    '            console.log(\'Cleanup before unmount\');\n' +
    '        };\n' +
    '    }, []); // Le tableau vide signifie que l\'effet s\'exécute uniquement au montage et au démontage.\n' +
    '\n' +
    '    return <div>Hello World</div>;\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Context\n' +
    '\n' +
    '### Utilisation du Contexte\n' +
    '- **Définir un Contexte** :\n' +
    '\n' +
    '```jsx\n' +
    'import React, { createContext, useContext } from \'react\';\n' +
    '\n' +
    'const MyContext = createContext(\'default value\');\n' +
    '\n' +
    'function Display() {\n' +
    '    const value = useContext(MyContext);\n' +
    '    return <div>Value: {value}</div>;\n' +
    '}\n' +
    '\n' +
    'function App() {\n' +
    '    return (\n' +
    '        <MyContext.Provider value="some value">\n' +
    '            <Display />\n' +
    '        </MyContext.Provider>\n' +
    '    );\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Gestion des Formulaires\n' +
    '\n' +
    '### Formulaires Contrôlés\n' +
    '- **Utilisation des contrôles de formulaire avec état** :\n' +
    '\n' +
    '```jsx\n' +
    'import React, { useState } from \'react\';\n' +
    '\n' +
    'function Form() {\n' +
    '    const [value, setValue] = useState(\'\');\n' +
    '\n' +
    '    function handleChange(event) {\n' +
    '        setValue(event.target.value);\n' +
    '    }\n' +
    '\n' +
    '    function handleSubmit(event) {\n' +
    '        event.preventDefault();\n' +
    '        console.log(\'A form was submitted: \' + value);\n' +
    '    }\n' +
    '\n' +
    '    return (\n' +
    '        <form onSubmit={handleSubmit}>\n' +
    '            <label>\n' +
    '                Name:\n' +
    '                <input type="text" value={value} onChange={handleChange} />\n' +
    '            </label>\n' +
    '            <button type="submit">Submit</button>\n' +
    '        </form>\n' +
    '    );\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Routes\n' +
    '\n' +
    '### Utilisation de React Router\n' +
    '- **Installation et configuration de React Router** :\n' +
    '\n' +
    '```bash\n' +
    'npm install react-router-dom\n' +
    '```\n' +
    '\n' +
    '- **Définir les routes** :\n' +
    '\n' +
    '```jsx\n' +
    'import React from \'react\';\n' +
    'import { BrowserRouter as Router, Route, Switch, Link } from \'react-router-dom\';\n' +
    '\n' +
    'function Home() {\n' +
    '    return <h2>Home</h2>;\n' +
    '}\n' +
    '\n' +
    'function About() {\n' +
    '    return <h2>About</h2>;\n' +
    '}\n' +
    '\n' +
    'function App() {\n' +
    '    return (\n' +
    '        <Router>\n' +
    '            <nav>\n' +
    '                <ul>\n' +
    '                    <li><Link to="/">Home</Link></li>\n' +
    '                    <li><Link to="/about">About</Link></li>\n' +
    '                </ul>\n' +
    '            </nav>\n' +
    '\n' +
    '            <Switch>\n' +
    '                <Route path="/about">\n' +
    '                    <About />\n' +
    '                </Route>\n' +
    '                <Route path="/">\n' +
    '                    <Home />\n' +
    '                </Route>\n' +
    '            </Switch>\n' +
    '        </Router>\n' +
    '    );\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Outils Complémentaires\n' +
    '\n' +
    '- **Redux** : gestion de l\'état global\n' +
    '- **Axios** : requêtes HTTP\n' +
    '- **Styled-components** : stylisation des composants\n' +
    '- **Jest** / **React Testing Library** : tests unitaires et d\'intégration\n' +
    '\n' +
    '```jsx\n' +
    'import axios from \'axios\';\n' +
    'import React, { useState, useEffect } from \'react\';\n' +
    '\n' +
    'function FetchData() {\n' +
    '    const [data, setData] = useState(null);\n' +
    '\n' +
    '    useEffect(() => {\n' +
    '        axios.get(\'https://api.example.com/data\')\n' +
    '            .then(response => setData(response.data))\n' +
    '            .catch(error => console.error(\'Error fetching data:\', error));\n' +
    '    }, []);\n' +
    '\n' +
    '    return (\n' +
    '        <div>\n' +
    '            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : \'Loading...\'}\n' +
    '        </div>\n' +
    '    );\n' +
    '}\n' +
    '```\n' +
    '\n' +
    'Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon développeur React. Utilisez-le comme guide de référence pendant votre apprentissage.\n' +
    '```\n',
  vuejs:
    '# Résumé Complet de Vue.js\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Introduction à Vue.js\n' +
    '- **Vue.js** est un framework JavaScript pour créer des interfaces utilisateur et des applications monopage (SPA).\n' +
    '- Utilise des composants pour construire des interfaces dynamiques et réactives.\n' +
    '\n' +
    '## Configuration de l\'Environnement\n' +
    '\n' +
    '### Création d\'un Projet Vue.js\n' +
    '- **Utilisation de Vue CLI** : un outil pour initialiser et configurer des projets Vue.js.\n' +
    '\n' +
    '```bash\n' +
    'npm install -g @vue/cli\n' +
    'vue create my-project\n' +
    'cd my-project\n' +
    'npm run serve\n' +
    '```\n' +
    '\n' +
    '## Composants\n' +
    '\n' +
    '### Composants Vue.js\n' +
    '- **Définition** : les composants Vue.js sont des objets JavaScript avec des propriétés spéciales comme `data`, `methods`, et `computed`.\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <div>\n' +
    '    <h1>Hello, {{ name }}!</h1>\n' +
    '  </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  data() {\n' +
    '    return {\n' +
    '      name: \'Alice\'\n' +
    '    };\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<style scoped>\n' +
    '/* Styles spécifiques au composant */\n' +
    '</style>\n' +
    '```\n' +
    '\n' +
    '## Directives\n' +
    '\n' +
    '### Directives Vue.js\n' +
    '- **Utilisation des directives** comme `v-bind`, `v-model`, `v-for`, `v-if`, etc.\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <div>\n' +
    '    <!-- Lier les attributs -->\n' +
    '    <img v-bind:src="imageSrc" alt="Vue logo" />\n' +
    '\n' +
    '    <!-- Data Binding -->\n' +
    '    <input v-model="message" />\n' +
    '\n' +
    '    <!-- Boucle sur un tableau -->\n' +
    '    <ul>\n' +
    '      <li v-for="item in items" :key="item.id">{{ item.text }}</li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <!-- Conditionnel -->\n' +
    '    <p v-if="isVisible">This is visible</p>\n' +
    '  </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  data() {\n' +
    '    return {\n' +
    '      imageSrc: \'logo.png\',\n' +
    '      message: \'\',\n' +
    '      items: [{ id: 1, text: \'Item 1\' }, { id: 2, text: \'Item 2\' }],\n' +
    '      isVisible: true\n' +
    '    };\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '## Événements\n' +
    '\n' +
    '### Gestion des Événements\n' +
    '- **Attacher des événements** avec `v-on` ou la syntaxe abrégée `@`.\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <button @click="handleClick">Click me</button>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  methods: {\n' +
    '    handleClick() {\n' +
    '      alert(\'Button clicked\');\n' +
    '    }\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '## Props et État\n' +
    '\n' +
    '### Props\n' +
    '- **Définition** : les props permettent de passer des données d\'un composant parent à un composant enfant.\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <ChildComponent :message="parentMessage" />\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'import ChildComponent from \'./ChildComponent.vue\';\n' +
    '\n' +
    'export default {\n' +
    '  components: {\n' +
    '    ChildComponent\n' +
    '  },\n' +
    '  data() {\n' +
    '    return {\n' +
    '      parentMessage: \'Hello from parent\'\n' +
    '    };\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '```vue\n' +
    '<!-- ChildComponent.vue -->\n' +
    '<template>\n' +
    '  <div>{{ message }}</div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  props: [\'message\']\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '### État\n' +
    '- **Utilisation de `data` pour définir l\'état local d\'un composant.**\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <div>\n' +
    '    <p>{{ count }}</p>\n' +
    '    <button @click="increment">Increment</button>\n' +
    '  </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  data() {\n' +
    '    return {\n' +
    '      count: 0\n' +
    '    };\n' +
    '  },\n' +
    '  methods: {\n' +
    '    increment() {\n' +
    '      this.count++;\n' +
    '    }\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '## Computed et Watchers\n' +
    '\n' +
    '### Computed Properties\n' +
    '- **Définition** : les propriétés calculées sont des données dérivées qui sont mises en cache en fonction des dépendances.\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <div>\n' +
    '    <p>Original: {{ message }}</p>\n' +
    '    <p>Reversed: {{ reversedMessage }}</p>\n' +
    '  </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  data() {\n' +
    '    return {\n' +
    '      message: \'Hello\'\n' +
    '    };\n' +
    '  },\n' +
    '  computed: {\n' +
    '    reversedMessage() {\n' +
    '      return this.message.split(\'\').reverse().join(\'\');\n' +
    '    }\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '### Watchers\n' +
    '- **Définition** : les watchers surveillent les changements dans les données et exécutent des actions en réponse.\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '  <input v-model="query" placeholder="Type something..." />\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  data() {\n' +
    '    return {\n' +
    '      query: \'\'\n' +
    '    };\n' +
    '  },\n' +
    '  watch: {\n' +
    '    query(newValue, oldValue) {\n' +
    '      console.log(`Query changed from ${oldValue} to ${newValue}`);\n' +
    '    }\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '## Vue Router\n' +
    '\n' +
    '### Utilisation de Vue Router\n' +
    '- **Installation et configuration** :\n' +
    '\n' +
    '```bash\n' +
    'npm install vue-router\n' +
    '```\n' +
    '\n' +
    '- **Définir les routes** :\n' +
    '\n' +
    '```javascript\n' +
    'import Vue from \'vue\';\n' +
    'import Router from \'vue-router\';\n' +
    'import Home from \'./components/Home.vue\';\n' +
    'import About from \'./components/About.vue\';\n' +
    '\n' +
    'Vue.use(Router);\n' +
    '\n' +
    'export default new Router({\n' +
    '  routes: [\n' +
    '    { path: \'/\', component: Home },\n' +
    '    { path: \'/about\', component: About }\n' +
    '  ]\n' +
    '});\n' +
    '```\n' +
    '\n' +
    '```vue\n' +
    '<!-- App.vue -->\n' +
    '<template>\n' +
    '  <div id="app">\n' +
    '    <router-link to="/">Home</router-link>\n' +
    '    <router-link to="/about">About</router-link>\n' +
    '    <router-view></router-view>\n' +
    '  </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'export default {\n' +
    '  name: \'App\'\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '## Vuex\n' +
    '\n' +
    '### Utilisation de Vuex\n' +
    '- **Installation et configuration de Vuex pour la gestion d\'état global** :\n' +
    '\n' +
    '```bash\n' +
    'npm install vuex\n' +
    '```\n' +
    '\n' +
    '- **Configurer Vuex** :\n' +
    '\n' +
    '```javascript\n' +
    'import Vue from \'vue\';\n' +
    'import Vuex from \'vuex\';\n' +
    '\n' +
    'Vue.use(Vuex);\n' +
    '\n' +
    'export default new Vuex.Store({\n' +
    '  state: {\n' +
    '    count: 0\n' +
    '  },\n' +
    '  mutations: {\n' +
    '    increment(state) {\n' +
    '      state.count++;\n' +
    '    }\n' +
    '  },\n' +
    '  actions: {\n' +
    '    increment({ commit }) {\n' +
    '      commit(\'increment\');\n' +
    '    }\n' +
    '  }\n' +
    '});\n' +
    '```\n' +
    '\n' +
    '```vue\n' +
    '<!-- Exemple de composant utilisant Vuex -->\n' +
    '<template>\n' +
    '  <div>\n' +
    '    <p>Count: {{ count }}</p>\n' +
    '    <button @click="increment">Increment</button>\n' +
    '  </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    'import { mapState, mapActions } from \'vuex\';\n' +
    '\n' +
    'export default {\n' +
    '  computed: {\n' +
    '    ...mapState([\'count\'])\n' +
    '  },\n' +
    '  methods: {\n' +
    '    ...mapActions([\'increment\'])\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Outils Complémentaires\n' +
    '\n' +
    '- **Vuetify** : framework de composants UI pour Vue.js\n' +
    '- **Axios** : requêtes HTTP\n' +
    '- **Vue Router** : gestion des routes\n' +
    '- **Vuex** : gestion de l\'état global\n' +
    '- **Vuelidate** : validation des formulaires\n' +
    '\n' +
    '```javascript\n' +
    'import axios from \'axios\';\n' +
    'import Vue from \'vue\';\n' +
    '\n' +
    'new Vue({\n' +
    '  el: \'#app\',\n' +
    '  data() {\n' +
    '    return {\n' +
    '      info: null\n' +
    '    };\n' +
    '  },\n' +
    '  mounted() {\n' +
    '    axios.get(\'https://api.example.com/data\')\n' +
    '      .then(response => {\n' +
    '        this.info = response.data;\n' +
    '      })\n' +
    '      .catch(error => {\n' +
    '        console.error(\'Error fetching data:\', error);\n' +
    '      });\n' +
    '  }\n' +
    '});\n' +
    '```',
  angular:
    '# Résumé Complet d\'Angular\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Introduction à Angular\n' +
    '- **Angular** est un framework JavaScript (ou TypeScript) pour la création d\'applications web dynamiques et évolutives.\n' +
    '- Développé et maintenu par Google, Angular est conçu pour construire des applications monopage (SPA) complexes.\n' +
    '\n' +
    '## Configuration de l\'Environnement\n' +
    '\n' +
    '### Création d\'un Projet Angular\n' +
    '- **Utilisation de Angular CLI** : un outil de ligne de commande pour créer, développer et gérer des applications Angular.\n' +
    '\n' +
    '```bash\n' +
    'npm install -g @angular/cli\n' +
    'ng new my-app\n' +
    'cd my-app\n' +
    'ng serve\n' +
    '```\n' +
    '\n' +
    '## Composants\n' +
    '\n' +
    '### Composants Angular\n' +
    '- **Définition** : les composants sont des blocs de construction réutilisables pour les UI en Angular.\n' +
    '- **Création d\'un composant** :\n' +
    '\n' +
    '```bash\n' +
    'ng generate component my-component\n' +
    '```\n' +
    '\n' +
    '- **Syntaxe d\'un composant** :\n' +
    '\n' +
    '```typescript\n' +
    '// my-component.component.ts\n' +
    'import { Component } from \'@angular/core\';\n' +
    '\n' +
    '@Component({\n' +
    '  selector: \'app-my-component\',\n' +
    '  templateUrl: \'./my-component.component.html\',\n' +
    '  styleUrls: [\'./my-component.component.css\']\n' +
    '})\n' +
    'export class MyComponent {\n' +
    '  name: string = \'Alice\';\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '```html\n' +
    '<!-- my-component.component.html -->\n' +
    '<h1>Hello, {{ name }}!</h1>\n' +
    '```\n' +
    '\n' +
    '## Directives\n' +
    '\n' +
    '### Directives Structurelles et d\'Attribut\n' +
    '- **Directives Structurelles** : changent la structure du DOM (e.g., `*ngIf`, `*ngFor`).\n' +
    '\n' +
    '```html\n' +
    '<!-- *ngIf -->\n' +
    '<div *ngIf='isVisible'>This is visible</div>\n' +
    '\n' +
    '<!-- *ngFor -->\n' +
    '<ul>\n' +
    '  <li *ngFor='let item of items'>{{ item.name }}</li>\n' +
      '</ul>\n' +
    '```\n' +
    '\n' +
    '- **Directives d\'Attribut** : modifient l\'apparence ou le comportement des éléments (e.g., `[ngClass]`, `[ngStyle]`).\n' +
    '\n' +
    '```html\n' +
    '<!-- [ngClass] -->\n' +
    '<div [ngClass]="{ \'active\': isActive }">Styled div</div>\n' +
    '\n' +
    '<!-- [ngStyle] -->\n' +
    '<div [ngStyle]="{ \'color\': color }">Styled div</div>\n' +
    '```\n' +
    '\n' +
    '## Services et Injection de Dépendances\n' +
    '\n' +
    '### Création et Utilisation de Services\n' +
    '- **Définition** : les services sont utilisés pour partager des données et des logiques entre les composants.\n' +
    '\n' +
    '```typescript\n' +
    '// data.service.ts\n' +
    'import { Injectable } from \'@angular/core\';\n' +
    '\n' +
    '@Injectable({\n' +
    '  providedIn: \'root\'\n' +
    '})\n' +
    'export class DataService {\n' +
    '  private data: string[] = [\'Item 1\', \'Item 2\'];\n' +
    '\n' +
    '  getData(): string[] {\n' +
    '    return this.data;\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '- **Injection de Service dans un Composant** :\n' +
    '\n' +
    '```typescript\n' +
    '// app.component.ts\n' +
    'import { Component, OnInit } from \'@angular/core\';\n' +
    'import { DataService } from \'./data.service\';\n' +
    '\n' +
    '@Component({\n' +
    '  selector: \'app-root\',\n' +
    '  templateUrl: \'./app.component.html\',\n' +
    '  styleUrls: [\'./app.component.css\']\n' +
    '})\n' +
    'export class AppComponent implements OnInit {\n' +
    '  data: string[];\n' +
    '\n' +
    '  constructor(private dataService: DataService) {}\n' +
    '\n' +
    '  ngOnInit() {\n' +
    '    this.data = this.dataService.getData();\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Modules\n' +
    '\n' +
    '### Utilisation des Modules\n' +
    '- **Définition** : les modules regroupent des composants, des directives, des pipes, et des services liés.\n' +
    '\n' +
    '```typescript\n' +
    '// app.module.ts\n' +
    'import { NgModule } from \'@angular/core\';\n' +
    'import { BrowserModule } from \'@angular/platform-browser\';\n' +
    'import { AppComponent } from \'./app.component\';\n' +
    'import { MyComponent } from \'./my-component/my-component.component\';\n' +
    '\n' +
    '@NgModule({\n' +
    '  declarations: [\n' +
    '    AppComponent,\n' +
    '    MyComponent\n' +
    '  ],\n' +
    '  imports: [\n' +
    '    BrowserModule\n' +
    '  ],\n' +
    '  providers: [],\n' +
    '  bootstrap: [AppComponent]\n' +
    '})\n' +
    'export class AppModule { }\n' +
    '```\n' +
    '\n' +
    '## Routage\n' +
    '\n' +
    '### Utilisation du Routage\n' +
    '- **Définir les Routes** :\n' +
    '\n' +
    '```typescript\n' +
    '// app-routing.module.ts\n' +
    'import { NgModule } from \'@angular/core\';\n' +
    'import { RouterModule, Routes } from \'@angular/router\';\n' +
    'import { HomeComponent } from \'./home/home.component\';\n' +
    'import { AboutComponent } from \'./about/about.component\';\n' +
    '\n' +
    'const routes: Routes = [\n' +
    '  { path: \'\', component: HomeComponent },\n' +
    '  { path: \'about\', component: AboutComponent }\n' +
    '];\n' +
    '\n' +
    '@NgModule({\n' +
    '  imports: [RouterModule.forRoot(routes)],\n' +
    '  exports: [RouterModule]\n' +
    '})\n' +
    'export class AppRoutingModule { }\n' +
    '```\n' +
    '\n' +
    '- **Utilisation des Liens de Navigation** :\n' +
    '\n' +
    '```html\n' +
    '<!-- app.component.html -->\n' +
    '<nav>\n' +
    '  <a routerLink=' / '>Home</a>\n' +
    '  <a routerLink=' / about'>About</a>\n' +
      '</nav>\n' +
    '<router-outlet></router-outlet>\n' +
    '```\n' +
    '\n' +
    '## Pipes\n' +
    '\n' +
    '### Utilisation des Pipes\n' +
    '- **Définition** : les pipes transforment les données pour l\'affichage dans les templates.\n' +
    '\n' +
    '```html\n' +
    '<!-- Exemple d\'utilisation de pipes -->\n' +
    '<p>{{ currentDate | date:\'short\' }}</p>\n' +
    '<p>{{ message | uppercase }}</p>\n' +
    '```\n' +
    '\n' +
    '## Formulaires\n' +
    '\n' +
    '### Formulaires Réactifs et Basés sur les Templates\n' +
    '- **Formulaires Réactifs** : offrent une plus grande flexibilité pour la validation et la gestion des formulaires.\n' +
    '\n' +
    '```typescript\n' +
    '// app.component.ts\n' +
    'import { Component } from \'@angular/core\';\n' +
    'import { FormBuilder, FormGroup, Validators } from \'@angular/forms\';\n' +
    '\n' +
    '@Component({\n' +
    '  selector: \'app-root\',\n' +
    '  templateUrl: \'./app.component.html\'\n' +
    '})\n' +
    'export class AppComponent {\n' +
    '  form: FormGroup;\n' +
    '\n' +
    '  constructor(private fb: FormBuilder) {\n' +
    '    this.form = this.fb.group({\n' +
    '      name: [\'\', Validators.required],\n' +
    '      email: [\'\', [Validators.required, Validators.email]]\n' +
    '    });\n' +
    '  }\n' +
    '\n' +
    '  onSubmit() {\n' +
    '    console.log(this.form.value);\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '```html\n' +
    '<!-- app.component.html -->\n' +
    '<form [formGroup]='form' (ngSubmit)='onSubmit()'>\n' +
    '  <label for='name'>Name</label>\n' +
    '  <input id='name' formControlName='name'>\n' +
    '  <label for='email'>Email</label>\n' +
    '  <input id='email' formControlName='email'>\n' +
    '  <button type='submit'>Submit</button>\n' +
    '</form>\n' +
    '```\n' +
    '\n' +
    '### Formulaires Basés sur les Templates\n' +
    '\n' +
    '```html\n' +
    '<!-- app.component.html -->\n' +
    '<form #form='ngForm' (ngSubmit)='onSubmit(form)'>\n' +
    '  <label for='name'>Name</label>\n' +
    '  <input id='name' name='name' ngModel required>\n' +
    '  <label for='email'>Email</label>\n' +
    '  <input id='email' name='email' ngModel required email>\n' +
    '  <button type='submit'>Submit</button>\n' +
    '</form>\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Outils Complémentaires\n' +
    '\n' +
    '- **Angular Material** : composants UI pour Angular\n' +
    '- **RxJS** : gestion des événements asynchrones\n' +
    '- **NgRx** : gestion d\'état global avec Redux\n' +
    '- **HttpClient** : requêtes HTTP\n' +
    '\n' +
    '```typescript\n' +
    '// Exemple d\'utilisation de HttpClient\n' +
    'import { HttpClient } from \'@angular/common/http\';\n' +
    'import { Component, OnInit } from \'@angular/core\';\n' +
    '\n' +
    '@Component({\n' +
    '  selector: \'app-root\',\n' +
    '  templateUrl: \'./app.component.html\'\n' +
    '})\n' +
    'export class AppComponent implements OnInit {\n' +
    '  data: any;\n' +
    '\n' +
    '  constructor(private http: HttpClient) {}\n' +
    '\n' +
    '  ngOnInit() {\n' +
    '    this.http.get(\'https://api.example.com/data\')\n' +
    '      .subscribe(response => {\n' +
    '        this.data = response;\n' +
    '      });\n' +
    '  }\n' +
    '}\n' +
    '```',
  nestjs: '\n' +
    '# Résumé Complet de NestJS\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Introduction à NestJS\n' +
    '- **NestJS** est un framework Node.js pour construire des applications backend évolutives et maintenables.\n' +
    '- Basé sur TypeScript, il utilise des concepts de la programmation orientée objet, fonctionnelle et réactive.\n' +
    '- **Principes** : Modulaire, basé sur les décorateurs, et inspiré par les frameworks comme Angular.\n' +
    '\n' +
    '## Configuration de l\'Environnement\n' +
    '\n' +
    '### Création d\'un Projet NestJS\n' +
    '- **Utilisation de Nest CLI** : un outil de ligne de commande pour générer et gérer des projets NestJS.\n' +
    '\n' +
    '```bash\n' +
    'npm install -g @nestjs/cli\n' +
    'nest new my-project\n' +
    'cd my-project\n' +
    'npm run start\n' +
    '```\n' +
    '\n' +
    '## Modules\n' +
    '\n' +
    '### Définition des Modules\n' +
    '- **Définition** : les modules organisent le code en unités fonctionnelles.\n' +
    '- **Création d\'un module** :\n' +
    '\n' +
    '```typescript\n' +
    '// app.module.ts\n' +
    'import { Module } from \'@nestjs/common\';\n' +
    'import { AppController } from \'./app.controller\';\n' +
    'import { AppService } from \'./app.service\';\n' +
    'import { UsersModule } from \'./users/users.module\';\n' +
    '\n' +
    '@Module({\n' +
    '  imports: [UsersModule],\n' +
    '  controllers: [AppController],\n' +
    '  providers: [AppService],\n' +
    '})\n' +
    'export class AppModule {}\n' +
    '```\n' +
    '\n' +
    '## Contrôleurs\n' +
    '\n' +
    '### Création et Utilisation des Contrôleurs\n' +
    '- **Définition** : les contrôleurs gèrent les requêtes HTTP et renvoient les réponses.\n' +
    '- **Création d\'un contrôleur** :\n' +
    '\n' +
    '```typescript\n' +
    '// users.controller.ts\n' +
    'import { Controller, Get } from \'@nestjs/common\';\n' +
    'import { UsersService } from \'./users.service\';\n' +
    '\n' +
    '@Controller(\'users\')\n' +
    'export class UsersController {\n' +
    '  constructor(private readonly usersService: UsersService) {}\n' +
    '\n' +
    '  @Get()\n' +
    '  findAll() {\n' +
    '    return this.usersService.findAll();\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Services\n' +
    '\n' +
    '### Création et Utilisation des Services\n' +
    '- **Définition** : les services contiennent la logique métier et l\'accès aux données.\n' +
    '- **Création d\'un service** :\n' +
    '\n' +
    '```typescript\n' +
    '// users.service.ts\n' +
    'import { Injectable } from \'@nestjs/common\';\n' +
    '\n' +
    '@Injectable()\n' +
    'export class UsersService {\n' +
    '  private readonly users = [\'Alice\', \'Bob\'];\n' +
    '\n' +
    '  findAll(): string[] {\n' +
    '    return this.users;\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Dépendances et Injection de Dépendances\n' +
    '\n' +
    '### Utilisation de l\'Injection de Dépendances\n' +
    '- **Définition** : l\'injection de dépendances permet de fournir des instances d\'objets aux classes.\n' +
    '- **Exemple d\'injection** dans un contrôleur :\n' +
    '\n' +
    '```typescript\n' +
    '// app.controller.ts\n' +
    'import { Controller, Get } from \'@nestjs/common\';\n' +
    'import { AppService } from \'./app.service\';\n' +
    '\n' +
    '@Controller()\n' +
    'export class AppController {\n' +
    '  constructor(private readonly appService: AppService) {}\n' +
    '\n' +
    '  @Get()\n' +
    '  getHello(): string {\n' +
    '    return this.appService.getHello();\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Middleware\n' +
    '\n' +
    '### Utilisation des Middleware\n' +
    '- **Définition** : les middleware traitent les requêtes avant qu\'elles n\'atteignent les contrôleurs.\n' +
    '- **Création d\'un middleware** :\n' +
    '\n' +
    '```typescript\n' +
    '// logger.middleware.ts\n' +
    'import { Injectable, NestMiddleware } from \'@nestjs/common\';\n' +
    'import { Request, Response, NextFunction } from \'express\';\n' +
    '\n' +
    '@Injectable()\n' +
    'export class LoggerMiddleware implements NestMiddleware {\n' +
    '  use(req: Request, res: Response, next: NextFunction) {\n' +
    '    console.log(\'Request...\', req.method, req.path);\n' +
    '    next();\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '- **Application du middleware** :\n' +
    '\n' +
    '```typescript\n' +
    '// app.module.ts\n' +
    'import { MiddlewareConsumer, Module, RequestMethod } from \'@nestjs/common\';\n' +
    'import { LoggerMiddleware } from \'./logger.middleware\';\n' +
    '\n' +
    '@Module({\n' +
    '  // imports, controllers, providers\n' +
    '})\n' +
    'export class AppModule {\n' +
    '  configure(consumer: MiddlewareConsumer) {\n' +
    '    consumer\n' +
    '      .apply(LoggerMiddleware)\n' +
    '      .forRoutes({ path: \'*\', method: RequestMethod.ALL });\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Guards\n' +
    '\n' +
    '### Utilisation des Guards\n' +
    '- **Définition** : les guards déterminent si une requête peut être traitée par le routeur.\n' +
    '- **Création d\'un guard** :\n' +
    '\n' +
    '```typescript\n' +
    '// auth.guard.ts\n' +
    'import { Injectable, CanActivate, ExecutionContext } from \'@nestjs/common\';\n' +
    '\n' +
    '@Injectable()\n' +
    'export class AuthGuard implements CanActivate {\n' +
    '  canActivate(\n' +
    '    context: ExecutionContext,\n' +
    '  ): boolean {\n' +
    '    const request = context.switchToHttp().getRequest();\n' +
    '    return request.headers.authorization === \'valid-token\';\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '- **Application du guard** :\n' +
    '\n' +
    '```typescript\n' +
    '// users.controller.ts\n' +
    'import { UseGuards, Controller, Get } from \'@nestjs/common\';\n' +
    'import { AuthGuard } from \'./auth.guard\';\n' +
    '\n' +
    '@Controller(\'users\')\n' +
    '@UseGuards(AuthGuard)\n' +
    'export class UsersController {\n' +
    '  // methods\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Pipes\n' +
    '\n' +
    '### Utilisation des Pipes\n' +
    '- **Définition** : les pipes transforment et valident les données des requêtes.\n' +
    '- **Création d\'un pipe** :\n' +
    '\n' +
    '```typescript\n' +
    '// parse-int.pipe.ts\n' +
    'import { PipeTransform, Injectable, BadRequestException } from \'@nestjs/common\';\n' +
    '\n' +
    '@Injectable()\n' +
    'export class ParseIntPipe implements PipeTransform {\n' +
    '  transform(value: string): number {\n' +
    '    const val = parseInt(value, 10);\n' +
    '    if (isNaN(val)) {\n' +
    '      throw new BadRequestException(\'Validation failed\');\n' +
    '    }\n' +
    '    return val;\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '- **Application du pipe** :\n' +
    '\n' +
    '```typescript\n' +
    '// users.controller.ts\n' +
    'import { ParseIntPipe } from \'./parse-int.pipe\';\n' +
    '\n' +
    '@Controller(\'users\')\n' +
    'export class UsersController {\n' +
    '  @Get(\':id\')\n' +
    '  findOne(@Param(\'id\', ParseIntPipe) id: number) {\n' +
    '    return `User with ID ${id}`;\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Interceptors\n' +
    '\n' +
    '### Utilisation des Interceptors\n' +
    '- **Définition** : les interceptors permettent de transformer les réponses ou d\'exécuter du code avant/ après l\'exécution de la requête.\n' +
    '- **Création d\'un interceptor** :\n' +
    '\n' +
    '```typescript\n' +
    '// logging.interceptor.ts\n' +
    'import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from \'@nestjs/common\';\n' +
    'import { Observable } from \'rxjs\';\n' +
    'import { tap } from \'rxjs/operators\';\n' +
    '\n' +
    '@Injectable()\n' +
    'export class LoggingInterceptor implements NestInterceptor {\n' +
    '  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n' +
    '    const now = Date.now();\n' +
    '    return next\n' +
    '      .handle()\n' +
    '      .pipe(tap(() => console.log(`Execution time: ${Date.now() - now}ms`)));\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '- **Application de l\'interceptor** :\n' +
    '\n' +
    '```typescript\n' +
    '// app.module.ts\n' +
    'import { APP_INTERCEPTOR } from \'@nestjs/core\';\n' +
    'import { LoggingInterceptor } from \'./logging.interceptor\';\n' +
    '\n' +
    '@Module({\n' +
    '  providers: [\n' +
    '    {\n' +
    '      provide: APP_INTERCEPTOR,\n' +
    '      useClass: LoggingInterceptor,\n' +
    '    },\n' +
    '  ],\n' +
    '})\n' +
    'export class AppModule {}\n' +
    '```\n' +
    '\n' +
    '## Exception Handling\n' +
    '\n' +
    '### Gestion des Exceptions\n' +
    '- **Définition** : les exceptions permettent de gérer les erreurs et d\'envoyer des réponses appropriées.\n' +
    '- **Exemple de filtre d\'exceptions** :\n' +
    '\n' +
    '```typescript\n' +
    '// http-exception.filter.ts\n' +
    'import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from \'@nestjs/common\';\n' +
    '\n' +
    '@Catch(HttpException)\n' +
    'export class HttpExceptionFilter implements ExceptionFilter {\n' +
    '  catch(exception: HttpException, host: ArgumentsHost) {\n' +
    '    const ctx = host.switchToHttp();\n' +
    '    const response = ctx.getResponse();\n' +
    '    const status = exception.getStatus();\n' +
    '    const message = exception.message;\n' +
    '\n' +
    '    response\n' +
    '      .status(status)\n' +
    '      .json({\n' +
    '        statusCode: status,\n' +
    '        message,\n' +
    '      });\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '- **Application du filtre d\'exceptions** :\n' +
    '\n' +
    '```typescript\n' +
    '// main.ts\n' +
    'import { NestFactory } from \'@nestjs/core\';\n' +
    'import { AppModule } from \'./app.module\';\n' +
    'import { HttpExceptionFilter } from \'./http-exception.filter\';\n' +
    '\n' +
    'async function bootstrap() {\n' +
    '  const app = await NestFactory.create(AppModule);\n' +
    '  app.useGlobalFilters(new HttpExceptionFilter());\n' +
    '  await app.listen(3000);\n' +
    '}\n' +
    'bootstrap();\n' +
    '```\n' +
    '\n' +
    '## Configuration et Environnement\n' +
    '\n' +
    '### Gestion des Configurations\n' +
    '- **Utilisation de `@nestjs/config`** pour gérer les configurations de l\'application.\n' +
    '\n' +
    '```bash\n' +
    'npm install @nestjs/config\n' +
    '```\n' +
    '\n' +
    '- **Configuration de l\'application** :\n' +
    '\n' +
    '```typescript\n' +
    '// app.module.ts\n' +
    'import { Module } from \'@nestjs/common\';\n' +
    'import { ConfigModule } from \'@nestjs/config\';\n' +
    '\n' +
    '@Module({\n' +
    '  imports: [\n' +
    '    ConfigModule.forRoot({\n' +
    '      envFilePath: \'.env\',\n' +
    '    }),\n' +
    '  ],\n' +
    '})\n' +
    'export class AppModule {}\n' +
    '```\n' +
    '\n' +
    '```typescript\n' +
    '// example.service.ts\n' +
    'import { Injectable } from \'@nestjs/common\';\n' +
    'import { ConfigService } from \'@nestjs/config\';\n' +
    '\n' +
    '@Injectable()\n' +
    'export class ExampleService {\n' +
    '  constructor(private configService: ConfigService) {}\n' +
    '\n' +
    '  getDatabaseHost() {\n' +
    '    return this.configService.get(\'DATABASE_HOST\');\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Outils Complémentaires\n' +
    '\n' +
    '- **TypeORM** : ORM pour la gestion des bases de données\n' +
    '- **Mongoose** : ODM pour Mongo\n' +
    '\n' +
    'DB\n' +
    '- **Swagger** : documentation d\'API\n' +
    '- **Bull** : gestion des files d\'attente et des tâches en arrière-plan\n' +
    '\n' +
    '```typescript\n' +
    '// example.module.ts\n' +
    'import { Module } from \'@nestjs/common\';\n' +
    'import { TypeOrmModule } from \'@nestjs/typeorm\';\n' +
    'import { ExampleService } from \'./example.service\';\n' +
    'import { ExampleEntity } from \'./example.entity\';\n' +
    '\n' +
    '@Module({\n' +
    '  imports: [TypeOrmModule.forFeature([ExampleEntity])],\n' +
    '  providers: [ExampleService],\n' +
    '})\n' +
    'export class ExampleModule {}\n' +
    '```',
  django: '# Résumé Complet de Django\n' +
    '\n' +
    '## Concepts de Base\n' +
    '\n' +
    '### Introduction à Django\n' +
    '- **Django** est un framework web Python de haut niveau qui facilite le développement rapide de sites web sécurisés et maintenables.\n' +
    '- **Philosophie** : « Don\'t repeat yourself » (DRY) et « The web framework for perfectionists with deadlines ».\n' +
    '- **Principes** : Modulaire, basé sur le modèle-vue-contrôleur (MVC) avec une approche ORM pour la gestion des bases de données.\n' +
    '\n' +
    '## Configuration de l\'Environnement\n' +
    '\n' +
    '### Création d\'un Projet Django\n' +
    '- **Utilisation de Django CLI** pour créer un projet et une application.\n' +
    '\n' +
    '```bash\n' +
    'pip install django\n' +
    'django-admin startproject myproject\n' +
    'cd myproject\n' +
    'python manage.py startapp myapp\n' +
    'python manage.py runserver\n' +
    '```\n' +
    '\n' +
    '## Structure du Projet\n' +
    '\n' +
    '### Structure de Base d\'un Projet Django\n' +
    '- **Répertoire du Projet** : contient les fichiers de configuration du projet.\n' +
    '  - `manage.py` : script de gestion du projet.\n' +
    '  - `myproject/` : répertoire du projet Django.\n' +
    '    - `__init__.py` : indique que ce répertoire est un package Python.\n' +
    '    - `settings.py` : paramètres de configuration du projet.\n' +
    '    - `urls.py` : définition des URL du projet.\n' +
    '    - `wsgi.py` : point d\'entrée WSGI pour les serveurs web.\n' +
    '\n' +
    '### Structure d\'une Application Django\n' +
    '- **Répertoire de l\'application** : contient les fichiers spécifiques à une fonctionnalité de l\'application.\n' +
    '  - `migrations/` : dossier pour les fichiers de migration de base de données.\n' +
    '  - `__init__.py` : indique que ce répertoire est un package Python.\n' +
    '  - `admin.py` : configuration de l\'interface d\'administration.\n' +
    '  - `apps.py` : configuration de l\'application.\n' +
    '  - `models.py` : définition des modèles de données.\n' +
    '  - `tests.py` : tests de l\'application.\n' +
    '  - `views.py` : définition des vues.\n' +
    '\n' +
    '## Modèles\n' +
    '\n' +
    '### Définition et Utilisation des Modèles\n' +
    '- **Définition** : les modèles représentent les tables de la base de données.\n' +
    '\n' +
    '```python\n' +
    '# models.py\n' +
    'from django.db import models\n' +
    '\n' +
    'class Author(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    birth_date = models.DateField()\n' +
    '\n' +
    '    def __str__(self):\n' +
    '        return self.name\n' +
    '```\n' +
    '\n' +
    '- **Migrations** : générer et appliquer des modifications de la base de données.\n' +
    '\n' +
    '```bash\n' +
    'python manage.py makemigrations\n' +
    'python manage.py migrate\n' +
    '```\n' +
    '\n' +
    '## Vues\n' +
    '\n' +
    '### Création et Utilisation des Vues\n' +
    '- **Définition** : les vues traitent les requêtes HTTP et renvoient des réponses.\n' +
    '\n' +
    '```python\n' +
    '# views.py\n' +
    'from django.shortcuts import render\n' +
    'from .models import Author\n' +
    '\n' +
    'def author_list(request):\n' +
    '    authors = Author.objects.all()\n' +
    '    return render(request, \'authors/author_list.html\', {\'authors\': authors})\n' +
    '```\n' +
    '\n' +
    '- **URLs** : mapper les vues aux URL.\n' +
    '\n' +
    '```python\n' +
    '# urls.py\n' +
    'from django.urls import path\n' +
    'from . import views\n' +
    '\n' +
    'urlpatterns = [\n' +
    '    path(\'authors/\', views.author_list, name=\'author_list\'),\n' +
    ']\n' +
    '```\n' +
    '\n' +
    '## Templates\n' +
    '\n' +
    '### Utilisation des Templates\n' +
    '- **Définition** : les templates sont des fichiers HTML avec des balises Django pour la logique.\n' +
    '\n' +
    '```html\n' +
    '<!-- author_list.html -->\n' +
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <title>Author List</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <h1>Authors</h1>\n' +
    '    <ul>\n' +
    '        {% for author in authors %}\n' +
    '            <li>{{ author.name }} ({{ author.birth_date }})</li>\n' +
    '        {% endfor %}\n' +
    '    </ul>\n' +
    '</body>\n' +
    '</html>\n' +
    '```\n' +
    '\n' +
    '## Formulaires\n' +
    '\n' +
    '### Création et Utilisation des Formulaires\n' +
    '- **Définition** : les formulaires permettent de valider et de traiter les données envoyées par les utilisateurs.\n' +
    '\n' +
    '```python\n' +
    '# forms.py\n' +
    'from django import forms\n' +
    'from .models import Author\n' +
    '\n' +
    'class AuthorForm(forms.ModelForm):\n' +
    '    class Meta:\n' +
    '        model = Author\n' +
    '        fields = [\'name\', \'birth_date\']\n' +
    '```\n' +
    '\n' +
    '- **Utilisation du formulaire dans une vue** :\n' +
    '\n' +
    '```python\n' +
    '# views.py\n' +
    'from django.shortcuts import render, redirect\n' +
    'from .forms import AuthorForm\n' +
    '\n' +
    'def add_author(request):\n' +
    '    if request.method == \'POST\':\n' +
    '        form = AuthorForm(request.POST)\n' +
    '        if form.is_valid():\n' +
    '            form.save()\n' +
    '            return redirect(\'author_list\')\n' +
    '    else:\n' +
    '        form = AuthorForm()\n' +
    '    return render(request, \'authors/add_author.html\', {\'form\': form})\n' +
    '```\n' +
    '\n' +
    '```html\n' +
    '<!-- add_author.html -->\n' +
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <title>Add Author</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <h1>Add Author</h1>\n' +
    '    <form method="post">\n' +
    '        {% csrf_token %}\n' +
    '        {{ form.as_p }}\n' +
    '        <button type="submit">Save</button>\n' +
    '    </form>\n' +
    '</body>\n' +
    '</html>\n' +
    '```\n' +
    '\n' +
    '## Administration\n' +
    '\n' +
    '### Configuration de l\'Interface d\'Administration\n' +
    '- **Définition** : l\'interface d\'administration permet de gérer les modèles de données via une interface web.\n' +
    '\n' +
    '```python\n' +
    '# admin.py\n' +
    'from django.contrib import admin\n' +
    'from .models import Author\n' +
    '\n' +
    '@admin.register(Author)\n' +
    'class AuthorAdmin(admin.ModelAdmin):\n' +
    '    list_display = (\'name\', \'birth_date\')\n' +
    '```\n' +
    '\n' +
    '## Middleware\n' +
    '\n' +
    '### Utilisation des Middleware\n' +
    '- **Définition** : les middleware sont des composants qui traitent les requêtes et les réponses avant qu\'elles ne soient traitées par les vues.\n' +
    '\n' +
    '- **Configuration** :\n' +
    '\n' +
    '```python\n' +
    '# settings.py\n' +
    'MIDDLEWARE = [\n' +
    '    \'django.middleware.security.SecurityMiddleware\',\n' +
    '    \'django.contrib.sessions.middleware.SessionMiddleware\',\n' +
    '    \'django.middleware.common.CommonMiddleware\',\n' +
    '    \'django.middleware.csrf.CsrfViewMiddleware\',\n' +
    '    \'django.contrib.auth.middleware.AuthenticationMiddleware\',\n' +
    '    \'django.contrib.messages.middleware.MessageMiddleware\',\n' +
    '    \'django.middleware.clickjacking.XFrameOptionsMiddleware\',\n' +
    ']\n' +
    '```\n' +
    '\n' +
    '## Gestion des Erreurs\n' +
    '\n' +
    '### Gestion des Erreurs\n' +
    '- **Définition** : gérer les erreurs et les exceptions pour fournir des réponses appropriées.\n' +
    '\n' +
    '- **Configuration** des pages d\'erreur personnalisées :\n' +
    '\n' +
    '```html\n' +
    '<!-- 404.html -->\n' +
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <title>Page Not Found</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <h1>404 - Page Not Found</h1>\n' +
    '</body>\n' +
    '</html>\n' +
    '```\n' +
    '\n' +
    '```python\n' +
    '# settings.py\n' +
    'DEBUG = False\n' +
    '```\n' +
    '\n' +
    '## Bibliothèques et Outils Complémentaires\n' +
    '\n' +
    '- **Django REST Framework (DRF)** : pour créer des API RESTful\n' +
    '- **Celery** : pour la gestion des tâches asynchrones\n' +
    '- **Django Debug Toolbar** : pour le débogage et l\'analyse des performances\n' +
    '- **Django Allauth** : pour la gestion de l\'authentification\n' +
    '\n' +
    '```python\n' +
    '# settings.py\n' +
    'INSTALLED_APPS = [\n' +
    '    # ...\n' +
    '    \'rest_framework\',\n' +
    '    \'corsheaders\',\n' +
    ']\n' +
    '\n' +
    '# Exemple de configuration DRF\n' +
    'REST_FRAMEWORK = {\n' +
    '    \'DEFAULT_RENDERER_CLASSES\': (\n' +
    '        \'rest_framework.renderers.JSONRenderer\',\n' +
    '    ),\n' +
    '    \'DEFAULT_PARSER_CLASSES\': (\n' +
    '        \'rest_framework.parsers.JSONParser\',\n' +
    '    ),\n' +
    '}\n' +
    '```\n',
};
