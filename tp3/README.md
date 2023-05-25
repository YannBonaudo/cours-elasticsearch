# TP3

**Expliquez alors comment Elasticsearch stocke ses données et comment certaines de ces notions permettent de gagner en robustesse (en termes de sauvegarde et d’intégrité des données). 
Terminez en résumant les fonctionnalités de mise à l’échelle…**

Elasticsearch stocke les donnés en utilisant des fragments appelés "shards", qui sont répartis sur plusieurs noeuds. La réplication des shards assure la sauvegarde et l'intégrité des données en les copiant sur différents noeuds. Cela garantit la disponibilité des données même en cas de noeud défaillant.

Pour la mise à l'échelle, il offre la possibilité de partitionner horizontalement les données en ajoutant des noeuds, de répliquer les shards pour répartir la charge et d'exécuter des requêtes et agrégations distribuées pour accélérer les temps de réponse. La mise à l'échelle verticale est également possible en utilisant des machines plus puissantes. Ces fonctionnalités renforcent la robustesse et permettent à Elasticsearch de s'adapter à des charges de travail croissante et à de grandes quantités de données.

**Testez la Scroll API. D’après vos recherches pourquoi l’utiliser ? Est-ce le bon paramètre de recherche pour effectuer de la recherche paginée ?**

La Scroll api permet d'effectuer des recherche paginées efficaces sur un grand volume de données. Plus le volume de données est conséquent, plus il est préférable d'utiliser la scroll api afin de pouvoir naviguer rapidement entre les différentes pages de résultats.  Pour les resultats statiques, il est préférable d'utiliser un systeme de pagination traditionnel.

**Quel est le principal usage de kibana ?**

Kibana est principalement utilisé comme une interface de visualisation et de gestion des données pour Elasticsearch.

**Qu’est-ce qu’un Dashboard ?**

Un Dashboard Kibana est une interface visuelle personnalisé qui regroupe différentes visualisation et tableaux de bord pour fournir une vue synthétique des donnés d'elasticsearch.