React II Course
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

**5.4**