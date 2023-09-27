// User profile operations

import { fetch } from '@inrupt/solid-client-authn-browser';
import { getSolidDataset, getThing, getStringNoLocale } from "@inrupt/solid-client";

export async function getProfile(webId) {
  const profileDataset = await getSolidDataset(webId, { fetch });
  const profileThing = getThing(profileDataset, webId);
  
  const name = getStringNoLocale(profileThing, "http://xmlns.com/foaf/0.1/name");
  const image = getStringNoLocale(profileThing, "http://xmlns.com/foaf/0.1/img");

  return { name, image };
}
