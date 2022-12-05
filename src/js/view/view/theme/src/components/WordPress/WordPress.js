import "../utils/changeLink/changeLink";
import { sendRequest } from "../utils/sendRequest/sendRequest";
import { changeEmail } from "./utils/changeEmail";
import { changePhone } from "./utils/changePhone";
import { changeTextContent } from "./utils/changeTextContent";
import { mapLink } from "./utils/mapLink";
import { store } from "../redux/store";

// //Get data json
// const dirURL = '/dir.json';

// sendRequest('GET', dirURL)
//   .then(data => {
//     const contacts = data.dir + "/database/contacts.json";
//     sendRequest('GET', contacts)
//       .then(data => {

//         const changeContentWp = (data) => {
//           changeTextContent(data);
//           changePhone(data);
//           changeEmail(data);
//           mapLink(data.link);
//         };

//         changeContentWp(data[localStorage.getItem(`language`)]);
//         store.subscribe(() => {
//           if (store.getState() == `language`) {
//             changeContentWp(data[localStorage.getItem(`language`)]);
//           }
//         });

//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => {
//     console.log(err);
//   });