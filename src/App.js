import React, { useEffect } from 'react';
import AppRouter from './AppRouter';
import { SessionProvider } from './components/SessionContext';
import Header from './components/Header'
// import Header from './components/Header';
// import UserProfile from './components/UserProfile';
// import CreatePostForm from './components/CreatePostForm';
// import CommentsSection from './components/CommentsSection';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* <Home /> */}
        {/* <UserProfile />
        <CreatePostForm />
        <CommentsSection /> */}
        <SessionProvider>
        {/* <Header /> */}
          <AppRouter /> {/* Render your router configuration component */}
        </SessionProvider>
      </main>
    </div>
  );
}

export default App;


// document.getElementById('login').addEventListener('click', async () => {
//     await login()
// });

// if (window.location.href.includes("code=") && window.location.href.includes("state=")) {
//     handleIncomingRedirect().then(async session => {
//         if (session.info.isLoggedIn) {
//             // User is authenticated with Solid.
//             // Now, let's get a Firebase token from our Cloud Function.
//             const response = await fetch('YOUR_GOOGLE_CLOUD_FUNCTION_ENDPOINT', {
//                 method: 'POST',
//                 body: JSON.stringify({ webId: session.info.webId }), // Passing the WebID or any other relevant data.
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const data = await response.json();

//             if (data.firebaseToken) {
//                 // Authenticate in Firebase using the token
//                 // firebase.auth().signInWithCustomToken(data.firebaseToken)
//             }
//         }
//     }).catch(error => {
//         console.error("Error handling the incoming redirect:", error);
//     });
// }

