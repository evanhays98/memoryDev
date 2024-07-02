# Résumé Complet de Vue.js

## Concepts de Base

### Introduction à Vue.js

- **Vue.js** est un framework JavaScript pour créer des interfaces utilisateur et des applications monopage (SPA).
- Utilise des composants pour construire des interfaces dynamiques et réactives.

## Configuration de l'Environnement

### Création d'un Projet Vue.js

- **Utilisation de Vue CLI** : un outil pour initialiser et configurer des projets Vue.js.

```bash
npm install -g @vue/cli
vue create my-project
cd my-project
npm run serve
```

## Composants

### Composants Vue.js

- **Définition** : les composants Vue.js sont des objets JavaScript avec des propriétés spéciales
  comme `data`, `methods`, et `computed`.

```vue

<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Alice'
      };
    }
  };
</script>

<style scoped>
  /* Styles spécifiques au composant */
</style>
```

## Directives

### Directives Vue.js

- **Utilisation des directives** comme `v-bind`, `v-model`, `v-for`, `v-if`, etc.

```vue

<template>
  <div>
    <!-- Lier les attributs -->
    <img v-bind:src='imageSrc' alt='Vue logo' />

    <!-- Data Binding -->
    <input v-model='message' />

    <!-- Boucle sur un tableau -->
    <ul>
      <li v-for='item in items' :key='item.id'>{{ item.text }}</li>
    </ul>

    <!-- Conditionnel -->
    <p v-if='isVisible'>This is visible</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'logo.png',
        message: '',
        items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
        isVisible: true
      };
    }
  };
</script>
```

## Événements

### Gestion des Événements

- **Attacher des événements** avec `v-on` ou la syntaxe abrégée `@`.

```html

<template>
  <button @click='handleClick'>Click me</button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        alert('Button clicked');
      }
    }
  };
</script>
```

## Props et État

### Props

- **Définition** : les props permettent de passer des données d'un composant parent à un composant enfant.

```html

<template>
  <ChildComponent :message='parentMessage' />
</template>

<script>
  import ChildComponent from './ChildComponent.vue';

  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        parentMessage: 'Hello from parent'
      };
    }
  };
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
  export default {
    props: ['message']
  };
</script>
```

### État

- **Utilisation de `data` pour définir l'état local d'un composant.**

```html

<template>
  <div>
    <p>{{ count }}</p>
    <button @click='increment'>Increment</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };
</script>
```

## Computed et Watchers

### Computed Properties

- **Définition** : les propriétés calculées sont des données dérivées qui sont mises en cache en fonction des
  dépendances.

```html

<template>
  <div>
    <p>Original: {{ message }}</p>
    <p>Reversed: {{ reversedMessage }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello'
      };
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse().join('');
      }
    }
  };
</script>
```

### Watchers

- **Définition** : les watchers surveillent les changements dans les données et exécutent des actions en réponse.

```html

<template>
  <input v-model='query' placeholder='Type something...' />
</template>

<script>
  export default {
    data() {
      return {
        query: ''
      };
    },
    watch: {
      query(newValue, oldValue) {
        console.log(`Query changed from ${oldValue} to ${newValue}`);
      }
    }
  };
</script>
```

## Vue Router

### Utilisation de Vue Router

- **Installation et configuration** :

```bash
npm install vue-router
```

- **Définir les routes** :

```javascript
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
});
```

```html
<!-- App.vue -->
<template>
  <div id='app'>
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>
```

## Vuex

### Utilisation de Vuex

- **Installation et configuration de Vuex pour la gestion d'état global** :

```bash
npm install vuex
```

- **Configurer Vuex** :

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
```

```html
<!-- Exemple de composant utilisant Vuex -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click='increment'>Increment</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapActions(['increment'])
    }
  };
</script>
```

## Bibliothèques et Outils Complémentaires

- **Vuetify** : framework de composants UI pour Vue.js
- **Axios** : requêtes HTTP
- **Vue Router** : gestion des routes
- **Vuex** : gestion de l'état global
- **Vuelidate** : validation des formulaires

```javascript
import axios from 'axios';
import Vue from 'vue';

new Vue({
  el: '#app',
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios.get('https://api.example.com/data')
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
});
```