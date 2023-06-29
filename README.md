# spotify-noauth
Spotify's public API without authentication

## Demo
```
node noauth.js
```

## Usage
There are no dependencies, just import the class and use it.
```
const no = new noAuth();
await no.auth();

let response = await no.api("https://api.spotify.com/v1/browse/new-releases?country=GB&limit=5&offset=0")
console.log(response);
```