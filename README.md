Advanced-JavaScript-I Course
============================

2-Especificando uma Negociação
----------------------------

**1.O que é um modelo?**

Trata-se de uma abstração do mundo real. Por exemplo, um analista de mercado que quer entender como o mercado funciona, criará um modelo em que ele possa dar entradas e executar determinado procedimentos para tentar prever como é o seu funcionamento.


**2.A classe Negociação**

Criando uma classe:

```javascript
class Negociacao {

}
```

Para definir os atributos usa-se a função constructor().

```javascript
constructor() {
    this. ...;
}
```


**6.Objetos Imutáveis**

Congelá-se o objeto dentro do construtor, depois de receber os parâmetros:

```javascript
Object.freeze(this);
```


**7.A instância é imutável mesmo?**

A data, sendo um objeto do tipo Date(), pode ser mudada. Só atributos do objeto criado que serão congelados.


**8.Programação defensiva**

O getTime de uma data retornará um número long com uma representação da data.


**9.Substituindo var por let**

Em JS, quando declaro _var_ não existe escopo de bloco (uma _var_ dentro de um _for_ pode ser acessada fora). Com o _let_ o escopo existe.


3-A ligação entre as ações do usuário e o modelo
----------------------------

função _typeof()_ mostra o tipo de uma variável.

para evitar percorrer o DOM muitas vezes, podemos colocar a obtenção dos dados dentro do construtor do controller.

o objeto _Date_ cria(pelo join) uma string separada por vírgula a partir da data passada para ele.
**5.**