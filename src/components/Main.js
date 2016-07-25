require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </div>
    );
  }
}

LikeButton.defaultProps = {
};

class Input extends React.Component{
  constructor() {
    super();
    this.state = {
      value: 'hello'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({value: 'aa'});
  }

  render() {
   return (
     <div>
      <input type="text" name="title" value={this.state.value} />
      <input type="button" value="submit" name="submit" />
      </div>
   );
 }
}

export default LikeButton;
export default Input;
