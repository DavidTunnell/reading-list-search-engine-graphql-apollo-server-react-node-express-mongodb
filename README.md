# Reading List Search Engine - GraphQL, Apollo Server, React, Node, Express, MongoDB

AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas. Use the [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) walkthrough for instructions.

Get User:

```
query {
  user(userId: "6175968953cf7f1e50489e24") {
        _id
        username
        email
        password
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
    }
  }
}
```

Get Users:

```
query Query {
  users {
    _id
    username
    email
    password
    savedBooks {
        authors
        description
        bookId
        image
        link
        title
    }
  }
}
```

Create User:

```
  mutation {
    addUser(username: "David", email: "david@gmail.com", password: "12345") {
      token
      user {
        _id
        username
      }
    }
  }
```

Login:

```
  mutation {
    login(email: "david@gmail.com", password: "12345") {
      token
      user {
        _id
        username
      }
    }
  }
```

Delete User:

```
  mutation {
    removeUser(userId: "61742c1827db1e3b9c676aa6") {
        _id
        username
    }
  }
```

Add Book to User Collection:

```
    mutation addBook(
        $userId: ID!
        $authors: [String]!
        $description: String!
        $bookId: String!
        $image: String!
        $link: String!
        $title: String!
    ) {
        addBook(
            userId: $userId
            authors: $authors
            description: $description
            bookId: $bookId
            image: $image
            link: $link
            title: $title
        ) {
            _id
            username
            email
            savedBooks {
                authors
                description
                image
                link
                title
                bookId
            }
        }
    }
 #Variables:
 {
  "userId": "61760fc0a918b06780bb9580",
  "authors": ["2"],
  "description": "2",
  "bookId": "2",
  "image": "2",
  "link": "2",
  "title": "2"
}

```

Remove a Book from User Collection:

```
  mutation {
    removeBook(userId: "6175af033c74263a788b3daa", bookId: "6175af203c74263a788b3dad") {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        image
        link
        title
        bookId
      }
    }
  }
```

# Installation

-   for dev: http://localhost:3000/ -react and http://localhost:3001/graphql API server
