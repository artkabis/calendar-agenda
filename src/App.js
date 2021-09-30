import React from 'react';
import { render } from 'react-dom';
import Calendar from './Agenda';
import './index.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Calendar />
  </div>
);

render(<App />, document.getElementById('root'));
