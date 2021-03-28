import React from 'react';
import ReactDOM from 'react-dom';
import DefaultHook from './DefaultHook';
import UseInput from './UseInput';
import UseTab from './UseTab';
import UseEffect from './UseEffect';
import UseTitle from './UseTitle';
import UseClick from './UseClick';
import UseConfirm from './UseConfirm';
import UsePreventLeave from './UsePreventLeave';
import UseBeforeLeave from './UseBeforeLeave';
import UseFadein from './UseFadein';
import UseNetwork from './UseNetwork';
import UseScroll from './UseScroll';
import UseFullScreen from './UseFullScreen';

ReactDOM.render(
  <React.StrictMode>
    <DefaultHook />
    <UseInput />
    <UseTab />
    <UseEffect />
    <UseTitle />
    <UseClick />
    <UseConfirm />
    <UsePreventLeave />
    <UseBeforeLeave />
    <UseFadein />
    <UseNetwork />
    <UseScroll />
    <UseFullScreen />
  </React.StrictMode>,
  document.getElementById('root')
);

