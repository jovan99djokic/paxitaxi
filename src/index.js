import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Ruter from './Ruter';

function Page()
{
  return (
    <div>
      <Ruter/>
    </div>
  );
}

ReactDom.render(<Page/>,document.getElementById('root'));