
import { CLIENT_ID, CLIENT_SECRET } from './config.js';

const artistId = "70B80Lwx2sxti0M1Ng9e8K?si=iqTT-JaKSrKHlCR-3-xAwg";

fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    }),
})
.then(response => response.json())
    .then(tokenData => { 
        const accessToken = tokenData.access_token;

        // Step 2: Fetch Artist Details using the Access Token
        return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    })
    .then(response => response.json())
    .then(artistData => {
        console.log("Artist Data:", artistData);
    })
.catch(error => console.error("Error:", error));