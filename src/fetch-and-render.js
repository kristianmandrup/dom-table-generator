function fetchAndRender(url, renderFn) {
  console.log({url})
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    renderFn(myJson);
  });
}

