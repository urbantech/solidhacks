import React from 'react';
import { useSession } from './SessionContext'; // Import the useSession hook
import { fetch } from 'solid-auth-fetcher';
import { getSolidDataset, getThing, getUrl, getStringNoLocale } from '@inrupt/solid-client';
import Login from './Login';


const UserProfile = () => {
  const { session, loading } = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  const fetchUserProfileData = async () => {
    try {
      // Fetch the user's Solid dataset
      const profileDataset = await getSolidDataset(webId, { fetch });

      // Extract and display profile information
      const profileThing = getThing(profileDataset, webId);
      const name = getUrl(profileThing, FOAF.name);
      const imageUrl = getUrl(profileThing, VCARD.hasPhoto);
      const bio = getStringNoLocale(profileThing, FOAF.description);

      // Render the profile information in your JSX
      return (
        <div>
          <div>
            {session.info.isLoggedIn ? (
              <div>
                <p>You are logged in as:</p>
                <p>{session.info.webId}</p>
              </div>
                  ) : (
                    <Login/>
                  )}

                <h2>User Profile</h2>
                <p>Name: {name}</p>
                <img src={imageUrl} alt="Profile" />
                <p>Bio: {bio}</p>
          </div>
          
          {/* Add more profile information here */}
        </div>
      );
    } catch (error) {
      // Handle any errors that occur during fetch or data extraction
      console.error('Error fetching user profile:', error);
      return <p>Error loading profile data.</p>;
    }
  }

  return (
    <div>
      {fetchUserProfileData()}
    </div>
  );
};

export default UserProfile;
