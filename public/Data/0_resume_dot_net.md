# Résumé Complet de .NET

## Introduction à .NET

### Qu'est-ce que .NET ?
- **.NET** est une plateforme de développement open-source développée par Microsoft, permettant de créer des applications pour Windows, Linux, et macOS.
- **Composants Principaux** :
  - **.NET Framework** : Version précédente, principalement pour Windows.
  - **.NET Core** : Version multiplateforme remplacée par .NET 5+.
  - **.NET 5+** : Unification des différentes plateformes .NET, supporte Windows, Linux, et macOS.

## Installation et Configuration

### Installation de .NETD
- **Via Installateur** :
  - Télécharger et installer le SDK depuis [dotnet.microsoft.com](https://dotnet.microsoft.com/download).
- **Via Package Manager** (sur Ubuntu) :
  ```bash
  sudo apt update
  sudo apt install dotnet-sdk-6.0
  ```

### Configuration
- **Configuration des Variables d'Environnement** :
  - Assurez-vous que le chemin du SDK .NET est dans la variable `PATH` pour exécuter les commandes `dotnet`.

## Développement d'Applications

### Création d'un Projet
- **Application Console** :
  ```bash
  dotnet new console -n NomDeVotreApplication
  ```
- **Application Web avec ASP.NET Core** :
  ```bash
  dotnet new webapp -n NomDeVotreApplicationWeb
  ```
- **API avec ASP.NET Core** :
  ```bash
  dotnet new webapi -n NomDeVotreAPI
  ```

### Structure d'un Projet .NET
- **Fichiers Clés** :
  - `Program.cs` : Point d'entrée de l'application.
  - `Startup.cs` : Configure les services et le pipeline de requêtes pour les applications web.
  - `*.csproj` : Fichier de projet XML qui décrit les dépendances et les configurations du projet.

## Langages de Programmation

### C#
- **Langage Principal** :
  - Orienté objet, avec des caractéristiques modernes comme LINQ, async/await, et des fonctionnalités de programmation fonctionnelle.
- **Exemple de Code** :
  ```csharp
  using System;

  namespace HelloWorld
  {
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Hello, World!");
          }
      }
  }
  ```

### F#
- **Langage Fonctionnel** :
  - Favorise une programmation fonctionnelle tout en supportant la programmation orientée objet.
- **Exemple de Code** :
  ```fsharp
  printfn "Hello, World!"
  ```

### VB.NET
- **Langage Orienté Objet** :
  - Conçu pour la simplicité et l'efficacité avec une syntaxe proche de BASIC.
- **Exemple de Code** :
  ```vbnet
  Module Program
      Sub Main()
          Console.WriteLine("Hello, World!")
      End Sub
  End Module
  ```

## Gestion des Dépendances

### NuGet
- **Définition** : Gestionnaire de paquets pour .NET, facilitant l'ajout de bibliothèques et d'outils.
- **Commandes Principales** :
  - **Ajouter un Paquet** :
    ```bash
    dotnet add package <nom-du-paquet>
    ```
  - **Restaurer les Dépendances** :
    ```bash
    dotnet restore
    ```
  - **Supprimer un Paquet** :
    ```bash
    dotnet remove package <nom-du-paquet>
    ```

## Tests

### Tests Unitaires avec xUnit
- **Ajouter xUnit** :
  ```bash
  dotnet add package xunit
  dotnet add package xunit.runner.visualstudio
  ```
- **Exemple de Test** :
  ```csharp
  using Xunit;

  public class CalculatorTests
  {
      [Fact]
      public void Add_ReturnsSum()
      {
          var calculator = new Calculator();
          var result = calculator.Add(2, 3);
          Assert.Equal(5, result);
      }
  }
  ```

### Tests avec NUnit
- **Ajouter NUnit** :
  ```bash
  dotnet add package NUnit
  dotnet add package NUnit3TestAdapter
  ```
- **Exemple de Test** :
  ```csharp
  using NUnit.Framework;

  [TestFixture]
  public class CalculatorTests
  {
      [Test]
      public void Add_ReturnsSum()
      {
          var calculator = new Calculator();
          var result = calculator.Add(2, 3);
          Assert.AreEqual(5, result);
      }
  }
  ```

## Déploiement

### Déploiement sur Azure
- **Créer une Application Web Azure** :
  ```bash
  az webapp create --resource-group NomDuGroupeDeRessources --plan NomDuPlan --name NomDeVotreApplication --runtime "DOTNETCORE|6.0"
  ```
- **Déployer une Application Web Azure** :
  ```bash
  az webapp up --name NomDeVotreApplication --resource-group NomDuGroupeDeRessources
  ```

### Conteneurisation avec Docker
- **Créer un Dockerfile** pour une Application .NET :
  ```dockerfile
  FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
  WORKDIR /app
  EXPOSE 80

  FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
  WORKDIR /src
  COPY ["NomDeVotreApplication/NomDeVotreApplication.csproj", "NomDeVotreApplication/"]
  RUN dotnet restore "NomDeVotreApplication/NomDeVotreApplication.csproj"
  COPY . .
  WORKDIR "/src/NomDeVotreApplication"
  RUN dotnet build "NomDeVotreApplication.csproj" -c Release -o /app/build

  FROM build AS publish
  RUN dotnet publish "NomDeVotreApplication.csproj" -c Release -o /app/publish

  FROM base AS final
  WORKDIR /app
  COPY --from=publish /app/publish .
  ENTRYPOINT ["dotnet", "NomDeVotreApplication.dll"]
  ```

- **Construire et Exécuter le Conteneur Docker** :
  ```bash
  docker build -t nom-de-votre-application .
  docker run -d -p 8080:80 nom-de-votre-application
  ```

## Bonnes Pratiques

### Code
- **Respecter les Conventions de Nom** : Utiliser des conventions de nommage cohérentes pour les classes, méthodes, et variables.
- **Utiliser les Pratiques de Programmation Modulaire** : Séparer les responsabilités en modules et classes distinctes pour améliorer la maintenabilité.

### Sécurité
- **Validation des Entrées** : Toujours valider les entrées utilisateur pour éviter les vulnérabilités de sécurité.
- **Gestion des Secrets** : Utilisez des solutions sécurisées pour gérer les secrets, comme Azure Key Vault ou AWS Secrets Manager.

### Performance
- **Profilage et Optimisation** : Utilisez les outils de profilage pour identifier les goulets d'étranglement et optimiser les performances de l'application.

## Raccourcis Utiles

- **Lister les Projets** :
  ```bash
  dotnet sln list
  ```
- **Afficher les Versions des SDK .NET Installées** :
  ```bash
  dotnet --list-sdks
  ```
- **Afficher les Versions des Runtime .NET Installées** :
  ```bash
  dotnet --list-runtimes
  ```
- **Nettoyer le Projet** :
  ```bash
  dotnet clean
  ```
- **Construire le Projet** :
  ```bash
  dotnet build
  ```
- **Publier le Projet** :
  ```bash
  dotnet publish -c Release -o <output-folder>
  ```

## Outils Complémentaires

### Visual Studio
- **Définition** : IDE complet pour le développement .NET avec des fonctionnalités avancées de débogage, de gestion de projets et d'intégration continue.
- **URL** : [Visual Studio](https://visualstudio.microsoft.com/)

### Visual Studio Code
- **Définition** : Éditeur de code léger avec des extensions pour le développement .NET, comme C# et .NET Core.
- **URL** : [Visual Studio Code](https://code.visualstudio.com/)

### JetBrains Rider
- **Définition** : IDE multiplateforme pour le développement .NET, offrant des fonctionnalités avancées de refactorisation et de débogage.
- **URL** : [JetBrains Rider](https://www.jetbrains.com/rider/)

### CLI .NET
- **Définition** : Outil en ligne de commande pour la gestion des projets .NET, l'exécution des tests, et le déploiement.
- **Commandes Principales** :
  - **Créer un Nouveau Projet** :
    ```bash
    dotnet new <type-de-projet>
    ```
  - **Restaurer les Dépendances** :
    ```bash
    dotnet restore
    ```
  - **Exécuter l'Application** :
    ```bash
    dotnet run
    ```

Ce résumé couvre les aspects essentiels de .NET, y compris

 la création de projets, les langages de programmation, la gestion des dépendances, les tests, le déploiement, et les bonnes pratiques. Utilisez ce guide comme référence pour le développement avec .NET.
```
