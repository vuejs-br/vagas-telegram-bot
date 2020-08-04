# VueJS Brasil Vagas Telegram 🤖

Procuro vagas de emprego referente a VueJS por ai e publico em um grupo do telegram.

Definição de "por ai", issues de repositórios no github com essa finalidade, exemplos:
- [vuejs-br/vagas](https://github.com/vuejs-br/vagas)
- [frontendbr/vagas](https://github.com/frontendbr/vagas)

Este projeto foi feito para ser utilizado no grupo [VueJS Brasil 🇧🇷](https://t.me/vuejsbrasil) do telegram, visite o nosso grupo 😉.

## Variáveis de ambiente

Variáveis de ambiente utilizadas no projeto

```sh
# Exibido no console o que está executando no contexto desse projeto
export DEBUG=`vuejsbr:vagasbot:*`

# Token do bot criado no telegram
export TELEGRAM_BOT_TOKEN=<GOES_HERE>

# Chat ID do usuário ou grupo para o qual o bot enviara as mensagens
export TELEGRAM_CHAT_ID=<GOES_HERE>

# Busca vagas criadas a partir da data informada depois utiliza a data hora atual para buscar novas vagas
export LAST_DATE_REQUEST='2020-08-02T16:15:11Z'
```

## Telegram

Para criar um bot no [telegram](https://telegram.org/), você precisa iniciar uma conversa com o [BotFather](https://t.me/BotFather) (<-- clique aqui para que isso aconteça) no [telegram](https://telegram.org/).

Uma informação importante que você precisa anotar, pois vai precisar nos passos a seguir, é o **TOKEN** do bot que o BotFather vai lhe informar quando você concluir, com sucesso, a criação do bot.

### Enviando mensagem para o lugar certo

No telegram as conversas tem um identificador chamado de `chat id`.

O `chat id` referente a uma conversa será um número:
- de um grupo será um número negativo
- de uma pessoa será um número positivo

### Obtendo o chat id

Para ter acesso a informação do `chat id` de uma conversa de um grupo ou uma conversa privada de uma pessoa, recomendo utilizar o aplicativo, do tipo cli, [tepe](https://crates.io/crates/tepe).

`tepe` é implementado em [rust-lang](https://www.rust-lang.org/) para utilizá-lo siga esses passos:

> os comandos devem ser executados em um terminal

1. [Instale o rust](https://www.rust-lang.org/tools/install)  
2. reinicie o seu computador ou execute: `source ~/.cargo/env` _(no linux)_.
3. execute: `cargo install tepe` _(você vai precisar ter algum compilador C/C++ instalado)_.
4. execute: `tepe test -t token_do_seu_bot_aqui`
5. adicione o seu bot ao grupo do telegram ou envie qualquer mensagem para ele no privado.
6. será exibido na conversa o `chat id` anote-o.
7. você pode interromper a execução do comando `tepe test` do passo 4.

> essa não é a unica forma de se obter o chat id de uma conversa no telegram.

# Docker

Versão docker desse projeto.

https://github.com/jprando/vuejsbrasilvagas

## Libs

Principais libs utilizadas nesse projeto:

- [node/javascript](https://nodejs.org/en/about/)
- [telegraf](https://telegraf.js.org/)
- [node-fetch](https://github.com/node-fetch/node-fetch)

## TODO List

- Implementar testes
