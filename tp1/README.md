# cours-elasticsearch

## Setup elasticsearch

Télécharger l'image d'elasticsearch sur docker: 
```
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.7.1
```

Créer un container de test avec l'image 
```
docker run --name es-node01 --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -t docker.elastic.co/elasticsearch/elasticsearch:8.7.1
```

Sauvegarder les credentials reçus : 
![image](https://github.com/YannBonaudo/cours-elasticsearch/assets/45734971/aebc5a9d-b58c-4774-a93f-ff91bce9d6e0)


Télécharger l'image de kibana sur docker dans un autre terminal
```
docker pull docker.elastic.co/kibana/kibana:8.7.1
```
créer un container pour kibana avec l'image

```
docker run --name kib-01 --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.1
```

Se rendre sur le lien reçu et copier l'enrollment token puis se connecter avec les identifiants :
http://localhost:5601/?code=282366

## Setup kaggle Dataset

Créer un compte kaggle :
https://www.kaggle.com/

Ajouter un dataset :
![image](https://github.com/YannBonaudo/cours-elasticsearch/assets/45734971/409c496b-2bef-4a10-8f23-1570aa8007ce)
