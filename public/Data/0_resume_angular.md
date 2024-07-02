# Résumé Complet d'Angular

## Concepts de Base

### Introduction à Angular
- **Angular** est un framework JavaScript (ou TypeScript) pour la création d'applications web dynamiques et évolutives.
- Développé et maintenu par Google, Angular est conçu pour construire des applications monopage (SPA) complexes.

## Configuration de l'Environnement

### Création d'un Projet Angular
- **Utilisation de Angular CLI** : un outil de ligne de commande pour créer, développer et gérer des applications Angular.

```bash
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve
```

## Composants

### Composants Angular
- **Définition** : les composants sont des blocs de construction réutilisables pour les UI en Angular.
- **Création d'un composant** :

```bash
ng generate component my-component
```

- **Syntaxe d'un composant** :

```typescript
// my-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  name: string = 'Alice';
}
```

```html
<!-- my-component.component.html -->
<h1>Hello, {{ name }}!</h1>
```

## Directives

### Directives Structurelles et d'Attribut
- **Directives Structurelles** : changent la structure du DOM (e.g., `*ngIf`, `*ngFor`).

```html
<!-- *ngIf -->
<div *ngIf="isVisible">This is visible</div>

<!-- *ngFor -->
<ul>
  <li *ngFor="let item of items">{{ item.name }}</li>
</ul>
```

- **Directives d'Attribut** : modifient l'apparence ou le comportement des éléments (e.g., `[ngClass]`, `[ngStyle]`).

```html
<!-- [ngClass] -->
<div [ngClass]="{ 'active': isActive }">Styled div</div>

<!-- [ngStyle] -->
<div [ngStyle]="{ 'color': color }">Styled div</div>
```

## Services et Injection de Dépendances

### Création et Utilisation de Services
- **Définition** : les services sont utilisés pour partager des données et des logiques entre les composants.

```typescript
// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Item 1', 'Item 2'];

  getData(): string[] {
    return this.data;
  }
}
```

- **Injection de Service dans un Composant** :

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
```

## Modules

### Utilisation des Modules
- **Définition** : les modules regroupent des composants, des directives, des pipes, et des services liés.

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Routage

### Utilisation du Routage
- **Définir les Routes** :

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

- **Utilisation des Liens de Navigation** :

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
```

## Pipes

### Utilisation des Pipes
- **Définition** : les pipes transforment les données pour l'affichage dans les templates.

```html
<!-- Exemple d'utilisation de pipes -->
<p>{{ currentDate | date:'short' }}</p>
<p>{{ message | uppercase }}</p>
```

## Formulaires

### Formulaires Réactifs et Basés sur les Templates
- **Formulaires Réactifs** : offrent une plus grande flexibilité pour la validation et la gestion des formulaires.

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<!-- app.component.html -->
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <label for="name">Name</label>
  <input id="name" formControlName="name">
  <label for="email">Email</label>
  <input id="email" formControlName="email">
  <button type="submit">Submit</button>
</form>
```

### Formulaires Basés sur les Templates

```html
<!-- app.component.html -->
<form #form="ngForm" (ngSubmit)="onSubmit(form)">
  <label for="name">Name</label>
  <input id="name" name="name" ngModel required>
  <label for="email">Email</label>
  <input id="email" name="email" ngModel required email>
  <button type="submit">Submit</button>
</form>
```

## Bibliothèques et Outils Complémentaires

- **Angular Material** : composants UI pour Angular
- **RxJS** : gestion des événements asynchrones
- **NgRx** : gestion d'état global avec Redux
- **HttpClient** : requêtes HTTP

```typescript
// Exemple d'utilisation de HttpClient
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.example.com/data')
      .subscribe(response => {
        this.data = response;
      });
  }
}
```