import React from 'react';
import ReactDOM from 'react-dom';

import Cat from '../assets/images/1801287.svg';
import './index.scss';

const App: React.FC = () => {
  return (
    <div>
      Hi App
      <img width='50px' height='50px' src={Cat} />
      <p>1231321321231232333</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
};
