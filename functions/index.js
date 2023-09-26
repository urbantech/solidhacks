const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true }); // Require and initialize the CORS middleware

admin.initializeApp();

exports.getFirebaseToken = functions.https.onRequest((req, res) => {
    // Wrap the entire function logic inside the cors middleware
    cors(req, res, async () => {
        try {
            // Ensure only POST requests are processed
            if (req.method !== 'POST') {
                return res.status(400).json({ error: 'Please send a POST request' });
            }

            const webId = req.body.webId;

            // Ensure WebID is present
            if (!webId) {
                return res.status(400).json({ error: 'WebID is required' });
            }

            // Create a custom token based on the WebID
            // In a production scenario, ensure to validate the authenticity of the WebID
            const firebaseToken = await admin.auth().createCustomToken(webId);

            res.json({ firebaseToken });

        } catch (error) {
            // Handle any errors that might occur
            console.error("Error creating Firebase token:", error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

