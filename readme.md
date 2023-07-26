# Jogo da Forca (Hangman)

Jogo da Forca, também conhecido como Hangman, é um jogo clássico de palavras onde o jogador tenta adivinhar uma palavra desconhecida, letra por letra, antes que a forca seja desenhada por completa. O jogo é construído usando **HTML**, **CSS** e **JavaScript**, consumindo uma API, para gerar as palavras aleatoriamente.

## Como Jogar

1. Abra o arquivo `index.html` em seu navegador.

2. O jogo começará automaticamente. Você verá uma imagem da forca vazia e uma série de espaços em branco representando as letras da palavra a ser adivinhada.

3. Clique nas letras no teclado abaixo para tentar adivinhar a palavra. Cada vez que você clica em uma letra, a letra é exibida no lugar correto na palavra a ser adivinhada, caso ela exista na palavra.

4. Se a letra não existir na palavra, uma parte da forca será desenhada. A cada erro, uma nova parte da forca será adicionada, até que o forca esteja completa e o jogo termine.

5. O jogo termina de duas maneiras:
   - Se você adivinhar todas as letras da palavra corretamente antes que o forca esteja completo, você vence o jogo.
   - Se o forca estiver completa antes de você adivinhar a palavra, você perde o jogo.

## Funcionamento

O jogo é composto por três principais funções:

1. **`btnOnPress()`**: Essa função é acionada quando uma letra do teclado é pressionada. Ela verifica se a letra existe na palavra a ser adivinhada e exibe a letra nos espaços em branco corretos. Além disso, ela cuida do desenho da forca em caso de erro.

2. **`wrongLetter(tries)`**: Essa função é responsável por desenhar partes adicionais da forca conforme o jogador erra as letras.

3. **`checkWinn(answerSpacesText)`**: Essa função verifica se o jogador venceu o jogo, ou seja, se todas as letras da palavra foram adivinhadas corretamente.

## Buscando a Palavra

O jogo busca aleatoriamente uma palavra usando a API [Dicionário Aberto](https://api.dicionario-aberto.net/random). O resultado da API é a palavra a ser adivinhada pelo jogador.

## Contribuindo

Se você encontrar algum problema ou tiver ideias para melhorar o Jogo da Forca, sinta-se à vontade para contribuir! Você pode relatar problemas, sugerir melhorias ou enviar solicitações de pull para o repositório no GitHub.
