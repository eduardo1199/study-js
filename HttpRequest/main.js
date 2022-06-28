function loadingResult(response) {
  const result = document.querySelector('.result');

  result.innerHTML = response;
}

document.addEventListener('click', (event) => {
  const el = event.target;
  const tag = el.tagName.toLowerCase();

  if(tag === 'a') {
    event.preventDefault();
    loadingPage(el);
  }
})

function loadingPage(el) {
  const href = el.getAttribute('href');

 /*  request(config).then(response => {
    loadingResult(response);
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    console.log('finally loading')
  }) */
  
 fetch(href).then(response => {
  if(response.status < 400) {
    return response.text().then(html => {
      loadingResult(html);
    }).catch(err => {
      console.log(err);
    })
  } else {
    throw new Error('Erro 404!')
  }
 });


}
