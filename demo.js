import { noAuth } from "./noauth.js";

const no = new noAuth();
await no.auth();

console.log(await no.api("https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n"));