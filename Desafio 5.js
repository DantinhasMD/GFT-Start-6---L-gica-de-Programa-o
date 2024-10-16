/* Descrição - No mundo dos jogos Pokémon, os treinadores começam sua 
jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander 
e Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio é 
criar uma solução que permita ao jogador escolher um dos Pokémons 
iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido.

Entrada - Você receberá um número inteiro que representa a escolha do 
treinador: 1 para Bulbasaur, 2 para Charmander, 4 Pikachu e 5 para Mewtwo.

Saída - A saída deve ser uma mensagem de boas-vindas que inclua o nome 
do Pokémon escolhido. */
// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:

if (isNaN(escolhaDoTreinador) ||  ![1, 2, 4, 5].includes(escolhaDoTreinador)){
    print("Dados inválidos, digite um número de 1 a 5");
    return; 
  } else if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador === 2) {
    zpokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else {
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}