import React from 'react';
import './Noty.sass';
import { CSSTransition } from 'react-transition-group';

const notyContainer = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: 'info',
        show: false,
        message: '',
      };

    }

    messageHandler = message => {
      const newMessage = { ...message };
      this.setState(newMessage);
      setTimeout(() => {
        this.setState({show: false})
      }, 5000)
    };

    closeHandler = () =>{
      this.setState({show: false});
    }

    render() {
      const noty = this.state;
      return (
        <div>
          <CSSTransition unmountOnExit in={noty.show} timeout={800} classNames="noty-transitions">
            <div className={`noty noty__${noty.type}`}>
              <div className="noty__message">{noty.message}</div>
              <div onClick={this.closeHandler} className="noty__close">
                <span>&#x2716;</span>
              </div>
            </div>
          </CSSTransition >
          <WrappedComponent
            onMessageFired={message => this.messageHandler(message)}
          ></WrappedComponent>
        </div>
      );
    }
  };
};

export default notyContainer;
