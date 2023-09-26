import { login, getDefaultSession, handleIncomingRedirect } from '@inrupt/solid-client-authn-browser';

document.getElementById('login').addEventListener('click', async () => {
    if (!getDefaultSession().info.isLoggedIn) {
        await login({
            oidcIssuer: "https://login.inrupt.com",
            redirectUrl: window.location.href,
            clientName: "Firebase Solid App"
        });
    }
});

if (window.location.href.includes("code=") && window.location.href.includes("state=")) {
    handleIncomingRedirect().then(async session => {
        if (session.info.isLoggedIn) {
            const response = await fetch('YOUR_GOOGLE_CLOUD_FUNCTION_ENDPOINT', {
                method: 'POST',
                body: JSON.stringify({ webId: session.info.webId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.firebaseToken) {
                // Authenticate in Firebase using the token, if required.
            }
        }
    });
}

