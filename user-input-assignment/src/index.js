import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class User extends React.Component {
    nameChangedHandler = (event) => {
        this.setState({
          persons: [
            { name: 'Daynya', age: 37.75 },
            { name: event.target.value, age: 45 },
            { name: 'Hemi', age: 12 }
          ] 
        })
      }

    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  class Output extends React.Component {
      render() {
          return (
              <div className="Output">
                <h1>Your Name<input type="text">{this.props.name}</input></h1>
                <p>
                    Hello, 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    ua. Enim lobortis scelerisque fermentum dui faucibus. 
                    Ac tortor vitae purus faucibus. Sapien nec sagittis aliquam 
                    malesuada. Eget mi proin sed libero enim sed faucibus turpis. 
                    Vitae elementum curabitur vitae nunc sed velit dignissim sodales
                    ut. Congue quisque egestas diam in. Aliquet lectus proin nibh 
                    nisl condimentum id venenatis a condimentum. Et netus et malesuad
                    a fames ac turpis egestas sed tempus. Id diam maecenas ultricies 
                    mi eget mauris. Blandit cursus risus at ultrices mi tempus. 
                </p>
                <p>
                    Tutate enim nulla aliquet porttitor lacus luctus. 
                    Eget arcu dictum varius duis at consectetur. Magna sit 
                    amet purus gravida quis. Id leo in vitae turpis. Ornare arcu 
                    odio ut sem nulla. Enim praesent elementum facilisis leo vel 
                    fringilla est. Amet tellus cras adipiscing enim. 
                </p>
              </div>
          );
      }
  }

ReactDOM.render(<Output  />, document.getElementById('root'));
serviceWorker.unregister();


