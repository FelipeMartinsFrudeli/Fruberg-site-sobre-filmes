
let sortedFilmes = [...filmes]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter(arr => arr.tipo === "Serie")
createList(sortedFilmes, "list", 15);