
function addNewItem(list, filme, total_words) {
  let [parte1, parte2] = splitWords(filme.nome, total_words);
  if (parte2.length > 0) { parte1 += " ..." }

  list.innerHTML += `
    <div 
    style="background-image: url('${filme.imagem}');" 
    class="img film-img">
      <a target="_blank" href="${filme.trailer}"></a>
      <p>${parte1}</p>
    </div>
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

createList(filmes, "list", 3);

let sortedFilmes = [...filmes]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter(arr => arr.tipo === "Filme")
createList(sortedFilmes, "list2", 3);




let countersList = {}
function nextList(id, size) {
  let list = document.getElementById(id)

  if (countersList[id] === undefined) {
    countersList[id] = 1
  } else {
    countersList[id] += 1
  }

  let newPos = (-18) * countersList[id]
  //console.log(newPos)
  if (newPos < size) {
    newPos = 0
    countersList[id] = 0
  }

  list.style.transform = `translateX(${newPos}rem)`
}
