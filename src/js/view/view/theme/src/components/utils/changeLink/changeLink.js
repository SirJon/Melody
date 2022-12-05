const link = document.querySelectorAll(`a`);

link.forEach(it => {
  let page = it.href.split(`/`).pop();
  switch (page) {
    case 'index.html':
      it.href = `/`;
      break;

    case 'galary.html':
      it.href = `/galary`;
      break;

    case 'contacts.html':
      it.href = `/contacts`;
      break;

    case 'delivery.html':
      it.href = `/delivery`;
      break;

    default:
      null;
      break;
  };
});