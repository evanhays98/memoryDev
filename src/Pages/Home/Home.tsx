import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme, theme } from 'src/libs/theme';
import { ConversionHistoryLine } from '../History/components/ConversionHistoryLine';
import { Icon } from '../../libs/core';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  globalContainer: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: theme.marginBase * 6,
    flexDirection: 'column',
    paddingBottom: theme.marginBase * 6,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.marginBase * 4,
    padding: theme.marginBase * 4,
    flexDirection: 'column',
    paddingBottom: theme.marginBase * 6,
    width: '100%',
    maxWidth: theme.boxWidth.large,
    margin: '0 auto',
  },
  balanceTitle: {
    ...theme.fonts.h2,
    color: theme.colors.black,
  },
  balanceContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.marginBase,
    flexDirection: 'column',
  },
  balance: {
    ...theme.fonts.h3,
    color: theme.colors.black,
  },
  logOut: {
    ...theme.fonts.label,
    color: theme.colors.red,
    textDecoration: 'none',
  },
}));

export const Home = () => {
  const classes = useStyles({ theme });

  return (
    <div className={classes.globalContainer}>
      <div className={classes.container}>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balanceTitle}>Memory Dev</h2>
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Languages</h2>
          <ConversionHistoryLine icon={Icon.javascript} title="Javascript" />
          <ConversionHistoryLine icon={Icon.typescript} title="Typescript" />
          <ConversionHistoryLine icon={Icon.python} title="Python" />
          <ConversionHistoryLine icon={Icon.csharp} title="C#" />
          <ConversionHistoryLine icon={Icon.java} title="Java" />
          <ConversionHistoryLine icon={Icon.postgre} title="PostgreSQL" />
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Frontend</h2>
          <ConversionHistoryLine icon={Icon.react} title="React" />
          <ConversionHistoryLine icon={Icon.vueJs} title="Vuejs" />
          <ConversionHistoryLine icon={Icon.angular} title="Angular" />
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Backend</h2>
          <ConversionHistoryLine icon={Icon.nestJs} title="Nestjs" />
          <ConversionHistoryLine icon={Icon.django} title="Django" />
          <ConversionHistoryLine icon={Icon.spring_boot} title="SpringBoot" />
          <ConversionHistoryLine icon={Icon.dotnet} title=".Net" />
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Devops</h2>
          <ConversionHistoryLine icon={Icon.docker} title="Docker" />
          <ConversionHistoryLine icon={Icon.kubernetes} title="Kubernetes" />
          <ConversionHistoryLine icon={Icon.jenkins} title="Jenkins" />
          <ConversionHistoryLine icon={Icon.git} title="Git" />
        </div>
      </div>

      <ReactMarkdown
        className={'markdown'}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {'# Résumé Complet de Docker\n' +
          '\n' +
          '## Introduction à Docker\n' +
          '\n' +
          "### Qu'est-ce que Docker ?\n" +
          "- **Docker** est une plateforme open-source qui automatise le déploiement des applications à l'intérieur de conteneurs. Les conteneurs sont des environnements légers, portables et autonomes qui peuvent être exécutés sur n'importe quel système d'exploitation.\n" +
          '- **Concepts Clés** :\n' +
          "  - **Conteneur** : Une unité exécutable standard qui combine le code de l'application, les bibliothèques, les dépendances et les paramètres de configuration.\n" +
          '  - **Image** : Un modèle immuable utilisé pour créer des conteneurs. Les images sont construites à partir de Dockerfile.\n' +
          '  - **Dockerfile** : Un fichier texte qui contient les instructions pour créer une image Docker.\n' +
          '  - **Docker Engine** : Le moteur qui exécute les conteneurs Docker. Il peut être installé sur des serveurs ou des postes de travail.\n' +
          '\n' +
          '## Installation et Configuration\n' +
          '\n' +
          '### Installation de Docker\n' +
          '- **Sur Ubuntu** :\n' +
          '  ```bash\n' +
          '  sudo apt update\n' +
          '  sudo apt install docker.io\n' +
          '  ```\n' +
          '- **Sur macOS** :\n' +
          '  - Télécharger et installer Docker Desktop depuis [Docker Desktop](https://www.docker.com/products/docker-desktop).\n' +
          '- **Sur Windows** :\n' +
          '  - Télécharger et installer Docker Desktop depuis [Docker Desktop](https://www.docker.com/products/docker-desktop).\n' +
          '\n' +
          '### Configuration\n' +
          '- **Démarrer le Service Docker** :\n' +
          '  ```bash\n' +
          '  sudo systemctl start docker\n' +
          '  ```\n' +
          '- **Activer Docker au Démarrage** :\n' +
          '  ```bash\n' +
          '  sudo systemctl enable docker\n' +
          '  ```\n' +
          '\n' +
          '## Concepts Clés\n' +
          '\n' +
          '### Images Docker\n' +
          '- **Lister les Images** :\n' +
          '  ```bash\n' +
          '  docker images\n' +
          '  ```\n' +
          '- **Créer une Image** :\n' +
          "  - Créez un `Dockerfile` et construisez l'image avec :\n" +
          '    ```bash\n' +
          '    docker build -t nom-de-votre-image .\n' +
          '    ```\n' +
          '- **Supprimer une Image** :\n' +
          '  ```bash\n' +
          '  docker rmi nom-de-votre-image\n' +
          '  ```\n' +
          '\n' +
          '### Conteneurs Docker\n' +
          '- **Lister les Conteneurs** :\n' +
          '  ```bash\n' +
          '  docker ps\n' +
          '  ```\n' +
          '- **Exécuter un Conteneur** :\n' +
          '  ```bash\n' +
          '  docker run -d -p 8080:80 nom-de-votre-image\n' +
          '  ```\n' +
          '- **Supprimer un Conteneur** :\n' +
          '  ```bash\n' +
          '  docker rm nom-du-conteneur\n' +
          '  ```\n' +
          '- **Arrêter un Conteneur** :\n' +
          '  ```bash\n' +
          '  docker stop nom-du-conteneur\n' +
          '  ```\n' +
          '\n' +
          '### Dockerfile\n' +
          '- **Structure de Base** :\n' +
          '  ```dockerfile\n' +
          "  # Spécifier l'image de base\n" +
          '  FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base\n' +
          '  WORKDIR /app\n' +
          '  EXPOSE 80\n' +
          '\n' +
          '  # Étape de construction\n' +
          '  FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build\n' +
          '  WORKDIR /src\n' +
          '  COPY ["NomDeVotreApplication/NomDeVotreApplication.csproj", "NomDeVotreApplication/"]\n' +
          '  RUN dotnet restore "NomDeVotreApplication/NomDeVotreApplication.csproj"\n' +
          '  COPY . .\n' +
          '  WORKDIR "/src/NomDeVotreApplication"\n' +
          '  RUN dotnet build "NomDeVotreApplication.csproj" -c Release -o /app/build\n' +
          '\n' +
          '  # Étape de publication\n' +
          '  FROM build AS publish\n' +
          '  RUN dotnet publish "NomDeVotreApplication.csproj" -c Release -o /app/publish\n' +
          '\n' +
          '  # Étape finale\n' +
          '  FROM base AS final\n' +
          '  WORKDIR /app\n' +
          '  COPY --from=publish /app/publish .\n' +
          '  ENTRYPOINT ["dotnet", "NomDeVotreApplication.dll"]\n' +
          '  ```\n' +
          '\n' +
          '## Commandes Docker Utiles\n' +
          '\n' +
          '### Gestion des Images\n' +
          "- **Voir les Détails d'une Image** :\n" +
          '  ```bash\n' +
          '  docker inspect nom-de-votre-image\n' +
          '  ```\n' +
          '- **Taguer une Image** :\n' +
          '  ```bash\n' +
          '  docker tag nom-de-votre-image nom-de-votre-repository:tag\n' +
          '  ```\n' +
          '\n' +
          '### Gestion des Conteneurs\n' +
          '- **Exécuter un Conteneur Interactif** :\n' +
          '  ```bash\n' +
          '  docker run -it nom-de-votre-image /bin/bash\n' +
          '  ```\n' +
          "- **Voir les Logs d'un Conteneur** :\n" +
          '  ```bash\n' +
          '  docker logs nom-du-conteneur\n' +
          '  ```\n' +
          '\n' +
          '### Réseaux Docker\n' +
          '- **Lister les Réseaux** :\n' +
          '  ```bash\n' +
          '  docker network ls\n' +
          '  ```\n' +
          '- **Créer un Réseau** :\n' +
          '  ```bash\n' +
          '  docker network create nom-du-reseau\n' +
          '  ```\n' +
          '\n' +
          '### Volumes Docker\n' +
          '- **Lister les Volumes** :\n' +
          '  ```bash\n' +
          '  docker volume ls\n' +
          '  ```\n' +
          '- **Créer un Volume** :\n' +
          '  ```bash\n' +
          '  docker volume create nom-du-volume\n' +
          '  ```\n' +
          '\n' +
          '## Bonnes Pratiques\n' +
          '\n' +
          '### Sécurité\n' +
          '- **Minimiser les Privilèges** : Exécutez les applications dans les conteneurs avec le moins de privilèges possible.\n' +
          "- **Mettre à Jour Régulièrement** : Utilisez des images à jour et appliquez les correctifs de sécurité dès qu'ils sont disponibles.\n" +
          '\n' +
          '### Performance\n' +
          "- **Optimiser les Images** : Utilisez des images légères et réduisez le nombre d'étapes dans le Dockerfile.\n" +
          '- **Nettoyer les Ressources Inutilisées** :\n' +
          '  - **Supprimer les Images Orphelines** :\n' +
          '    ```bash\n' +
          '    docker image prune\n' +
          '    ```\n' +
          '  - **Supprimer les Conteneurs Arrêtés** :\n' +
          '    ```bash\n' +
          '    docker container prune\n' +
          '    ```\n' +
          '\n' +
          '### Déploiement\n' +
          '- **Utiliser Docker Compose** : Pour définir et exécuter des applications multi-conteneurs avec un fichier `docker-compose.yml`.\n' +
          '  - **Exemple de Fichier `docker-compose.yml`** :\n' +
          '    ```yaml\n' +
          "    version: '3'\n" +
          '    services:\n' +
          '      web:\n' +
          '        image: nom-de-votre-image\n' +
          '        ports:\n' +
          '          - "8080:80"\n' +
          '      db:\n' +
          '        image: postgres\n' +
          '        environment:\n' +
          '          POSTGRES_PASSWORD: example\n' +
          '    ```\n' +
          '  - **Démarrer les Services** :\n' +
          '    ```bash\n' +
          '    docker-compose up\n' +
          '    ```\n' +
          '\n' +
          '## Intégration et Déploiement Continu (CI/CD)\n' +
          '\n' +
          '### Docker et CI/CD\n' +
          '- **Configurer des Pipelines** : Utilisez des outils comme Jenkins, GitHub Actions, ou GitLab CI pour automatiser les builds et les déploiements de conteneurs Docker.\n' +
          '  - **Exemple de Job GitHub Actions** :\n' +
          '    ```yaml\n' +
          '    name: Build and Push Docker image\n' +
          '\n' +
          '    on:\n' +
          '      push:\n' +
          '        branches:\n' +
          '          - main\n' +
          '\n' +
          '    jobs:\n' +
          '      build:\n' +
          '        runs-on: ubuntu-latest\n' +
          '\n' +
          '        steps:\n' +
          '          - name: Checkout code\n' +
          '            uses: actions/checkout@v2\n' +
          '\n' +
          '          - name: Log in to Docker Hub\n' +
          '            uses: docker/login-action@v2\n' +
          '            with:\n' +
          '              username: ${{ secrets.DOCKER_HUB_USERNAME }}\n' +
          '              password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}\n' +
          '\n' +
          '          - name: Build and push Docker image\n' +
          '            run: |\n' +
          '              docker build -t nom-de-votre-image .\n' +
          '              docker tag nom-de-votre-image nom-de-votre-repository:latest\n' +
          '              docker push nom-de-votre-repository:latest\n' +
          '    ```\n' +
          '\n' +
          '## Raccourcis Utiles\n' +
          '\n' +
          '- **Afficher les Conteneurs en Exécution** :\n' +
          '  ```bash\n' +
          '  docker ps\n' +
          '  ```\n' +
          '- **Afficher Tous les Conteneurs** :\n' +
          '  ```bash\n' +
          '  docker ps -a\n' +
          '  ```\n' +
          '- **Afficher les Images** :\n' +
          '  ```bash\n' +
          '  docker images\n' +
          '  ```\n' +
          "- **Afficher les Logs d'un Conteneur** :\n" +
          '  ```bash\n' +
          '  docker logs nom-du-conteneur\n' +
          '  ```\n' +
          '\n' +
          '## Outils Complémentaires\n' +
          '\n' +
          '### Docker Compose\n' +
          '- **Définition** : Outil pour définir et exécuter des applications multi-conteneurs avec des fichiers de configuration YAML.\n' +
          '- **URL** : [Docker Compose](https://docs.docker.com/compose/)\n' +
          '\n' +
          '### Docker Swarm\n' +
          '- **Définition** : Outil pour orchestrer des clusters de conteneurs Docker.\n' +
          '- **URL** : [Docker Swarm](https://docs.docker.com/engine/swarm/)\n' +
          '\n' +
          '### Kubernetes\n' +
          "- **Définition** : Système de gestion des conteneurs pour l'orchestration à grande échelle, souvent utilisé avec Docker.\n" +
          '- **URL** : [Kubernetes](https://kubernetes.io/)\n'}
      </ReactMarkdown>
    </div>
  );
};
