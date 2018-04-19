
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/index';
import template from '../template';

var index = (req,res)=>{

  const isMobile = false;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} />);

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
}

export {index}
