# Résumé Complet de AWS (Amazon Web Services)

## Introduction à AWS

### Qu'est-ce que AWS ?
- **Amazon Web Services (AWS)** est une plateforme de cloud computing fournie par Amazon. Elle propose une large gamme de services en cloud, incluant des services de calcul, stockage, bases de données, machine learning, et bien plus encore.

### Avantages
- **Scalabilité** : Ajustez les ressources en fonction des besoins.
- **Flexibilité** : Choisissez parmi divers services pour répondre aux besoins spécifiques.
- **Modèle de Paiement à l'Usage** : Payez uniquement pour les ressources utilisées.

## Services de Base

### Compute
- **Amazon EC2 (Elastic Compute Cloud)** : Service de calcul qui permet de lancer des instances virtuelles.
  - **Lancer une Instance** :
    ```bash
    aws ec2 run-instances --image-id <ami-id> --count 1 --instance-type <type-d-instance> --key-name <nom-de-la-clé>
    ```
  - **Arrêter une Instance** :
    ```bash
    aws ec2 stop-instances --instance-ids <id-de-l-instance>
    ```

- **AWS Lambda** : Exécution de code sans serveur. Payez uniquement pour le temps d'exécution.
  - **Créer une Fonction Lambda** :
    ```bash
    aws lambda create-function --function-name <nom-de-fonction> --runtime <runtime> --role <role-arn> --handler <handler> --zip-file fileb://<chemin-du-fichier>
    ```

### Stockage
- **Amazon S3 (Simple Storage Service)** : Service de stockage d'objets scalable.
  - **Téléverser un Fichier** :
    ```bash
    aws s3 cp <fichier-local> s3://<nom-du-bucket>/<chemin-du-fichier>
    ```
  - **Télécharger un Fichier** :
    ```bash
    aws s3 cp s3://<nom-du-bucket>/<chemin-du-fichier> <fichier-local>
    ```

- **Amazon EBS (Elastic Block Store)** : Stockage de blocs attaché aux instances EC2.
  - **Créer un Volume EBS** :
    ```bash
    aws ec2 create-volume --size <taille-en-Go> --availability-zone <zone-de-disponibilité>
    ```

### Bases de Données
- **Amazon RDS (Relational Database Service)** : Service de base de données relationnelle gérée.
  - **Créer une Instance RDS** :
    ```bash
    aws rds create-db-instance --db-instance-identifier <nom-de-instance> --db-instance-class <classe-de-instance> --engine <moteur> --master-username <utilisateur> --master-user-password <mot-de-passe> --allocated-storage <taille-en-Go>
    ```

- **Amazon DynamoDB** : Base de données NoSQL gérée.
  - **Créer une Table DynamoDB** :
    ```bash
    aws dynamodb create-table --table-name <nom-de-table> --attribute-definitions AttributeName=<nom-de-attribut>,AttributeType=<type> --key-schema AttributeName=<nom-de-clé>,KeyType=HASH --provisioned-throughput ReadCapacityUnits=<unités-de-lecture>,WriteCapacityUnits=<unités-d-écriture>
    ```

### Réseau
- **Amazon VPC (Virtual Private Cloud)** : Créez un réseau virtuel dans AWS.
  - **Créer une VPC** :
    ```bash
    aws ec2 create-vpc --cidr-block <plage-d-adresse>
    ```

- **Amazon Route 53** : Service DNS scalable.
  - **Créer un Enregistrement DNS** :
    ```bash
    aws route53 change-resource-record-sets --hosted-zone-id <id-zone> --change-batch '{"Changes":[{"Action":"UPSERT","ResourceRecordSet":{"Name":"example.com","Type":"A","TTL":60,"ResourceRecords":[{"Value":"1.2.3.4"}]}}]}'
    ```

## Services Avancés

### Machine Learning
- **Amazon SageMaker** : Service pour créer, entraîner et déployer des modèles de machine learning.
  - **Créer un Job d'Entraînement** :
    ```bash
    aws sagemaker create-training-job --training-job-name <nom-de-job> --algorithm-specification TrainingImage=<image-de-formation>,TrainingInputMode=<mode-d'entrée> --role-arn <role-arn> --input-data-config <config-entrée> --output-data-config <config-sortie> --resource-config <config-ressources>
    ```

### Sécurité
- **AWS IAM (Identity and Access Management)** : Gestion des utilisateurs et des permissions.
  - **Créer un Utilisateur IAM** :
    ```bash
    aws iam create-user --user-name <nom-d-utilisateur>
    ```
  - **Créer un Groupe IAM et Ajouter un Utilisateur** :
    ```bash
    aws iam create-group --group-name <nom-du-groupe>
    aws iam add-user-to-group --group-name <nom-du-groupe> --user-name <nom-d-utilisateur>
    ```

### Surveillance et Gestion
- **Amazon CloudWatch** : Surveillance et gestion des logs.
  - **Créer une Alarme CloudWatch** :
    ```bash
    aws cloudwatch put-metric-alarm --alarm-name <nom-de-l-alarm> --metric-name <nom-de-métrique> --namespace <nom-du-nom-de-domaine> --statistic <statistique> --period <période> --threshold <seuil> --comparison-operator <opérateur-comparaison> --evaluation-periods <périodes-d-évaluation> --alarm-actions <actions>
    ```

## Bonnes Pratiques

### Gestion des Ressources
- **Utiliser les Balises** :
  - Attribuez des balises aux ressources pour faciliter la gestion et la facturation.
  ```bash
  aws ec2 create-tags --resources <id-de-ressource> --tags Key=<clé>,Value=<valeur>
  ```

### Sécurité
- **Appliquer le Principe du Moindre Privilège** :
  - Accordez uniquement les permissions nécessaires aux utilisateurs et rôles.

### Coût
- **Surveiller les Dépenses** :
  - Utilisez AWS Cost Explorer pour suivre et gérer les coûts.
  ```bash
  aws ce get-cost-and-usage --time-period Start=<date-début>,End=<date-fin> --granularity MONTHLY --metrics "BlendedCost"
  ```

## Raccourcis Utiles

- **Afficher la Liste des Services Disponibles** :
  ```bash
  aws help
  ```
- **Afficher les Commandes Disponibles pour un Service** :
  ```bash
  aws <service> help
  ```
- **Obtenir des Détails sur une Commande** :
  ```bash
  aws <service> <commande> help
  ```

## Outils Complémentaires

### AWS CLI (Command Line Interface)
- **Définition** : Interface en ligne de commande pour interagir avec les services AWS.
- **Installation** : Suivez les instructions sur [AWS CLI Installation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

### AWS Management Console
- **Définition** : Interface graphique pour gérer les services AWS.
- **URL** : [AWS Management Console](https://aws.amazon.com/console/)

### AWS CloudFormation
- **Définition** : Service pour déployer et gérer des ressources AWS en utilisant des modèles.
- **Création d'un Stack CloudFormation** :
  ```bash
  aws cloudformation create-stack --stack-name <nom-du-stack> --template-body file://<chemin-du-fichier-template>
  ```
