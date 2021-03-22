import React from 'react';
import ReactDOM from 'react-dom';
import DefaultHook from './DefaultHook';
import UseInput from './UseInput';
import UseTab from './UseTab';
import UseEffect from './UseEffect';
import UseTitle from './UseTitle';
import UseClick from './UseClick';
import UseConfirm from './UseConfirm';

ReactDOM.render(
  <React.StrictMode>
    <DefaultHook />
    <UseInput />
    <UseTab />
    <UseEffect />
    <UseTitle />
    <UseClick />
    <UseConfirm />
  </React.StrictMode>,
  document.getElementById('root')
);

