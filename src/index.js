import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './components/Main';
import Input from './components/Main'

// Render the main component into the dom
ReactDOM.render(

  <Input />,
  document.getElementById('app')
).render(<LikeButton />, document.getElementById('app'));
