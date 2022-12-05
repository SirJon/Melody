import Inputmask from "inputmask";

export class InputmaskForm {
  constructor(params) {
    this.selector = params.selector;
    const block = document.querySelector(`${this.selector}`)
    const inputHtml = block.querySelectorAll(`input`);

    let inputName = Inputmask({
      mask: "&{2,20}[ &{1,20}][ &{1,20}]",
      definitions: {
        "&": {
          validator: "[А-Яа-яЁёA-Za-z]",
        },
      },
    });

    let inputPhone = Inputmask({
      mask: "+*{1,4} *{1,3} - *{1,2} - *{1,10}",
      definitions: {
        "*": {
          validator: "[0-9]",
        },
        f: {
          validator: "[78]",
        },
        s: {
          validator: "[9]",
        },
      },
    });

    let inputMail = Inputmask({
      mask: "*{1,60}@{1,1}${1,15}&{1,1}a{2,3}",
      onBeforePaste: function (pastedValue, opts) {
        pastedValue = pastedValue.toLowerCase();
        return pastedValue.replace("mailto:", "");
      },
      definitions: {
        "*": {
          validator: "[0-9A-Za-z_.-]",
        },
        "$": {
          validator: "[0-9A-Za-z_-]",
        },
        "@": {
          validator: "[@]",
        },
        "&": {
          validator: "[.]",
        },
      },
    });

    let inputObjectsArray = [];

    inputHtml.forEach(it => {
      switch (it.dataset.input) {
        case `name`:
          inputObjectsArray.push(inputName.mask(it));
          break

        case `company`:
          inputObjectsArray.push(inputName.mask(it));
          break

        case `phone`:
          inputObjectsArray.push(inputPhone.mask(it));
          break

        case `email`:
          inputObjectsArray.push(inputMail.mask(it));
          break

        case `checkbox`:
          inputObjectsArray.push({
            el: it,
            isValid: () => it.checked,
          });
          break

        default:
          inputObjectsArray.push({
            el: it,
            isValid: () => true,
          });
          break
      };
    });

    inputObjectsArray.forEach(it => it.isValid = () => true);

    this.getStatusInput = () => {
      return inputObjectsArray.map(it => {
        return {el: it.el, status: it.isValid()}
      });
    }

    this.checkValidity = () => {
      const data = inputObjectsArray;
      const validityDecision = data.every(el => el.isValid());
      return validityDecision;
    };

    this.getValue = () => {
      let allValues;
      const data = inputObjectsArray;
      if (this.checkValidity()) {
        allValues = data
          .filter(inputMaskElement => inputMaskElement.el.type !== `checkbox`)
          .map(inputMaskElement => (
            {
              [inputMaskElement.el.dataset.input]: inputMaskElement.el.value,
            }
          ));
      };
      return allValues;
    };

    this.getInput = () => {
      return inputHtml;
    }

    this.clearInpits = () => {
      inputHtml.forEach(it => {
        switch (it.type) {
          case `text`:
            it.value = ``;
            break;
          case `checkbox`:
            it.checked = false;
            break;
          default:
            it.value = ``;
            break;
        }
      })
    };
  };
};