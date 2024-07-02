# Résumé Complet de C#

## Concepts de Base

### Variables et Types de Données
- **Types de données de base :**
  - `int` : entier
  - `float` : nombre à virgule flottante
  - `double` : nombre à double précision
  - `char` : caractère
  - `bool` : booléen (true/false)
  - `string` : chaîne de caractères

```csharp
int x = 5;          // int
float y = 3.14f;    // float
double z = 3.14159; // double
char letter = 'A';  // char
bool flag = true;   // bool
string name = "Alice"; // string
```

### Structures de Contrôle

#### Conditionnelles
- **Instructions conditionnelles :** `if`, `else if`, `else`

```csharp
if (x > 0)
{
    Console.WriteLine("Positive");
}
else if (x == 0)
{
    Console.WriteLine("Zero");
}
else
{
    Console.WriteLine("Negative");
}
```

#### Boucles
- **Boucle `for`** : pour itérer sur des séquences
- **Boucle `while`** : tant que la condition est vraie
- **Boucle `do-while`** : exécute au moins une fois

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

int i = 5;
while (i > 0)
{
    Console.WriteLine(i);
    i--;
}

do
{
    Console.WriteLine(i);
    i++;
} while (i < 5);
```

## Fonctions

### Définir des Méthodes
- **Création et appel de méthodes :**

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(Greet("Alice")); // Output: Hello, Alice!
    }

    static string Greet(string name)
    {
        return "Hello, " + name + "!";
    }
}
```

## Fonctions Natives Utiles

- **Fonctions couramment utilisées :**
  - `Length` : obtenir la longueur d'une chaîne ou d'un tableau
  - `Parse()` : conversion de chaîne en nombre
  - `String.Format()` : formatage de chaînes
  - `Console.WriteLine()` : afficher des données
  - `typeof` : obtenir le type d'une variable

```csharp
string str = "123";
int num = int.Parse(str) + 1;
Console.WriteLine(num);  // Output: 124

string formatted = string.Format("Value: {0:F2}", 3.14159);
Console.WriteLine(formatted);  // Output: Value: 3.14
```

## Manipulation des Collections

### Tableaux
- **Création, accès et manipulation :**

```csharp
int[] numbers = {1, 2, 3, 4};
Console.WriteLine(numbers[0]);  // Output: 1
Console.WriteLine(numbers[numbers.Length - 1]);  // Output: 4

// Initialiser un tableau
int[] moreNumbers = new int[5];
moreNumbers[0] = 10;
moreNumbers[1] = 20;

// Parcourir un tableau
foreach (int num in moreNumbers)
{
    Console.WriteLine(num);
}
```

### Listes et Autres Collections
- **Utiliser `List<T>`, `Dictionary<TKey, TValue>`, etc. :**

```csharp
using System.Collections.Generic;

List<string> list = new List<string>();
list.Add("Alice");
list.Add("Bob");
Console.WriteLine(list[0]);  // Output: Alice

Dictionary<string, int> map = new Dictionary<string, int>();
map["Alice"] = 25;
map["Bob"] = 30;
Console.WriteLine(map["Alice"]);  // Output: 25
```

## Gestion des Fichiers

### Lecture et Écriture de Fichiers

```csharp
using System;
using System.IO;

class FileExample
{
    static void Main()
    {
        // Écriture dans un fichier
        File.WriteAllText("file.txt", "Hello, world!");

        // Lecture d'un fichier
        string content = File.ReadAllText("file.txt");
        Console.WriteLine(content);  // Output: Hello, world!
    }
}
```

## Programmation Orientée Objet (POO)

### Classes et Objets

```csharp
using System;

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public string Greet()
    {
        return $"Hello, my name is {Name} and I am {Age} years old.";
    }
}

class Program
{
    static void Main()
    {
        Person alice = new Person("Alice", 25);
        Console.WriteLine(alice.Greet());  // Output: Hello, my name is Alice and I am 25 years old.
    }
}
```

### Héritage

```csharp
using System;

class Student : Person
{
    public string StudentId { get; set; }

    public Student(string name, int age, string studentId) : base(name, age)
    {
        StudentId = studentId;
    }
}

class Program
{
    static void Main()
    {
        Student bob = new Student("Bob", 20, "S12345");
        Console.WriteLine(bob.Greet());  // Output: Hello, my name is Bob and I am 20 years old.
        Console.WriteLine(bob.StudentId);  // Output: S12345
    }
}
```

## Interfaces et Classes Abstraites

### Interfaces

```csharp
interface IDrawable
{
    void Draw();
}

class Circle : IDrawable
{
    public void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }
}
```

### Classes Abstraites

```csharp
abstract class Shape
{
    public abstract void Draw();
}

class Rectangle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a rectangle.");
    }
}
```

## Gestion des Exceptions

```csharp
using System;

class ExceptionHandling
{
    static void Main()
    {
        try
        {
            int result = 10 / 0;
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Error: Division by zero!");
        }
        finally
        {
            Console.WriteLine("End of try block");
        }
    }
}
```


## Bibliothèques et Frameworks Populaires

- **ASP.NET** : framework pour le développement web
- **Entity Framework** : ORM pour la gestion des bases de données
- **XUnit** / **NUnit** : frameworks pour les tests unitaires
- **Newtonsoft.Json** : bibliothèque pour la manipulation de JSON

```csharp
using Newtonsoft.Json;

class Program
{
    static void Main()
    {
        var json = JsonConvert.SerializeObject(new { Name = "Alice", Age = 25 });
        Console.WriteLine(json);  // Output: {"Name":"Alice","Age":25}
    }
}
```

Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon développeur C#. Utilisez-le comme guide de référence pendant votre apprentissage.
```
