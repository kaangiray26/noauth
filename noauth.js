class noAuth {
    constructor() {
        this.accessToken = null;
        this.clientId = null;
    }

    async auth() {
        let re = /<script id="session" data-testid="session" type="application\/json"\>({.*})<\/script>/;
        let response = await fetch("https://open.spotify.com/search")
            .then(res => res.text())
            .then(str => str.match(re)[1])
            .then(json => JSON.parse(json))
            .catch(err => {
                console.log(err);
                return null;
            });

        if (!response) {
            console.log("Failed to get access token");
            return;
        }

        this.accessToken = response.accessToken;
        this.clientId = response.clientId;
    }

    async api(url) {
        return await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    async capacitor_api(url, CapacitorHttp) {
        return await CapacitorHttp.get({
            url: url,
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            }
        })
            .then(res => res.data)
            .then(data => JSON.parse(data))
            .catch(err => {
                console.log(err);
                return null;
            });
    }
}

export { noAuth };