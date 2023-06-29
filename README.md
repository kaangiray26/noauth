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

## How it works
noauth works by leveraging the fact that you can use Spotify without an account on your browser. It uses requests the endpoint `https://open.spotify.com/search`, which sends a response that includes `accessToken` and `clientId`. These are then used to make GET requests to the API. However, this method only allows you to make anonymous requests, which means you can't access any user data or make any POST requests.