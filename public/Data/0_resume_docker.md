# Résumé Complet de Docker

## Introduction à Docker

### Qu'est-ce que Docker ?
- **Docker** est une plateforme open-source qui automatise le déploiement des applications à l'intérieur de conteneurs. Les conteneurs sont des environnements légers, portables et autonomes qui peuvent être exécutés sur n'importe quel système d'exploitation.
- **Concepts Clés** :
  - **Conteneur** : Une unité exécutable standard qui combine le code de l'application, les bibliothèques, les dépendances et les paramètres de configuration.
  - **Image** : Un modèle immuable utilisé pour créer des conteneurs. Les images sont construites à partir de Dockerfile.
  - **Dockerfile** : Un fichier texte qui contient les instructions pour créer une image Docker.
  - **Docker Engine** : Le moteur qui exécute les conteneurs Docker. Il peut être installé sur des serveurs ou des postes de travail.

## Installation et Configuration

### Installation de Docker
- **Sur Ubuntu** :
  ```bash
  sudo apt update
  sudo apt install docker.io
  ```
- **Sur macOS** :
  - Télécharger et installer Docker Desktop depuis [Docker Desktop](https://www.docker.com/products/docker-desktop).
- **Sur Windows** :
  - Télécharger et installer Docker Desktop depuis [Docker Desktop](https://www.docker.com/products/docker-desktop).

### Configuration
- **Démarrer le Service Docker** :
  ```bash
  sudo systemctl start docker
  ```
- **Activer Docker au Démarrage** :
  ```bash
  sudo systemctl enable docker
  ```

## Concepts Clés

### Images Docker
- **Lister les Images** :
  ```bash
  docker images
  ```
- **Créer une Image** :
  - Créez un `Dockerfile` et construisez l'image avec :
    ```bash
    docker build -t nom-de-votre-image .
    ```
- **Supprimer une Image** :
  ```bash
  docker rmi nom-de-votre-image
  ```

### Conteneurs Docker
- **Lister les Conteneurs** :
  ```bash
  docker ps
  ```
- **Exécuter un Conteneur** :
  ```bash
  docker run -d -p 8080:80 nom-de-votre-image
  ```
- **Supprimer un Conteneur** :
  ```bash
  docker rm nom-du-conteneur
  ```
- **Arrêter un Conteneur** :
  ```bash
  docker stop nom-du-conteneur
  ```

### Dockerfile
- **Structure de Base** :
  ```dockerfile
  # Spécifier l'image de base
  FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
  WORKDIR /app
  EXPOSE 80

  # Étape de construction
  FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
  WORKDIR /src
  COPY ["NomDeVotreApplication/NomDeVotreApplication.csproj", "NomDeVotreApplication/"]
  RUN dotnet restore "NomDeVotreApplication/NomDeVotreApplication.csproj"
  COPY . .
  WORKDIR "/src/NomDeVotreApplication"
  RUN dotnet build "NomDeVotreApplication.csproj" -c Release -o /app/build

  # Étape de publication
  FROM build AS publish
  RUN dotnet publish "NomDeVotreApplication.csproj" -c Release -o /app/publish

  # Étape finale
  FROM base AS final
  WORKDIR /app
  COPY --from=publish /app/publish .
  ENTRYPOINT ["dotnet", "NomDeVotreApplication.dll"]
  ```

## Commandes Docker Utiles

### Gestion des Images
- **Voir les Détails d'une Image** :
  ```bash
  docker inspect nom-de-votre-image
  ```
- **Taguer une Image** :
  ```bash
  docker tag nom-de-votre-image nom-de-votre-repository:tag
  ```

### Gestion des Conteneurs
- **Exécuter un Conteneur Interactif** :
  ```bash
  docker run -it nom-de-votre-image /bin/bash
  ```
- **Voir les Logs d'un Conteneur** :
  ```bash
  docker logs nom-du-conteneur
  ```

### Réseaux Docker
- **Lister les Réseaux** :
  ```bash
  docker network ls
  ```
- **Créer un Réseau** :
  ```bash
  docker network create nom-du-reseau
  ```

### Volumes Docker
- **Lister les Volumes** :
  ```bash
  docker volume ls
  ```
- **Créer un Volume** :
  ```bash
  docker volume create nom-du-volume
  ```

## Bonnes Pratiques

### Sécurité
- **Minimiser les Privilèges** : Exécutez les applications dans les conteneurs avec le moins de privilèges possible.
- **Mettre à Jour Régulièrement** : Utilisez des images à jour et appliquez les correctifs de sécurité dès qu'ils sont disponibles.

### Performance
- **Optimiser les Images** : Utilisez des images légères et réduisez le nombre d'étapes dans le Dockerfile.
- **Nettoyer les Ressources Inutilisées** :
  - **Supprimer les Images Orphelines** :
    ```bash
    docker image prune
    ```
  - **Supprimer les Conteneurs Arrêtés** :
    ```bash
    docker container prune
    ```

### Déploiement
- **Utiliser Docker Compose** : Pour définir et exécuter des applications multi-conteneurs avec un fichier `docker-compose.yml`.
  - **Exemple de Fichier `docker-compose.yml`** :
    ```yaml
    version: '3'
    services:
      web:
        image: nom-de-votre-image
        ports:
          - "8080:80"
      db:
        image: postgres
        environment:
          POSTGRES_PASSWORD: example
    ```
  - **Démarrer les Services** :
    ```bash
    docker-compose up
    ```

## Intégration et Déploiement Continu (CI/CD)

### Docker et CI/CD
- **Configurer des Pipelines** : Utilisez des outils comme Jenkins, GitHub Actions, ou GitLab CI pour automatiser les builds et les déploiements de conteneurs Docker.
  - **Exemple de Job GitHub Actions** :
    ```yaml
    name: Build and Push Docker image

    on:
      push:
        branches:
          - main

    jobs:
      build:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout code
            uses: actions/checkout@v2

          - name: Log in to Docker Hub
            uses: docker/login-action@v2
            with:
              username: ${{ secrets.DOCKER_HUB_USERNAME }}
              password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}

          - name: Build and push Docker image
            run: |
              docker build -t nom-de-votre-image .
              docker tag nom-de-votre-image nom-de-votre-repository:latest
              docker push nom-de-votre-repository:latest
    ```

## Raccourcis Utiles

- **Afficher les Conteneurs en Exécution** :
  ```bash
  docker ps
  ```
- **Afficher Tous les Conteneurs** :
  ```bash
  docker ps -a
  ```
- **Afficher les Images** :
  ```bash
  docker images
  ```
- **Afficher les Logs d'un Conteneur** :
  ```bash
  docker logs nom-du-conteneur
  ```

## Outils Complémentaires

### Docker Compose
- **Définition** : Outil pour définir et exécuter des applications multi-conteneurs avec des fichiers de configuration YAML.
- **URL** : [Docker Compose](https://docs.docker.com/compose/)

### Docker Swarm
- **Définition** : Outil pour orchestrer des clusters de conteneurs Docker.
- **URL** : [Docker Swarm](https://docs.docker.com/engine/swarm/)

### Kubernetes
- **Définition** : Système de gestion des conteneurs pour l'orchestration à grande échelle, souvent utilisé avec Docker.
- **URL** : [Kubernetes](https://kubernetes.io/)
