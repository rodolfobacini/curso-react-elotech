import React from "react";
import {  Route, Switch, withRouter } from "react-router-dom";
import  Header  from './Header';
import  Configuracoes from './Configuracoes';
import  Home from './Home';
import Usuario from './Usuario';

export class GaloTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logado: false
    };
  }

  login  = () => {
    this.setState({
      logado: true
    })
  }

  logout  = () => {
    this.setState({
      logado: false
    })
    this.props.history.push('/')
  }

  render() {
    return (
        <div>
          <Header logout={this.logout} login={this.login} logado={this.state.logado} />
          <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/configuracoes" exact component={Configuracoes} />
              <Route path="/usuario" exact component={Usuario} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(GaloTweet);
