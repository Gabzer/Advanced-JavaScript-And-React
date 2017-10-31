class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //criação de mini framwork
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        
        let helper = new DateHelper();
        //ou
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(helper.dataParaTexto(negociacao.data));
    }
}