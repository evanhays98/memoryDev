
# Résumé Complet de NestJS

## Concepts de Base

### Introduction à NestJS
- **NestJS** est un framework Node.js pour construire des applications backend évolutives et maintenables.
- Basé sur TypeScript, il utilise des concepts de la programmation orientée objet, fonctionnelle et réactive.
- **Principes** : Modulaire, basé sur les décorateurs, et inspiré par les frameworks comme Angular.

## Configuration de l'Environnement

### Création d'un Projet NestJS
- **Utilisation de Nest CLI** : un outil de ligne de commande pour générer et gérer des projets NestJS.

```bash
npm install -g @nestjs/cli
nest new my-project
cd my-project
npm run start
```

## Modules

### Définition des Modules
- **Définition** : les modules organisent le code en unités fonctionnelles.
- **Création d'un module** :

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Contrôleurs

### Création et Utilisation des Contrôleurs
- **Définition** : les contrôleurs gèrent les requêtes HTTP et renvoient les réponses.
- **Création d'un contrôleur** :

```typescript
// users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
```

## Services

### Création et Utilisation des Services
- **Définition** : les services contiennent la logique métier et l'accès aux données.
- **Création d'un service** :

```typescript
// users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = ['Alice', 'Bob'];

  findAll(): string[] {
    return this.users;
  }
}
```

## Dépendances et Injection de Dépendances

### Utilisation de l'Injection de Dépendances
- **Définition** : l'injection de dépendances permet de fournir des instances d'objets aux classes.
- **Exemple d'injection** dans un contrôleur :

```typescript
// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

## Middleware

### Utilisation des Middleware
- **Définition** : les middleware traitent les requêtes avant qu'elles n'atteignent les contrôleurs.
- **Création d'un middleware** :

```typescript
// logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...', req.method, req.path);
    next();
  }
}
```

- **Application du middleware** :

```typescript
// app.module.ts
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  // imports, controllers, providers
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
```

## Guards

### Utilisation des Guards
- **Définition** : les guards déterminent si une requête peut être traitée par le routeur.
- **Création d'un guard** :

```typescript
// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    return request.headers.authorization === 'valid-token';
  }
}
```

- **Application du guard** :

```typescript
// users.controller.ts
import { UseGuards, Controller, Get } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  // methods
}
```

## Pipes

### Utilisation des Pipes
- **Définition** : les pipes transforment et valident les données des requêtes.
- **Création d'un pipe** :

```typescript
// parse-int.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```

- **Application du pipe** :

```typescript
// users.controller.ts
import { ParseIntPipe } from './parse-int.pipe';

@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `User with ID ${id}`;
  }
}
```

## Interceptors

### Utilisation des Interceptors
- **Définition** : les interceptors permettent de transformer les réponses ou d'exécuter du code avant/ après l'exécution de la requête.
- **Création d'un interceptor** :

```typescript
// logging.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`Execution time: ${Date.now() - now}ms`)));
  }
}
```

- **Application de l'interceptor** :

```typescript
// app.module.ts
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
```

## Exception Handling

### Gestion des Exceptions
- **Définition** : les exceptions permettent de gérer les erreurs et d'envoyer des réponses appropriées.
- **Exemple de filtre d'exceptions** :

```typescript
// http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const message = exception.message;

    response
      .status(status)
      .json({
        statusCode: status,
        message,
      });
  }
}
```

- **Application du filtre d'exceptions** :

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```

## Configuration et Environnement

### Gestion des Configurations
- **Utilisation de `@nestjs/config`** pour gérer les configurations de l'application.

```bash
npm install @nestjs/config
```

- **Configuration de l'application** :

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
```

```typescript
// example.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ExampleService {
  constructor(private configService: ConfigService) {}

  getDatabaseHost() {
    return this.configService.get('DATABASE_HOST');
  }
}
```

## Bibliothèques et Outils Complémentaires

- **TypeORM** : ORM pour la gestion des bases de données
- **Mongoose** : ODM pour Mongo

DB
- **Swagger** : documentation d'API
- **Bull** : gestion des files d'attente et des tâches en arrière-plan

```typescript
// example.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleService } from './example.service';
import { ExampleEntity } from './example.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  providers: [ExampleService],
})
export class ExampleModule {}
```