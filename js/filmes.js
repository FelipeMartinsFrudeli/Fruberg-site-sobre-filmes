
let sortedFilmes = [...filmes]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter(arr => arr.tipo === "Filme")
createList(sortedFilmes, "list", 15);