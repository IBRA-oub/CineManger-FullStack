# 🎬 Cinéma Manager

## 📝 Contexte du projet

L'application de gestion de cinéma permet de gérer les films, les réservations, les salles, les séances et les places disponibles. Les administrateurs peuvent créer d'autres administrateurs, tandis que les clients peuvent créer leurs propres comptes. Les réservations ne peuvent être effectuées que si le client est authentifié.

## 💻 Technologies Utilisées

- **Backend**: Node.js avec Express.js
- **Base de données**: MongoDB
- **Authentification**: JWT (JSON Web Token)
- **Gestion des erreurs**: Middleware pour des réponses claires lors des opérations CRUD

## 🚀 Installation

1. Clonez le dépôt:
   ```bash
   git clone https://github.com/IBRA-oub/CineManager.git
   cd nom-du-repo
2. Installez les dépendances:
   ````bash
   npm install
3. Configurez la base de données:
Créez un fichier .env à la racine du projet et ajoutez vos variables d'environnement:
   ````bash
   PORT=votre_port
   MONGODB_URI=your_mongodb_connection_string
   ACCESSS_TOKEN_SECRET=your_jwt_secret
   EMAIL_USERNAME=your_email
   EMAIL_PASSWORD=your_password_of_application_that_gmail_give_to_you
4. Démarrez le serveur:
   ````bash
   npm start

## 📝 UML
1. diagrame de classe 
![diagramme de classe cinéManger](https://github.com/user-attachments/assets/7a9bd8d3-e74e-4c1c-b7dd-1549420d8b9c)
2. use cases
![use case cinéManger](https://github.com/user-attachments/assets/5879e217-af41-4ceb-81a4-a9f858d44d9c)

## 🔌 Endpoints API documentation 

https://documenter.getpostman.com/view/33302675/2sAXqy4Ky8
