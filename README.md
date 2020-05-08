# Contract-driven API

This minimal proof of concept demonstrates a pattern to code REST APIs that allows for a client-server communication that is **less error prone, faster to code, and more powerful**.

## Why

Usually there is only a few types of HTTP exchange that can happen: authenticated POST request, non-authenticated GET request, file upload, etc. They should be implemented only once.

Which API route exists and how it looks like should not be a matter of code. This information should reside in a configuration object - the contract - that is shared between the client and the server.

## How

The concept resides in having the following components:

- **API contract**: contains routes (aka API endpoins) informations:
  - Which routes exist
  - How they behave
  - How input and output look like
- For each type of HTTP exchange there is
  - a generic **caller** in the client
  - a generic **responder** in the server
- Only valid API calls are exposed and allowed, through:
  - An **`api`** object in the client
  - A **`router`** object in the server
  - These should **not change** if a route is added, deleted or modified

## What

This repository is an implementation of the contract-driven API pattern explained above. It consist in a tasklist app: a user sign up, log in, and gain the right to edit a task list.

The types of HTTP exchanges are:

- default post, for signup and login
- authenticated get, to retrieve the tasks
- authenticated post, to save the tasks

The pattern code components described above can be found as follow:

- API contract: [./contract/*](./api)
  - Uses an OpenAPI spec file to document
    - Which route exists
    - Schema for input and output
    - Possible errors
  - Controllers, in [./contract/controllers](./contract/controllers) are code, but they should read as english, as all implementation details are hidden in [./server](./server). No need to maintain docs that explain what routes do!
- Client callers: [./client/callers.js](./client/callers.js)
- Server responders: [server/responders/index.js](./server/responders/index.js)
- Client `api` object: [./client/api.js](./client/api.js)
- Server `router` object: transparently observable in [./server/main.js](./server/main.js)

Stack:
- [oa-client](https://github.com/ninofiliu/oa-client) (other project of the author!) to create the client api object
- [Vue](https://vuejs.org/)
- Pure [Node](https://nodejs.org/)
- [LowDB](https://github.com/typicode/lowdb)

Run locally:

```sh
git clone git@github.com:ninofiliu/contract-driven-api
cd contract-driven-api
npm install
npm run build
npm run start
```
