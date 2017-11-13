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

**5.1**