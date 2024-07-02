# Résumé Complet de Spring Boot

## Concepts de Base

### Introduction à Spring Boot
- **Spring Boot** est un framework Java pour développer des applications Java basées sur Spring avec une configuration minimale.
- **Philosophie** : simplifier le développement d'applications en fournissant une configuration par défaut et en intégrant des conventions de programmation.
- **Principes** : Configuration automatique, intégration de nombreux composants, et gestion facile des dépendances.

## Configuration de l'Environnement

### Création d'un Projet Spring Boot
- **Utilisation de Spring Initializr** pour générer un projet avec les dépendances nécessaires.

```bash
curl https://start.spring.io/starter.zip -d dependencies=web,data-jpa,mysql -d name=myproject -o myproject.zip
unzip myproject.zip
cd myproject
./mvnw spring-boot:run
```

- **Utilisation de Spring Boot CLI** pour créer un projet et exécuter des applications.

```bash
spring init --dependencies=web,data-jpa,mysql myproject
cd myproject
./mvnw spring-boot:run
```

## Structure du Projet

### Structure de Base d'un Projet Spring Boot
- **Répertoire du Projet** : contient les fichiers de configuration du projet.
  - `src/main/java/` : contient le code source Java.
    - `com/example/myproject/` : répertoire pour les packages de l'application.
      - `Application.java` : classe principale pour démarrer l'application.
  - `src/main/resources/` : contient les ressources et les fichiers de configuration.
    - `application.properties` : fichier de configuration de l'application.
  - `pom.xml` : fichier de configuration Maven pour la gestion des dépendances (ou `build.gradle` pour Gradle).

### Classe Principale de l'Application

```java
// Application.java
package com.example.myproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

## Contrôleurs

### Création et Utilisation des Contrôleurs
- **Définition** : les contrôleurs gèrent les requêtes HTTP et les réponses.

```java
// HelloController.java
package com.example.myproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public String sayHello() {
        return "Hello, World!";
    }
}
```

## Services

### Création et Utilisation des Services
- **Définition** : les services contiennent la logique métier de l'application.

```java
// GreetingService.java
package com.example.myproject;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {
    public String getGreeting() {
        return "Hello, Spring Boot!";
    }
}
```

- **Injection de dépendances** dans un contrôleur :

```java
// HelloController.java
package com.example.myproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeting")
public class HelloController {

    @Autowired
    private GreetingService greetingService;

    @GetMapping
    public String getGreeting() {
        return greetingService.getGreeting();
    }
}
```

## Repositories

### Utilisation de Repositories avec Spring Data JPA
- **Définition** : les repositories gèrent l'accès aux données et les opérations CRUD.

```java
// User.java
package com.example.myproject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    // getters and setters
}
```

```java
// UserRepository.java
package com.example.myproject;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
```

- **Utilisation du repository dans un service** :

```java
// UserService.java
package com.example.myproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
```

## Configuration

### Configuration des Propriétés
- **Fichier de configuration** : `application.properties` ou `application.yml`.

```properties
# application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root
```

### Configuration de Beans
- **Utilisation de la classe de configuration** :

```java
// AppConfig.java
package com.example.myproject;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public String appName() {
        return "My Spring Boot Application";
    }
}
```

## Middleware

### Utilisation des Middleware (Interceptors)
- **Définition** : les interceptors sont utilisés pour traiter les requêtes avant ou après qu'elles atteignent les contrôleurs.

```java
// LoggingInterceptor.java
package com.example.myproject;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoggingInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("Request URL: " + request.getRequestURL());
        return true;
    }
}
```

- **Configuration de l'interceptor** :

```java
// WebConfig.java
package com.example.myproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private LoggingInterceptor loggingInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loggingInterceptor);
    }
}
```

## Gestion des Erreurs

### Gestion des Erreurs
- **Définition** : gérer les erreurs et les exceptions pour fournir des réponses appropriées.

- **Gestion des exceptions globales** :

```java
// GlobalExceptionHandler.java
package com.example.myproject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

## Sécurité

### Sécurité avec Spring Security
- **Définition** : Spring Security permet de sécuriser les applications en gérant l'authentification et l'autorisation.

- **Configuration de base** :

```java
// SecurityConfig.java
package com.example.myproject;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
            .anyRequest().authenticated()
            .and()
            .formLogin()
            .and()
            .httpBasic();
    }
}
```

## Bibliothèques et Outils Complémentaires

- **Spring Data JPA** : pour l'accès aux données et la gestion des entités
- **Spring Cloud** : pour les microservices et la configuration distribuée
- **Spring Boot Actuator** : pour surveiller et gérer l'application en production
- **Spring Boot DevTools** : pour accélérer le développement avec des redémarrages automatiques

```xml
<!-- pom.xml pour les dépendances Spring Boot -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>

org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```
