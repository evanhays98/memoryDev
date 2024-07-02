# Résumé Complet de Python

## Concepts de Base

### Variables et Types de Données

- **Types de données de base :**
    - `int` : entier
    - `float` : nombre à virgule flottante
    - `str` : chaîne de caractères
    - `bool` : booléen (True/False)
    - `list` : liste
    - `tuple` : tuple (immuable)
    - `dict` : dictionnaire
    - `set` : ensemble

```python
x = 5          # int
y = 3.14       # float
name = "Alice" # str
flag = True    # bool
numbers = [1, 2, 3] # list
point = (1, 2) # tuple
data = {'a': 1, 'b': 2} # dict
unique = {1, 2, 3} # set
```

## Structures de Contrôle

### Conditionnelles

- Instructions conditionnelles : if, elif, else

```python
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")
```

### Boucles

- Boucle for : pour itérer sur des séquences
- Boucle while : tant que la condition est vraie

```python
for i in range(5):
    print(i)

while x > 0:
    print(x)
    x -= 1
```

## Fonctions

### Définir des Fonctions

- Création et appel de fonctions :

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!
```

## Fonctions Natives Utiles

- **Fonctions couramment utilisées :**
    - `len()` : obtenir la longueur d'un objet
    - `range()` : générer une séquence de nombres
    - `print()` : afficher des données
    - `type()` : obtenir le type d'une variable
    - `int()`, `float()`, `str()` : conversion de types
    - `input()` : lire l'entrée de l'utilisateur
    - `open()` : ouvrir des fichier

```python
lst = [1, 2, 3]
print(len(lst))  # Output: 3

for i in range(3):
    print(i)  # Output: 0 1 2

print(type(lst))  # Output: <class 'list'>

x = "123"
print(int(x) + 1)  # Output: 124

name = input("Enter your name: ")
print(f"Hello, {name}!")
```

## Manipulation des Collections

### Listes

- Création, accès et manipulation :

```python
numbers = [1, 2, 3, 4]
print(numbers[0])  # Output: 1
print(numbers[-1])  # Output: 4

numbers.append(5)  # Ajoute 5 à la fin
numbers.remove(2)  # Supprime la première occurrence de 2
numbers.pop()      # Supprime et retourne le dernier élément
numbers.sort()     # Trie la liste
```

### Dictionnaires

- Création, accès et manipulation :

```python
student = {'name': 'Alice', 'age': 25}
print(student['name'])  # Output: Alice

student['age'] = 26
student['gender'] = 'Female'
age = student.get('age', 0)  # Retourne 0 si 'age' n'existe pas
keys = student.keys()  # Retourne les clés
values = student.values()  # Retourne les valeurs
```

### Ensembles

- Création et opérations :

```
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)  # Union: {1, 2, 3, 4, 5}
print(a & b)  # Intersection: {3}
print(a - b)  # Différence: {1, 2}
```

## Gestion des Fichiers

### Lecture et Écriture de Fichiers

```
with open('file.txt', 'w') as f:
    f.write("Hello, world!")

with open('file.txt', 'r') as f:
    content = f.read()
    print(content)  # Output: Hello, world!
```

## Programmation Orientée Objet (POO)

### Classes et Objets

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

alice = Person("Alice", 25)
print(alice.greet())  # Output: Hello, my name is Alice and I am 25 years old.
```

### Héritage

```python
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

bob = Student("Bob", 20, "S12345")
print(bob.greet())  # Output: Hello, my name is Bob and I am 20 years old.
print(bob.student_id)  # Output: S12345
```

## Fonctions Lambda et Compréhensions

### Fonctions Lambda

```python
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5
```

### Compréhensions de Liste

```python
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Compréhensions de Dictionnaire

```python
square_dict = {x: x**2 for x in range(10)}
print(square_dict)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
```

## Modules et Paquets

### Importer des Modules

```python
import math
print(math.sqrt(16))  # Output: 4.0
```

### Créer et Importer des Modules Personnalisés

```python
# fichier mymodule.py
def greet(name):
    return f"Hello, {name}!"

# fichier principal
import mymodule
print(mymodule.greet("Alice"))  # Output: Hello, Alice!
```

## Gestion des Exceptions

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Erreur : Division par zéro!")
finally:
    print("Fin du bloc try")
```