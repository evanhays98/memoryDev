# Résumé Complet de PostgreSQL

## Concepts de Base

### Introduction à PostgreSQL
- **PostgreSQL** est un système de gestion de base de données relationnelle (SGBDR) open-source connu pour sa robustesse, son extensibilité et son respect des standards SQL.
- **Philosophie** : offrir des fonctionnalités avancées, un haut niveau de conformité avec les standards SQL, et une extensibilité.

## Installation et Configuration

### Installation de PostgreSQL
- **Via Docker** :
  ```bash
  docker pull postgres:latest
  docker run -d -p 5432:5432 --name postgres-container -e POSTGRES_PASSWORD=mysecretpassword postgres:latest
  ```
- **Via Package Manager** (sur Ubuntu) :
  ```bash
  sudo apt update
  sudo apt install postgresql postgresql-contrib
  ```
- **Accéder à PostgreSQL** : Utilisez le client en ligne de commande `psql` ou un outil graphique comme pgAdmin.

### Connexion à PostgreSQL
- **Via psql** :
  ```bash
  psql -U postgres
  ```
- **Configuration du fichier `pg_hba.conf`** :
  - Pour configurer les méthodes d'authentification et les accès réseau.

## Concepts Clés

### Bases de Données
- **Création d'une Base de Données** :
  ```sql
  CREATE DATABASE mydatabase;
  ```
- **Suppression d'une Base de Données** :
  ```sql
  DROP DATABASE mydatabase;
  ```

### Tables
- **Création d'une Table** :
  ```sql
  CREATE TABLE employees (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      position VARCHAR(50),
      salary NUMERIC
  );
  ```
- **Modification d'une Table** :
  ```sql
  ALTER TABLE employees ADD COLUMN hire_date DATE;
  ```
- **Suppression d'une Table** :
  ```sql
  DROP TABLE employees;
  ```

### Types de Données
- **Types Primitifs** :
  - `INTEGER`, `VARCHAR`, `TEXT`, `BOOLEAN`, `DATE`, `TIMESTAMP`
- **Types Avancés** :
  - `ARRAY`, `JSON`, `UUID`

### Index
- **Création d'un Index** :
  ```sql
  CREATE INDEX idx_name ON employees (name);
  ```
- **Suppression d'un Index** :
  ```sql
  DROP INDEX idx_name;
  ```

### Requêtes SQL
- **Insertion de Données** :
  ```sql
  INSERT INTO employees (name, position, salary) VALUES ('John Doe', 'Engineer', 75000);
  ```
- **Mise à Jour de Données** :
  ```sql
  UPDATE employees SET salary = 80000 WHERE name = 'John Doe';
  ```
- **Suppression de Données** :
  ```sql
  DELETE FROM employees WHERE name = 'John Doe';
  ```
- **Sélection de Données** :
  ```sql
  SELECT * FROM employees;
  ```

### Transactions
- **Début d'une Transaction** :
  ```sql
  BEGIN;
  ```
- **Commit d'une Transaction** :
  ```sql
  COMMIT;
  ```
- **Rollback d'une Transaction** :
  ```sql
  ROLLBACK;
  ```

### Vues et Fonctions
- **Création d'une Vue** :
  ```sql
  CREATE VIEW employee_view AS
  SELECT name, position FROM employees;
  ```
- **Création d'une Fonction** :
  ```sql
  CREATE FUNCTION get_employee_salary(employee_name VARCHAR) RETURNS NUMERIC AS $$
  DECLARE
      salary NUMERIC;
  BEGIN
      SELECT salary INTO salary FROM employees WHERE name = employee_name;
      RETURN salary;
  END;
  $$ LANGUAGE plpgsql;
  ```

## Jointures (Joins)

Les jointures permettent de combiner les lignes de deux ou plusieurs tables en fonction d'une condition de correspondance.

