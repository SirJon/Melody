const link = document.querySelectorAll(`a`);

link.forEach(it => {
  let page = it.href.split(`/`).pop();
  switch (page) {
    case 'index.html':
      it.href = `/`;
      break;

    case 'catalog.html':
      it.href = `/catalog`;
      break;

    case 'contacts.html':
      it.href = `/contacts`;
      break;

    case 'delivery.html':
      it.href = `/delivery`;
      break;

    case 'quality.html':
      it.href = `/quality`;
      break;

    default:
      null;
      break;
  };
});