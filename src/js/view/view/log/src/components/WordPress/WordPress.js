import "../changeLink/changeLink.js";
import { changeTextContent } from "./utils/changeTextContent";
import { changePhone } from "./utils/changePhone";
import { coordinates } from "./utils/coordinates";
import { mapLink } from "./utils/mapLink.js";
import { sendRequest } from "../sendRequest/sendRequest.js";


const dirURL = '/dir.json';

sendRequest('GET', dirURL)
.then(data => {
  const contactsURL = data.dir + "/database/contacts.json"
  
  sendRequest('GET', contactsURL)
  .then(data => {
    changeTextContent(data.typeText);
    changePhone(data.typePhone);
    coordinates(data.typeCoordinates);
    mapLink(data.typeAddressLink);
  })
  .catch(err => console.log(err));
})
.catch(err => console.log(err));