# Résumé Complet de Kubernetes

## Concepts de Base

### Introduction à Kubernetes
- **Kubernetes** est un système open-source pour automatiser le déploiement, l'expansion et la gestion des applications conteneurisées.
- **Philosophie** : gérer des conteneurs à grande échelle avec une architecture décentralisée.
- **Principes** : Orchestration de conteneurs, haute disponibilité, gestion des ressources, et mise à l'échelle automatique.

## Composants Clés

### Cluster Kubernetes
- **Node** : machine (physique ou virtuelle) sur laquelle Kubernetes exécute des conteneurs.
- **Master Node** : gère le cluster et orchestre les opérations sur les nœuds.
- **Worker Node** : exécute les conteneurs et gère les tâches liées aux applications.

### Pod
- **Définition** : plus petite unité déployable dans Kubernetes. Un Pod peut contenir un ou plusieurs conteneurs partageant le même réseau et stockage.
- **Configuration** : fichier YAML pour définir les spécifications du Pod.

```yaml
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer
    image: nginx
```

### Service
- **Définition** : expose les Pods en tant que services réseau. Permet aux Pods de communiquer entre eux et avec le monde extérieur.
- **Configuration** : fichier YAML pour définir les spécifications du Service.

```yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myservice
spec:
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
```

### Deployment
- **Définition** : gère le déploiement et la mise à jour des Pods. Assure la disponibilité continue de l'application.
- **Configuration** : fichier YAML pour définir les spécifications du Deployment.

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mydeployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: mycontainer
        image: nginx
```

### Namespace
- **Définition** : divise les ressources du cluster en espaces de noms logiques pour mieux organiser et isoler les ressources.
- **Configuration** : fichier YAML pour définir les spécifications du Namespace.

```yaml
# namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: mynamespace
```

## Configuration et Déploiement

### Utilisation de `kubectl`
- **Commandes de Base** :
  - `kubectl get pods` : liste tous les Pods.
  - `kubectl describe pod <pod-name>` : affiche les détails d'un Pod spécifique.
  - `kubectl apply -f <file.yaml>` : applique les configurations à partir d'un fichier YAML.
  - `kubectl delete -f <file.yaml>` : supprime les ressources définies dans un fichier YAML.

### Configuration des Pods
- **Volumes** : gestion du stockage persistant pour les Pods.

```yaml
# pod-with-volume.yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer
    image: nginx
    volumeMounts:
    - mountPath: "/usr/share/nginx/html"
      name: myvolume
  volumes:
  - name: myvolume
    emptyDir: {}
```

- **Secrets et ConfigMaps** : gestion des configurations et des données sensibles.

```yaml
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myconfig
data:
  key: value
```

```yaml
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  password: dXNlcjpwYXNzd29yZA==  # base64 encoded value
```

## Gestion des Ressources

### Autoscaling
- **Horizontal Pod Autoscaler** : ajuste le nombre de Pods en fonction de l'utilisation des ressources.

```yaml
# hpa.yaml
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: myhpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: mydeployment
  minReplicas: 1
  maxReplicas: 10
  targetCPUUtilizationPercentage: 50
```

### Rolling Updates
- **Déploiements Rolling Updates** : met à jour les Pods de manière incrémentale pour éviter les interruptions de service.

### Load Balancing
- **Services de Type LoadBalancer** : répartit le trafic entre plusieurs Pods pour assurer la disponibilité.

```yaml
# service-loadbalancer.yaml
apiVersion: v1
kind: Service
metadata:
  name: myservice
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
```

## Sécurité

### Gestion des Accès
- **RBAC (Role-Based Access Control)** : contrôle les autorisations des utilisateurs et des applications.

```yaml
# role.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: myrole
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
```

```yaml
# rolebinding.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: myrolebinding
subjects:
- kind: User
  name: myuser
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: myrole
  apiGroup: rbac.authorization.k8s.io
```

### Network Policies
- **Définition** : contrôle le trafic réseau entre les Pods et les services.

```yaml
# networkpolicy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: mynetworkpolicy
spec:
  podSelector:
    matchLabels:
      app: myapp
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: myotherapp
    ports:
    - protocol: TCP
      port: 80
```

## Outils Complémentaires

### Helm
- **Définition** : gestion des packages Kubernetes avec des charts Helm.
- **Installation et Utilisation** :

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
helm repo add stable https://charts.helm.sh/stable
helm install myrelease stable/nginx
```

### Prometheus et Grafana
- **Définition** : outils pour la surveillance et l'analyse des performances.
- **Installation via Helm** :

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus
helm install grafana grafana/grafana
```

### kubectl plugins
- **Krew** : gestionnaire de plugins pour `kubectl`.

```bash
kubectl krew install krew
kubectl krew search
```
