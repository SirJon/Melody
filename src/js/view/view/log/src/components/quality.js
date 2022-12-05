import "../styles/scss/style.scss";

import "./parts/header.js";
import "./parts/footer.js";
import "./currentItems/currentItems";
import { imgRecord } from "./img/imgRecord";
import { svgRecord } from "./img/svgRecord";
import { popup as popupPartner } from "./parts/popupPartner";
import { popup as popupDeclaration } from "./parts/popupDeclaration";
import { popup as popupCertificate } from "./parts/popupCertificate";
import { popup as popupVideo } from "./parts/popupVideo";
import { sendRequest } from "./sendRequest/sendRequest";

//Img
import cake from "../img/webp/quality/cake.webp";
import certificate from "../img/webp/quality/certificate.webp";
import statement from "../img/webp/quality/statement.webp";
import { render } from "./render/render";

const IMG_WIDTH = 1280;

const buttonPartner = document.querySelector(`.partnership__button`);
const onClickButtonPartner = (e) => {
  e.preventDefault();
  popupPartner.open();
};
buttonPartner.addEventListener(`click`, onClickButtonPartner);

const buttonVideo = document.querySelector(`.video__button`);
const iframeYouTube = document.querySelector(`.popup__iframe--youtube`);
const onClickButtonVideo = (e) => {
  e.preventDefault();
  popupVideo.open();

  e.composedPath().forEach(it => {
    if (it !== document && it !== window && it.classList.contains(`quality__video`)) {
      iframeYouTube.src = it.querySelector(`img`).dataset.video;
    };
  });
};
buttonVideo.addEventListener(`click`, onClickButtonVideo);

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const qualityURL = data.dir + "/database/quality.json"

    sendRequest('GET', qualityURL)
      .then(data => {
        const videoProduction = document.querySelector(`.video__video`);
        window.innerWidth > IMG_WIDTH
          ? videoProduction.src = data.video.posterQuality.desktop
          : videoProduction.src = data.video.posterQuality.table;
        videoProduction.dataset.video = `https://www.youtube.com/embed/${data.video.linkQuality}`;

        const qualityWrapper = document.querySelector(`.quality__wrapper--declaration`);
        const statementDeclaration = () => {
          return (
            `
          <div class="quality__declaration quality__declaration--statement">
            <img class="quality__img--declaration" src="" alt="">
            <button class="quality__button button" href="https://export31.ru/" type="button">
              <span class="quality__span--button">
                Quality statement
              </span>
              <svg class="quality__svg--arrow">
                <use xlink:href=""></use>
              </svg>
            </button>
          </div>
          `
          )
        };
        const certificateDeclaration = () => {
          return (
            `
          <div class="quality__declaration quality__declaration--certificate">
            <img class="quality__img--declaration" src="" alt="">
            <button class="quality__button button" href="https://export31.ru/" type="button">
              <span class="quality__span--button">
                Product certification
              </span>
              <svg class="quality__svg--arrow">
                <use xlink:href=""></use>
              </svg>
            </button>
          </div>
          `
          )
        };

        if (data.qualityStatement.length !== 0) {
          render(qualityWrapper, `beforeend`, statementDeclaration());
          imgRecord({
            selector: `.quality__declaration--statement .quality__img--declaration`,
            img: statement,
          });

          const buttonQuality = document.querySelector(`.quality__declaration--statement`);
          const onClickButtonQuality = (e) => {
            e.preventDefault();
            popupDeclaration.open();
          };
          buttonQuality.addEventListener(`click`, onClickButtonQuality);
        }

        if (data.productCertification.length !== 0) {
          render(qualityWrapper, `beforeend`, certificateDeclaration());
          imgRecord({
            selector: `.quality__declaration--certificate .quality__img--declaration`,
            img: certificate,
          });

          const buttonQuality = document.querySelector(`.quality__declaration--certificate`);
          const onClickButtonQuality = (e) => {
            e.preventDefault();
            popupCertificate.open();
          };
          buttonQuality.addEventListener(`click`, onClickButtonQuality);
        }
      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });

imgRecord({
  selector: `.quality__img`,
  img: cake,
});

svgRecord({
  selector: `.quality__svg--ingredients`,
  id: `ingredients`,
});
svgRecord({
  selector: `.quality__svg--palm`,
  id: `palm`,
});
svgRecord({
  selector: `.quality__svg--sugar`,
  id: `sugar`,
});
svgRecord({
  selector: `.quality__svg--process`,
  id: `process`,
});
svgRecord({
  selector: `.quality__svg--description`,
  id: `description`,
});
svgRecord({
  selector: `.quality__svg--cheese`,
  id: `cheese`,
});
svgRecord({
  selector: `.quality__svg--arrow`,
  id: `arrow`,
});
svgRecord({
  selector: `.video__svg`,
  id: `play`,
});
svgRecord({
  selector: `.partnership__svg--cake`,
  id: `bigCake`,
});
svgRecord({
  selector: `.partnership__svg--nut`,
  id: `nut`,
});