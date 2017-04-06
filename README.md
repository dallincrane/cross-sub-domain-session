# Cross Sub Domain Session

This repo demonstrates the basics of setting up a single session that is shared across all sub domains using `express`, `knex`, `pg`, `express-session`, `cors`, and `passport`.

## Development Setup

1. duplicate the `.env.sample` file, renaming it to `.env`
1. create a database in postgres named `example_development`
1. replace the values marked `__replace_me__` in `.env`
1. run `npm install` or `yarn`
1. run `npm start`

NOTES
* The CORS allowed origins for development is set as '\*', this allows for the apps that will be running on sub domains to be developed on `localhost` (without a sub domain).
* The session domain for development is not defined and will default to `localhost`

## Production Setup
_This is to demonstrate the relevant production config. This code is not production ready!_

1. duplicate the `.env.sample` file, renaming it to `.env`
1. create a database in postgres named `example_production`
1. replace the values marked `__replace_me__` in `.env`
1. set the `NODE_ENV` in `.env` equal to `production`
1. change the regexp in `/config/cors.config.js` to match your own domain
1. change the cookie domain in `/config/session.config.js` to match your own domain
1. push to host server and run

NOTES
* This example allows sub domains only. If the origin value was set to the regexp `/\example\.com$/` which is missing the first `.`, then someone from `myexample.com` could potentially make requests. For more information on why sub domains are great, especially www, read https://www.netlify.com/blog/2017/02/28/to-www-or-not-www

---

## Client Test Code
Don't forget that we need to configure our client requests for CORS since we will be sending requests across sub domains. Here are some examples that should work the the code already in this project (don't forget to change the `api.example.com` domains below to match your own domain):

1. Create a person
  ```javascript
  let postPersonOptions = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: '{"name":"Lawyer Morty","email":"morty@example.com","password":"password"}',
    mode: 'cors',
    credentials: 'include'
  }

  fetch('https://api.example.com/v1/persons', postPersonOptions)
    .then(result => console.log(result))
    .catch(err => console.error(err))
  ```

1. Log that person in
  ```javascript
  let loginPersonOptions = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: '{"email":"morty@example.com","password":"password"}',
    mode: 'cors',
    credentials: 'include'
  }

  fetch('https://api.example.com/v1/auth/login', loginPersonOptions)
    .then(result => console.log(result))
    .catch(err => console.error(err))
  ```

1. Get info of person logged in
  ```javascript
  let getMeOptions = { mode: 'cors', credentials: 'include' };

  fetch('https://api.example.com/v1/persons/me', getMeOptions)
    .then(result => console.log(result))
    .catch(err => console.error(err));
  ```
