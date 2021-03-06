import React from 'react';
import './Noty.sass';
import { CSSTransition } from 'react-transition-group';

const TIMEOUT = 3000;

const notyContainer = WrappedComponent => {
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
        this.setState({ show: false });
      }, TIMEOUT);
    };

    closeHandler = () => {
      this.setState({ show: false });
    };

    render() {
      const noty = this.state;

      return (
        <React.Fragment>
          <CSSTransition unmountOnExit in={noty.show} timeout={800} classNames="noty-transitions">
            <div className={`noty noty__${noty.type}`}>
              <div className="noty__message">{noty.message}</div>
              <div onClick={this.closeHandler} className="noty__close">
                <span>&#x2716;</span>
              </div>
            </div>
          </CSSTransition>

          <WrappedComponent
            {...this.props}
            onMessageFired={message => this.messageHandler(message)}
          ></WrappedComponent>
        </React.Fragment>
      );
    }
  };
};

export default notyContainer;
