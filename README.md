# Ownr Developer Candidate Coding Test

Congratulations, you have been asked to complete our Full Stack candidate proficiency test! 

You will have **48 hours** starting when you receive this test to return the full working source code as a Pull Request against a fork of this repository. Please thoroughly read the attached set of instructions. You will be creating a mini web app that uses React, Node, Express, and Postgres. This app will consist of a backend Express server that will deliver a React app to be rendered in the browser. 

The app that you will be building is a simple image carousel that allows the user to pick between cat or shark photos and then cycle through those photos. An example of a running version of this can be seen here:
https://founded.media/hiring/videos/cat-shark-app.mp4

In addition, you will be adding administrative APIs that allow users to add or delete animal categories, updating the categories available in the UI. 


## Requirements

**Core Application**

The Express server, besides delivering whats required for React, should also provide an API endpoint that will return lists of photo URLs that are retrieved from a database. #DONE except database

 Your React app should make a request to your API endpoint to retrieve a photo list. During this request the React app should show a loading state. #DONE

  Once the photo list has been retrieved the loading state should dismiss and the first photo should be shown. The user should now be able to cycle through the photos using left and right arrow buttons.  #DONE
  
  The user can use the UI to toggle between cat photos, shark photos, or both (when both selected they should arrive in a random order). #DONE
  
   After each change to the desired list the loading state should be shown just like during the initial load and a new request to the photo API endpoint should be made (i.e. Do not cache the photo lists). #DONE

**Administrative Endpoints**

The Express server should also expose a number of administrative endpoints. The primary responsibility of these endpoints is to enable the addition or deletion of additional animal categories. When a category is added or removed, the application should be updated to reflect this (e.g. If the `dog` category is added, the Core Application's UI should display buttons for cats, dogs, and sharks. Categories are shuffled together based on active categories). A UI for the Admin endpoints is NOT requlred (but can be added as a bonus!). #DONE

These endpoints should be protected, only allowing requests accompanied by a valid authentication token. The starter code exposes a route, `GET /auth` that will return an auth token. This token should be used to authenticate requests. #DONE 

### Do

- Be mindful of when to use props vs. state vs. Hooks vs. Context
- Be RESTful
- ES6+
- Use JS best practices
- Be creative

### Don't

- Use a third party library for the carousel (libraries for the minor components can be used to save time)
- Over think the problem, there's no trick here

### BONUS

- Unit tests
- Build an admin page for the administrative API
- Improve security of token generation in `auth.js` or add a login
- Update docker workflow with development and production compose files
- Clean up the app structure
- Other useful features

## Instructions

### Boilerplate rundown
- This assignment uses Docker to help pre-load a database with data. Ensure that your machine can run the docker engine at a minimum. Alternatively, the `/data` folder contains SQL scripts to seed a local Postgres database.  
- Create React App is also initialized in the `/client` folder. The CRA build can be statically hosted on the express server. 

### Getting started

- Fork or clone this repository.
- Run `docker-compose build` to build your docker environment.
- Use `docker-compose up` to enable your environment. This will start your Express server and a Postgres database. *Note*: If you don't want to constantly rebuild your image, you can run the client and server outside of docker for development. 
- The Postgres database will be pre-loaded with two tables. The `animal_categories` table contains a table of animal categories. The `animal_photos` table contains animal photo urls.
- The Photo List below is an example request body to the administrative endpoint - feel free to use it to test adding new animal cantegories. 
- Complete the assignment in a separate branch in your version of the repository.

#### Hints
- The on your local environment, the Postgres docker image will be available on port `localhost:5433` with username/password of `postgres/postgres`. Within the docker network, the database is located on `postgres:5432`. 
- If you are having trouble setting up the docker environment, feel free to use the scripts to load a local database and develop locally. 

### Submission

- Create a PR for `your new branch` -> `master` **in your own repository**
- Do not PR in this repository
- If you require other accomodations, please let us know


## Photo Lists

```json
{ 
  "dogs": [ ],
 "dinosaurs": [ ]
}
```
