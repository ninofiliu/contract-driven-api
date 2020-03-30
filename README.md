# Clean API

This minimal POC demonstrates a new way to code REST APIs that allows for a client-server communication that is both more simple and more powerful.

It consists in a simple todo app where only authenticated users can add and remove items.

The concept of this projects resides in the following:

- `/api` contains routes (aka API endpoints) **information**:
  - which routes exist
  - which routes require authentication
  - how input should look like
  - how output can look like
  - server controllers
- `/client` contains the client app. It relies on its `api` object which is **built based on the content** of `/api`
- `/server` contains the **brain** of the server app: controllers should be so simple they read as documentation, but this is where the complexity of the backend can hide
