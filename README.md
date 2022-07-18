# driven-pass
# <p align = "center"> Projeto Driven Pass </p>

<p align="center">
   <img src="https://images.emojiterra.com/twitter/512px/1f512.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Manuella Dias Cruz-4dae71?style=flat-square" />
</p>


##  :clipboard: Description

API to store and manage confidential information regarding Website credentials, Money Cards, Identity Documents, Wifis and Text Notes.

***

## :computer:	 Technologies

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- SQL
- Migrations with Prisma

***

## :rocket: Rotas

### Authentication

```yml
POST /sign-up
    - Route to user register
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum"
      }
```
    
```yml 
POST /login
    - Route to sign in
    - headers: {}
    - body: {
       "email": "lorem@gmail.com",
       "password": "loremipsum"
      }
```

### Money Cards
Card type should be: CREDIT, DEBIT or BOTH.

```yml 
POST /cards (authenticated)
    - Insert a card
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Card name",
        "number": "1234 3456 5678 7890",
        "cardholderName": "Lorem Ipsum",
        "securityCode": "123",
        "expirationDate": "01/23",
        "password": "loremipsum",
        "isVirtual": false,
        "type": "CREDIT"
      }
```

```yml
GET /cards/:userId (authenticated)
    - Route to list all user's cards
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /card/:id (authenticated)
    - Route to get a especific user card by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /card/:id (authenticated)
    - Route to delete a especific user card by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Credentials

```yml 
POST /credentials (authenticated)
    - Insert a credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Lorem",
        "url": "http://www.lorem.com",
        "username": "lorem2@gmail.com",
        "password": "loremipsum"
      }
```

```yml
GET /credentials/:userId (authenticated)
    - Route to list all user's credentials
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /credential/:id (authenticated)
    - Route to get a especific user credential by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /credential/:id (authenticated)
    - Route to delete a especific user card by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Documents
Document type should be: RG, CPF or CNH.

```yml 
POST /documents (authenticated)
    - Insert a document
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "number": "123456",
        "type": "CPF"
      }
```

```yml
GET /documents/:userId (authenticated)
    - Route to list all user's documents
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /document/:id (authenticated)
    - Route to get a especific user document by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /document/:id (authenticated)
    - Route to delete a especific user document by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Notes

```yml 
POST /notes (authenticated)
    - Insert a note
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "TODO List",
        "content": "- Groceries, - Drugstore, - Gym, - Work, - Kids school meeting"
      }
```

```yml
GET /notes/:userId (authenticated)
    - Route to list all user's notes
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /note/:id (authenticated)
    - Route to get a especific user note by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /note/:id (authenticated)
    - Route to delete a especific user note by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Wifi

```yml 
POST /wifis (authenticated)
    - Insert a wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Home",
        "network": "loremipsum"
        "password": "loremipsum"
      }
```

```yml
GET /wifis/:userId (authenticated)
    - Route to list all user's wifis
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /wifi/:id (authenticated)
    - Route to get a especific user wifi by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /wifi/:id (authenticated)
    - Route to delete a especific user wifi by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

***

## 🏁 Running

This projects uses [Create React App](https://github.com/facebook/create-react-app), look for the newer verson of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) when you run it locally.

Clone this repo on your machine:

```
git clone https://github.com/ManuDiasCruz/driven-pass.git
```

Then run the bellow command to install packages and dependencies:

```
npm install
```

To initialize the server jst run:
```
npm run dev
```
