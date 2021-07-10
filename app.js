const livros = require('./dataBase');

const readLine = require('readline-sync');

const entradaInicial = readLine.question('Deseja buscar um livro? S/N \n');

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log(
    'Essas são as categorias disponíveis em nosso Banco de Dados: \n'
  );

  let semCategoriaDuplicada = [];

  livros.forEach((livro) => {
    livro.categoria;
    if (!semCategoriaDuplicada.includes(livro.categoria)) {
      semCategoriaDuplicada.push(livro.categoria);
    }
  });
  console.log(semCategoriaDuplicada);

  const entradaCategoria = readLine.question('Qual categoria você escolhe? \n');

  const retorno = livros.filter(
    (livro) => livro.categoria.toUpperCase() === entradaCategoria.toUpperCase()
  );

  console.table(retorno);
} else {
  console.log('Esses são todos os livros disponíveis em nosso Banco de Dados');
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.table(livrosOrdenados);
}
