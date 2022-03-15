import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { Blockchain } from './pages/Blockchain';


ReactDOM.render(
    <React.StrictMode>
        <Blockchain />
    </React.StrictMode>,
    document.getElementById('root'),
);

