# Résumé Complet de TypeORM

## Introduction à TypeORM

### Qu'est-ce que TypeORM ?
- **TypeORM** est un ORM (Object-Relational Mapping) pour Node.js qui utilise TypeScript. Il facilite la manipulation des bases de données relationnelles en mappant les tables de la base de données aux classes TypeScript.

### Avantages
- **Support de TypeScript** : Bénéficiez de la sécurité des types et de la productivité accrue.
- **Compatibilité avec plusieurs bases de données** : PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, Oracle, etc.
- **Support des Migrations** : Gérez les versions de votre schéma de base de données.

## Installation

### Installation de TypeORM
- **Via npm** :
  ```bash
  npm install typeorm reflect-metadata
  ```
- **Installation de la bibliothèque spécifique à la base de données** :
  ```bash
  npm install pg      # Pour PostgreSQL
  npm install mysql2  # Pour MySQL
  ```

### Configuration de TypeORM
- **Fichier `ormconfig.json`** :
  ```json
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
    "entities": ["src/entity/**/*.ts"],
    "synchronize": true
  }
  ```
- **Configuration en TypeScript** :
  ```typescript
  import { createConnection } from 'typeorm';

  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [User],
    synchronize: true,
  }).then(() => {
    console.log('Connected to the database');
  });
  ```

## Concepts Clés

### Entités
- **Définition d'une Entité** :
  ```typescript
  import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
  }
  ```

### Repositories
- **Utilisation d'un Repository** :
  ```typescript
  import { getRepository } from 'typeorm';
  import { User } from './User';

  const userRepository = getRepository(User);

  // Créer un nouvel utilisateur
  const user = new User();
  user.name = 'John Doe';
  user.age = 30;
  await userRepository.save(user);

  // Trouver un utilisateur
  const foundUser = await userRepository.findOne(1);
  ```

### Queries
- **Requêtes avec QueryBuilder** :
  ```typescript
  import { getRepository } from 'typeorm';
  import { User } from './User';

  const userRepository = getRepository(User);

  // Requête simple
  const users = await userRepository.find();

  // Requête avec QueryBuilder
  const usersOver30 = await userRepository
    .createQueryBuilder('user')
    .where('user.age > :age', { age: 30 })
    .getMany();
  ```

### Migrations
- **Générer une Migration** :
  ```bash
  npx typeorm migration:generate -n MigrationName
  ```
- **Exécuter les Migrations** :
  ```bash
  npx typeorm migration:run
  ```
- **Revenir à une Migration Précédente** :
  ```bash
  npx typeorm migration:revert
  ```

### Relations
- **One-to-Many** :
  ```typescript
  @Entity()
  export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(type => User, user => user.posts)
    user: User;
  }

  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Post, post => post.user)
    posts: Post[];
  }
  ```

- **Many-to-Many** :
  ```typescript
  @Entity()
  export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Course)
    @JoinTable()
    courses: Course[];
  }

  @Entity()
  export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Student, student => student.courses)
    students: Student[];
  }
  ```

## Gestion des Transactions

### Transactions
- **Utilisation de Transactions** :
  ```typescript
  import { getConnection } from 'typeorm';

  await getConnection().transaction(async transactionalEntityManager => {
    const user = new User();
    user.name = 'Jane Doe';
    user.age = 25;
    await transactionalEntityManager.save(user);

    // Plus d'opérations
  });
  ```

## Validation et Transformation

### Validation
- **Utilisation de `class-validator` pour la validation** :
  ```typescript
  import { IsString, IsInt } from 'class-validator';

  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsInt()
    age: number;
  }
  ```

### Transformation
- **Utilisation de `class-transformer` pour la transformation des données** :
  ```typescript
  import { plainToClass } from 'class-transformer';

  const user = plainToClass(User, { name: 'John Doe', age: 30 });
  ```
## Outils Complémentaires

### TypeORM CLI
- **Installation** :
  ```bash
  npm install -g typeorm
  ```
- **Commandes Utiles** :
  - **Générer une Entité** : `typeorm entity:create -n EntityName`
  - **Afficher les Entités** : `typeorm entity:list`

### TypeORM Documentation
- **Définition** : Référence officielle pour les fonctionnalités avancées et les configurations.
- **URL** : [TypeORM Documentation](https://typeorm.io/)

Ce résumé couvre les concepts essentiels, les fonctionnalités clés et les raccourcis utiles pour travailler efficacement avec TypeORM. Utilisez-le comme guide de référence pendant votre apprentissage et développement.
```