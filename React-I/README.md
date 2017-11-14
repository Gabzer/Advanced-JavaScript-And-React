React-I Course
============================

Executar a API:

```text
java -jar cdcreact-1.0.0-SNAPSHOT.jar
```

Está sendo usado o create-react-app:

```text
npm install -g create-react-app
```

Para subir o projeto:

```text
npm start
```

Uma outra coisa que se utiliza é o PureCSS que cuida da parte visual.

Só pode ser guardado um estado(lidar e observar) de um objeto na variável _state_, regra do react.

Função **componentDidMount()** = logo após o render ser invocado pela primeira vez, ele é chamado.

Função **componentWillMount()** = antes do render ser chamado pela primeira vez, ele chama essa função.

O atributo _props_ é herdado da classe Component do React e ele guarda parâmetros que são enviados para um componente.

Notificamos o React que uma verificação de _atualização_ é necessária através da invocação da função **setState**. Nela passamos a propriedade que já existe na variável state e também passamos o novo valor que deve ser associado a ela.

Boas Práticas do React: casos que chamamos de **Higher-order Components**. São os componentes responsáveis por encapsular um estado que será trabalhado por vários outros componentes e que comumente nomeamos utilizando o sufixo _Box_. Depois, de criá-lo, podemos passá-lo como argumento. Pode passar como argumento a função que atualizará o estado.

**Publish/Subscribe**: é um MiddleWare. Um evento publica o aviso e quem se interessar se inscreve para recebê-lo. Foi usado a biblioteca _PubSubJS_ aqui, que serve tanto para Client-side como para Server-side.

**6.1**