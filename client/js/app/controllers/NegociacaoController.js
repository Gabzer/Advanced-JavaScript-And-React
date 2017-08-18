class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //criação de mini framwork
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-'));
        let data = new Date(this._inputData.value.replace(/-/g, ','));
        console.log(data);
    }
}