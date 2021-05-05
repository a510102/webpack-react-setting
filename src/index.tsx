import React from 'react';
import ReactDOM from 'react-dom';
import Cat from '../assets/images/1801287.svg';

const App: React.FC = () => {
  return (
    <div>
      Hi App
      <img src={Cat} />
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
