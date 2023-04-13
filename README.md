# **Food Express Project**

## **Introduction**
"Food Express " is a full-stack project built as a graded assignment by an agile team of full-stack students. The project is comprised of two clients with a shared database, which enables placing and delivering food orders from customers to a restaurant, were the orders can be confirmed. The Agile process was carried out over ten workdays using a feature-by-feature approach.

## **Description**
To meet the technical requirements of the project, two separate clients with simple interfaces have been developed. A backend with APIs for these clients was developed, along with a shared database (MongoDB Atlas). Authentication is implemented to ensure that only authenticated users can access included features such as order placement, order tracking, and communication between customers and the restaurant.
The project provided an excellent opportunity for the team to apply their skills while enhancing their understanding of full-stack software development.

## **How to run locally**

1.	Clone the project
https://github.com/SimonLeBuono123/food-express-project.git

2.	Install local dependencies in the project directory
```bash
cd customers

    npm install
    npm install -D tailwindcss postcss autoprefixer
    npm install react-router-dom
    npm install react-easier
```
```bash
cd restaurant

    npm install
    npm install -D tailwindcss postcss autoprefixer
    npm install react-router-dom
    npm install react-easier
```
```bash
cd server

    npm i mongoose
    npm i express
    npm i nodemon
    npm i concurrently nodemon
    npm i express-session
```
3.	establish a connection to MongoDB Atlas either with your own free account (https://www.mongodb.com/cloud/atlas/register) 
4.	by replacing the URI in index.js (format: mongodb+srv://${name}@:${password}@${cluster-name}.a9dyz1j.mongodb.net/?retryWrites=true&w=majority)
 or request access from one of the project collaborators.
