# Graphql with Prisma

This project is made to show how to setup a Graphql server using graphql-yoga and connect it to the Prisma open-source database toolkit for database queries and transactions

## Prerequisites

* Node v13.7
* NPM
* Yarn (preferred dependency manager, but you can use NPM, whichever you prefer)
* Mysql
  * A database

## Installation

Clone this repository

```bash
git clone https://github.com/mrmunar/graphql-with-prisma.git
```

Create a `.env` file under the `prisma` folder with the following variables and set your database credentials:

```env
# Example database credentials
DATABASE_URL="mysql://root:123456@localhost:3308/testdb?schema=public"

NODE_ENV="development"
```

Install the dependencies

```bash
yarn install
```

Generate Prisma files and functions. This lets you use Prisma commands for interacting with the database.

```bash
yarn run prisma generate
```

Migrate database schema

```bash
yarn run prisma-migrate-up
```

Start the Graphql server. This will spin up a server using port 4000.

```bash
yarn start
```

## Usage

Access the Graphql server (Playground)

```bash
http://localhost:4000
```

There are 4 APIs available:
* `createUser`
* `getUsers`
* `createPost`
* `getPosts`

#### createUser
Request:
```javascript
mutation {
  createUser(data: { firstname: "Migs", lastname: "Munar" }) {
    id
    firstname
    lastname
  }
}
```
Response:
```json
{
  "data": {
    "createUser": {
      "id": "18",
      "firstname": "Migs",
      "lastname": "Munar"
    }
  }
}
```

#### getUsers
Request:
```javascript
query {
  getUsers {
    id
    firstname
    lastname
  }
}
```
Response:
```json
{
  "data": {
    "getUsers": [
      {
        "id": "1",
        "firstname": "firstname1",
        "lastname": "lastname1"
      },
      {
        "id": "2",
        "firstname": "firstname2",
        "lastname": "lastname2"
      },
      {
        "id": "3",
        "firstname": "firstname3",
        "lastname": "lastname3"
      },
      ...
    ]
  }
}
```

#### createPost
Request:
```javascript
mutation {
  createPost(data: {title: "test", content: "post"}) {
    id
    title
    content
  }
}
```
Response:
```json
{
  "data": {
    "createPost": {
      "id": "14",
      "title": "test",
      "content": "post"
    }
  }
}
```

#### getPosts
Request:
```javascript
query {
  getPosts {
    id
    title
    content
  }
}
```
Response:
```json
{
  "data": {
    "getPosts": [
      {
        "id": "1",
        "title": "title1",
        "content": "content1"
      },
      {
        "id": "2",
        "title": "title2",
        "content": "content2"
      },
      {
        "id": "3",
        "title": "title3",
        "content": "content3"
      },
      ...
    ]
  }
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)