### JOIN (ou INNER JOIN)
- **Définition** : Renvoie les lignes qui ont des correspondances dans les deux tables.
- **Exemple** :
  ```sql
  SELECT employees.name, departments.department_name
  FROM employees
  INNER JOIN departments ON employees.department_id = departments.id;
  ```

### LEFT JOIN (ou LEFT OUTER JOIN)
- **Définition** : Renvoie toutes les lignes de la table de gauche et les lignes correspondantes de la table de droite. Les lignes sans correspondance dans la table de droite auront des valeurs NULL.
- **Exemple** :
  ```sql
  SELECT employees.name, departments.department_name
  FROM employees
  LEFT JOIN departments ON employees.department_id = departments.id;
  ```

### RIGHT JOIN (ou RIGHT OUTER JOIN)
- **Définition** : Renvoie toutes les lignes de la table de droite et les lignes correspondantes de la table de gauche. Les lignes sans correspondance dans la table de gauche auront des valeurs NULL.
- **Exemple** :
  ```sql
  SELECT employees.name, departments.department_name
  FROM employees
  RIGHT JOIN departments ON employees.department_id = departments.id;
  ```

### FULL JOIN (ou FULL OUTER JOIN)
- **Définition** : Renvoie toutes les lignes lorsque qu'il y a une correspondance dans l'une des tables. Les lignes sans correspondance dans les deux tables auront des valeurs NULL.
- **Exemple** :
  ```sql
  SELECT employees.name, departments.department_name
  FROM employees
  FULL JOIN departments ON employees.department_id = departments.id;
  ```

## Administration et Maintenance

### Sauvegarde et Restauration
- **Sauvegarde** :
  ```bash
  pg_dump mydatabase > mydatabase_backup.sql
  ```
- **Restauration** :
  ```bash
  psql mydatabase < mydatabase_backup.sql
  ```

### Gestion des Utilisateurs
- **Création d'un Utilisateur** :
  ```sql
  CREATE USER myuser WITH PASSWORD 'mypassword';
  ```
- **Attribution de Privilèges** :
  ```sql
  GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
  ```

### Optimisation des Performances
- **Analyse des Requêtes** :
  - Utilisez `EXPLAIN` pour analyser le plan d'exécution des requêtes.
- **Vacuum** :
  - Nettoyez les tables pour libérer l'espace et optimiser les performances.
  ```sql
  VACUUM;
  ```

## Sécurité

### Gestion des Accès
- **Configuration du fichier `postgresql.conf`** :
  - Pour définir les paramètres de connexion et les paramètres de sécurité.
- **Définition des Rôles et Privilèges** :
  ```sql
  CREATE ROLE readonly;
  GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
  ```

### Chiffrement
- **Chiffrement des Données** :
  - Utilisez les extensions comme `pgcrypto` pour le chiffrement des données au niveau des colonnes.

## Raccourcis Utiles

- **Afficher les Bases de Données** :
  ```sql
  \l
  ```
- **Afficher les Tables** :
  ```sql
  \dt
  ```
- **Afficher les Colonnes d'une Table** :
  ```sql
  \d employees
  ```
- **Quitter psql** :
  ```sql
  \q
  ```

## Outils Complémentaires

### pgAdmin
- **Définition** : Outil de gestion graphique pour PostgreSQL.
- **Installation** : Téléchargez et installez depuis [pgAdmin](https://www.pgadmin.org/download/).

### PostGIS
- **Définition** : Extension pour le support des données géospatiales.
- **Installation** :
  ```sql
  CREATE EXTENSION postgis;
  ```

### pgBouncer
- **Définition** : Pooler de connexions pour améliorer les performances de PostgreSQL.
- **Installation et Configuration** :
  - Suivez les instructions sur [pgBouncer GitHub](https://github.com/pgbouncer/pgbouncer).

Ce résumé couvre les concepts clés, les fonctions natives utiles, et les raccourcis essentiels pour devenir un bon utilisateur de PostgreSQL. Utilisez-le comme guide de référence pendant votre apprentissage.
```