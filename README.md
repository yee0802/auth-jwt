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

That is then Base64 Encoded into a string (`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`) and forms the first part of the token.

###

