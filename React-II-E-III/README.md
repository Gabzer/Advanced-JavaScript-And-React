React II and III Course
===============

```
npm start
```

```
npm install pubsub-js --save
```

```
java -jar instalura.jar
```

Entrar nesse link para a API gerar os dados no BD:

```
http://localhost:8080/gera/dados
```

A _Arrow-Function_ traz o conteúdo do escopo com ela para dentro da função (sem a necessidade de utilizar o .bind()).

Utilizamos o parâmetro **onEnter** e passamos uma função que centraliza a _lógica de verificação do usuário logado_. Lembrando que o onEnter pode ser usado para qualquer necessidade que você tenha e que precise ser executada antes da transição de uma rota para outra acontecer.

O método **componentWillReceiveProps** serve justamente para sermos notificados quando um componente receber novos parâmetros. A ideia é que em função das novas propriedades, possamos tomar alguma decisão, por exemplo alterando o estado e disparando uma nova renderização.

**Presentational component**: componente focado na apresentação.

**Functional component**: componente sem estado(stateless). Só recebe o argumento _props_ dos outros.

**Container component**: componente que contém uma concentração da lógica de outros componentes.

Na arquitetura **Flux** a _view_ é notificada por uma mudança do _store_(model). O **Flux** é um design pattern que tem como objetivo descrever melhor o fluxo dos dados na nossa aplicação

Aula **2.1** 11 minutos