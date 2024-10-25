import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log('constructor: componente inicializado');
  }

  componentDidMount() {
    console.log('componentDidMount: componente montado no DOM');
    // Exemplo: configuração de um timer que atualiza o contador a cada segundo
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ contador: prevState.contador + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: verificação de atualização');
    return nextState.contador < 10; // O componente só atualizará enquanto o contador for menor que 10
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: atualização do componente');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: limpeza de intervalos e eventos');
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Contador: {this.state.contador}</h2>
      </div>
    );
  }
}

export default Contador;
import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log('constructor: componente inicializado');
  }

  componentDidMount() {
    console.log('componentDidMount: componente montado no DOM');
    // Exemplo: configuração de um timer que atualiza o contador a cada segundo
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ contador: prevState.contador + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: verificação de atualização');
    return nextState.contador < 10; // O componente só atualizará enquanto o contador for menor que 10
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: atualização do componente');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: limpeza de intervalos e eventos');
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Contador: {this.state.contador}</h2>
      </div>
    );
  }
}

export default Contador;
