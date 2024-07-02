# Résumé Complet de Java

## Concepts de Base

### Variables et Types de Données
- **Types de données de base :**
  - `int` : entier
  - `float` : nombre à virgule flottante
  - `double` : nombre à double précision
  - `char` : caractère
  - `boolean` : booléen (true/false)
  - `String` : chaîne de caractères

```java
int x = 5;          // int
float y = 3.14f;    // float
double z = 3.14159; // double
char letter = 'A';  // char
boolean flag = true;// boolean
String name = "Alice"; // String
```

### Structures de Contrôle

#### Conditionnelles
- **Instructions conditionnelles :** `if`, `else if`, `else`

```java
if (x > 0) {
    System.out.println("Positive");
} else if (x == 0) {
    System.out.println("Zero");
} else {
    System.out.println("Negative");
}
```

#### Boucles
- **Boucle `for`** : pour itérer sur des séquences
- **Boucle `while`** : tant que la condition est vraie
- **Boucle `do-while`** : exécute au moins une fois

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

int i = 5;
while (i > 0) {
    System.out.println(i);
    i--;
}

do {
    System.out.println(i);
    i++;
} while (i < 5);
```

## Fonctions

### Définir des Méthodes
- **Création et appel de méthodes :**

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(greet("Alice")); // Output: Hello, Alice!
    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}
```

## Fonctions Natives Utiles

- **Fonctions couramment utilisées :**
  - `length()` : obtenir la longueur d'une chaîne ou d'un tableau
  - `parseInt()` / `parseDouble()` : conversion de chaîne en nombre
  - `String.format()` : formatage de chaînes
  - `System.out.println()` : afficher des données
  - `instanceof` : vérifier le type d'un objet

```java
String str = "123";
int num = Integer.parseInt(str) + 1;
System.out.println(num);  // Output: 124

String formatted = String.format("Value: %.2f", 3.14159);
System.out.println(formatted);  // Output: Value: 3.14
```

## Manipulation des Collections

### Tableaux
- **Création, accès et manipulation :**

```java
int[] numbers = {1, 2, 3, 4};
System.out.println(numbers[0]);  // Output: 1
System.out.println(numbers[numbers.length - 1]);  // Output: 4

// Initialiser un tableau
int[] moreNumbers = new int[5];
moreNumbers[0] = 10;
moreNumbers[1] = 20;

// Parcourir un tableau
for (int num : moreNumbers) {
    System.out.println(num);
}
```

### Listes et Autres Collections
- **Utiliser `ArrayList`, `HashMap`, etc. :**

```java
import java.util.ArrayList;
import java.util.HashMap;

ArrayList<String> list = new ArrayList<>();
list.add("Alice");
list.add("Bob");
System.out.println(list.get(0));  // Output: Alice

HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);
System.out.println(map.get("Alice"));  // Output: 25
```

## Gestion des Fichiers

### Lecture et Écriture de Fichiers

```java
import java.io.*;

public class FileExample {
    public static void main(String[] args) {
        try {
            // Écriture dans un fichier
            FileWriter writer = new FileWriter("file.txt");
            writer.write("Hello, world!");
            writer.close();

            // Lecture d'un fichier
            FileReader reader = new FileReader("file.txt");
            BufferedReader bufferedReader = new BufferedReader(reader);
            String line = bufferedReader.readLine();
            System.out.println(line);  // Output: Hello, world!
            bufferedReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Programmation Orientée Objet (POO)

### Classes et Objets

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String greet() {
        return "Hello, my name is " + name + " and I am " + age + " years old.";
    }

    public static void main(String[] args) {
        Person alice = new Person("Alice", 25);
        System.out.println(alice.greet());  // Output: Hello, my name is Alice and I am 25 years old.
    }
}
```

### Héritage

```java
public class Student extends Person {
    private String studentId;

    public Student(String name, int age, String studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    public static void main(String[] args) {
        Student bob = new Student("Bob", 20, "S12345");
        System.out.println(bob.greet());  // Output: Hello, my name is Bob and I am 20 years old.
        System.out.println(bob.studentId);  // Output: S12345
    }
}
```

## Interfaces et Classes Abstraites

### Interfaces

```java
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}
```

### Classes Abstraites

```java
abstract class Shape {
    abstract void draw();
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing a rectangle.");
    }
}
```

## Gestion des Exceptions

```java
public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero!");
        } finally {
            System.out.println("End of try block");
        }
    }
}
```

## Bibliothèques et Frameworks Populaires

- **Spring** : framework pour le développement d'applications Java
- **Hibernate** : framework pour la gestion des bases de données
- **JUnit** : framework pour les tests unitaires
- **Apache Commons** : utilitaires pour diverses tâches courantes

```java
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class TestExample {
    @Test
    public void testAddition() {
        assertEquals(5, 2 + 3);
    }
}
```

Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon développeur Java. Utilisez-le comme guide de référence pendant votre apprentissage.
```