# JSON Web Tokens

## Learning Objectives

- Explain a Bearer Authentication flow
- Use a third-party library to create and verify JSON Web Tokens

## Introduction

There are various types of authentication systems; we'll be focusing on a common one referred to as *Bearer Authentication*. The core of the process works like this:
1. A user enters their login details into a form
2. The client sends the credentials to a server in the body of a request to an API
3. The server checks the credentials are correct
4. The server creates an access token for the user and sends it back to the client
5. The client saves the token and sends it in a request header when the user tries to access protected areas of the app

We can visualise the process like this:

![](./assets/Auth_Flow.png)

One of the most common types of tokens are called *JSON Web Token's*, a.k.a JWT's.

A JWT is comprised of 3 separate pieces of JSON, each of them encoded and placed into a string separated by dots.

The final token will have a structure that looks like `xxxxx.yyyyy.zzzzz`

The three pieces of JSON are:
1. Header (`xxxxx`)
2. Payload (`yyyyy`)
3. Signature (`zzzzz`)

### Header

The header usually contains two properties: the type of token (JWT) and the signing algorithm to use. For example:
```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

That is then Base64 encoded into a string (`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`) and forms the first part of the token.

### Payload

The payload usually contains information about an entity that is required for the app to function; for example, user identification data. Do not store sensitive information, such as passwords, in tokens.
```json
{
    "id": 13,
    "username": "nathank"
}
```

That is then Base64 encoded into a string (`eyJpZCI6MTMsInVzZXJuYW1lIjoibmF0aGFuayJ9`) and forms the second part of the token.

### Signature

The signature is the result of a hashing function that takes in 2 parameters: the encoded header and payload separated by a dot, and a "secret phrase" - the secret is just a string of text that only the server knows, kind of like a password.

A signature might look something like this: `TSh7SwNomgPOcdK9CLIhWT2m_UVay_RzNLrsu9gCwl0`

So the end result, our JSON Web Token, looks like this: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoibmF0aGFuayJ9.TSh7SwNomgPOcdK9CLIhWT2m_UVay_RzNLrsu9gCwl0`

Notice the dots separating each section! `Header.Payload.Signature`

## Breathe!

You don't need to concern yourself with the exact methods for creating a JWT or hashing a signature, there are vetted libraries to take care of this process for us.
