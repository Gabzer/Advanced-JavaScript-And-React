import React, { Component } from 'react';
import FotoItem from './Foto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {fotos:[]};
        this.login = this.props.login;
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            this.setState({fotos: this.props.store.geState()});
        });
    }
    
    carregarFotos() {
        let urlPerfil;        
        if(this.login === undefined){
            urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        }else{
            urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
        }
        this.props.store.lista(urlPerfil);
    }

    componentDidMount() {
        this.carregarFotos();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.login !== undefined) {
            this.login = nextProps.login;
            this.carregarFotos();
        }
    }

    like(fotoId) {
        this.props.store.like(fotoId);
    }

    comenta(fotoId, textoComentario){
        this.props.store.comenta(fotoId, textoComentario);
    }

    render() {
        return (
            <div className="fotos container">
            <ReactCSSTransitionGroup transitionName="timeline"
                                     transitionEnterTiemout={500}
                                     transitionLeaveTiemout={300}>
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.like.bind(this)} comenta={this.comenta.bind(this)} />)
                }
            </ReactCSSTransitionGroup>
            </div>
        );
    }
}