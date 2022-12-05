import { sendRequest } from "../sendRequest/sendRequest";

const FETCH = `/phpmailer.php`;
const METHOD = `POST`;

export function sendMail({ data, responseOk }) {
  //Get request
  const dirURL = '/dir.json';

  sendRequest('GET', dirURL)
    .then(url => {
      const sendmailUrl = url.dir + FETCH;
      fetch(sendmailUrl, {
        method: METHOD,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          responseOk;
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
              switch (localStorage.getItem(`language`)) {
                case "ru":
                  alert("Упс! Не получилось отправить форму, попробуйте отправить ещё раз");
                  break;
                case "en":
                  alert("Ops! Something Went Wrong. Please try again");
                  break;

                default:
                  alert("Ops! Something Went Wrong. Please try again");
                  break;
              }
            };
          });
        };
      }).catch(error => {
        switch (localStorage.getItem(`language`)) {
          case "ru":
            alert("Упс! Не получилось отправить форму, попробуйте отправить ещё раз");
            break;
          case "en":
            alert("Ops! Something Went Wrong. Please try again");
            break;

          default:
            alert("Ops! Something Went Wrong. Please try again");
            break;
        }
      });

    })
    .catch(err => {
      console.log(err);
    });
};