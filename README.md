# noauth
Spotify's public API without authentication

## Demo
```
node demo.js
```

## Usage
There are no dependencies, just import the class and use it.
```
import { noAuth } from "./noauth.js";
const no = new noAuth();
await no.auth();

let response = await no.api("https://api.spotify.com/v1/browse/new-releases?country=GB&limit=5&offset=0")
console.log(response);
```

## Install
If you want to use this in your project, there are prebuilt versions available.
* [noauth.min.js](noauth.min.js) - Minified version, 888 bytes

Import via the GitHub Pages URL:

```
https://kaangiray26.github.io/noauth/noauth.min.js
```
