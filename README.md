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