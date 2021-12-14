# Project REST-Rant

REST-Rant is an app where users can review restaurants.

##Tech Usage
**CSS Framework**: Bootstrap

**Stack**: MongoDB, Express, NodeJS

**Server-Side Rendering**: JSX

**Node Modules**: method-override, dotenv, express-react-views

|Method	|Path	|Purpose|
|-------|--------|--------|
|GET	|/	|Home page|
|GET	|/places	|Places index page|
|POST	|/places	|Create new place|
|GET	|/places/new	|Form page for creating a new place|
|GET	|/places/:id	|Details about a particular place|
|PUT	|/places/:id	|Update a particular place|
|GET	|/places/:id/edit	|Form page for editing an existing place|
|DELETE	|/places/:id	|Delete a particular place|
|POST	|/places/:id/rant	|Create a rant (comment) about a particular place|
|DELETE	|/places/:id/rant/:rantId	|Delete a rant (comment) about a particular place|
|GET	|*|	404 page (matches any route not defined above)|

Each restaurant (place) should have a name, city, state, and cuisines data associated with it.