 
## Chai-backend

Here we will create a backend for youtube clone

### Important notes:

1. when do we have to store the images we don't store it in the regular db we use any third parties cloud service for it like cloudinary or any other but still we have to store the images temporarily into a "temp" dir in the "public" dir.

2. the problem of git that it doesn't track empty dir and the "temp" will be empty so we make a ".gitkeep" file in it. 

3. There are many .gitignore generators that will generate the .gitignore file for you. for eg [.gitignore.io](https://www.toptal.com/developers/gitignore)

4. Here we will use Prettier in our project so that our code style will remain consistent otherwise sir said it will lead to a lot of conflicts and inconsistency.


## Connecting to the Database

1. Here we are using MonogoDB atlas which will provide me an online connection for it. 
2. Create a free cluster in your mongodb Atlas account and save the url in the .env "MONGODB_URI"

> "Datbase is always in some other continent it will take time to fullfil your job and hence use async-await and try-catch " by Hitesh Choudhary 

### From the index.js or main file

3. Always use ";" before writing "IIFE"(Immediately Invoked Functions) because there are chances that the previous line doesn't have that ";".


### From the other dir's index.js file

- check the ./src/db/index.js

### Using the experimental features of the dotenv (config using "import" statement)
- check the ./src/index.js 
- update the "dev" script from "nodemon src/index.js" to "nodemon -r dotenv/config --experimental-json-modules src/index.js"


## Bash shortcuts
1. copy entire content of the file using the bash to some other file

- `cp <sourceFile> <DestinationFile>` this will overwrite the "DestinationFile"	
- `cp -n <sourceFile> <DestinationFile>` this command won't overwrite the "DestinatioFile"


### Debugging Errors

1. Your password should not contain any special character which will lead to connection error while connecting thorugh uri if there is some character the replace the character with there *percentage-encoding* aka %(ASCII_number for that character).

### questions

1. what is the use of "main" file which we had given while initializing the npm.

*Ans*: The "main" file will load first whenever your package is called suppose you have built a package or module and the moment the user write `require(<your_package>)` or `import pkg from " <your_package>"` the file in the "main" field will execute.

2. Does on providing the "app.use()" in the main file of the server then the middlware applies to all the routes?

3. what are those methods in which data can be sent to the server?

 *Ans*:
 1. *URL* 
 2. *FormData*
 3. *JSON body* 

4. what is the siginificance of the limit option in express.urlencoded()?
*Ans*: This is to set the max amount of data can be sent.

5. Learn about the Error handling in apis?

6. what is the use of "extended" options in the express.urlencoded()?
*Ans*: 
- extended option controls the depth of the object graph that the middleware will try to construct from the URL-encoded data. If extended is false, the middleware will only allow arrays and primitive types. If extended is true, the middleware will allow nested objects.
- Generally we use the "qs" library for parsing the data in the url and converting it to js object.

7. What is the difference between *BSON* and *JSON* ?

### list of credentials considered headers from the client side 

 > Headers which client can send when Access-Control-Allow-Credentials is set to true

1. *Cookies*: These are small pieces of data stored on the user's computer by the web browser while browsing a website. Cookies often contain information that helps websites remember who a user is.

2. *TLS Client Certificates*: These are digital certificates used in Transport Layer Security (TLS) protocol to authenticate the identity of a client to a server. They provide a way for the server to verify the client's identity.

3. *Authentication Headers*	: These are headers in the HTTP request that contain user credentials. For example, the Authorization header might contain a bearer token or Basic Auth credentials.



### Folders to check

1. ./src/utils/ApiError.js
2. .src/models/user.model.js