# Features of the application

- Returns the username, followers and follows for Instagram, LinkedIn, Facebook
- Returns active time and date when request is made
- Return value from URL as testing for API learners




# Process

1. install "dotenv" to access the environment variables in the (process.env), just write the "require("env").config()" at the top of the "index.js"
2. if you want to use "Import" style for bringing things then you have to add the "  "type": "module" " in the package.json();
3. You can use "Json Formatter" site to format the response of an api and understand that what it is ?


# Creating Frontend

1. by writing "npm create vite@latest ." by this you can create the files in the same directory 
2. for sending web request you can use the "axios" library (because it provide many extra benefits over the fetch axios also directly parses to json() and make the data available in the "data" object withing the response)


# CORS (Two methods)

## Proxy (comes with every bundler just search in their docs for that)

### what is a proxy ?


#### Problem without using proxy ?

- `First benefit` Our forntend can be served at different ports which may be not in our control like if we deployed it on vercel then it will run it on its own port so whiteListing (tell your server already that which origin's request you have to accept and which not you can also mention which methods you can allow from which origin because before making any request there is a preflight request which contains "orign" , headers, of your request whcih goes to the server ) is not very optimal approach so we introudce a proxy a mask origin in our frontend, and by this whatever request we made if it doesn't contain any origin like ("   fetch("/api/login")  ") then it will search for that proxy origin to send the request on and as a proxy we will provide the server's origin.

- `Second benefit` The server won't think that the request is coming from some other origin it will think that it is coming from it's own origin.


### In vite
- [In vite we did it in vite.config.js](https://vitejs.dev/config/server-options.html#server-proxy)

## cors (npm package)