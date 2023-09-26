import { login, getDefaultSession, handleIncomingRedirect } from '@inrupt/solid-client-authn-browser';

document.getElementById('login').addEventListener('click', async () => {
    try {
        if (!getDefaultSession().info.isLoggedIn) {
            await login({
                oidcIssuer: "https://login.inrupt.com",
                redirectUrl: window.location.href,
                clientName: "Firebase Solid App"
            });
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
});

if (window.location.href.includes("code=") && window.location.href.includes("state=")) {
    handleIncomingRedirect().then(async session => {
        if (session.info.isLoggedIn) {
            // User is authenticated with Solid.
            // Now, let's get a Firebase token from our Cloud Function.
            const response = await fetch('YOUR_GOOGLE_CLOUD_FUNCTION_ENDPOINT', {
                method: 'POST',
                body: JSON.stringify({ webId: session.info.webId }), // Passing the WebID or any other relevant data.
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.firebaseToken) {
                // Authenticate in Firebase using the token
                // firebase.auth().signInWithCustomToken(data.firebaseToken)
            }
        }
    }).catch(error => {
        console.error("Error handling the incoming redirect:", error);
    });
}

