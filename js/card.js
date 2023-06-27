
function addNewItem(list, filme, total_words) {
  let [parte1, parte2] = splitWords(filme.descricao, total_words);
  if (parte2.length > 0) { parte1 += " ..." }

  list.innerHTML += `
  <a href="${filme.trailer}" class="card" title="${filme.descricao}" target="_blank">
    <div 
      class="img-card img"
      style="background-image: url('${filme.imagem}');">
    </div>
    <div class="info">
      <p class="title">${filme.nome}</p>
      <p class="description">
        ${parte1}
      </p>
    </div>
  </a>
  `
}

function createList(arr, id_list, total_words) {
  let counter = 0

  for (var key in arr) {
    var filme = arr[key];
    let list = document.getElementById(id_list);
    addNewItem(list, filme, total_words);
    counter += 1
  }
}