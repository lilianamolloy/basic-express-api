# Create basic Express API

1. Create directory
2. create api.js within derectory
3. ``` $ npm init ```
4. ``` $ npm install express --save ``` (--save specifies to save in package.json - this is thedefault anyways) in package.json:
```
"dependencies": {
    "express": "^4.16.4"
  }
  ```
5. Install nodemon assists with development which provides live re-loading. ``` $ npm i nodemon -D ```

In package.json in scripts key add :
```
"start": "nodemon api.js",
```
Like so:
```
"scripts": {
    "start": "nodemon api.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

6. Now you can use the start keyword to run the server:
``` 
$ npm start
```

7. In api.js write code to handle routes