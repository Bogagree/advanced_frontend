import React from 'react';
import {render} from 'react-dom'
import {Counter} from './components/Counter';

render(
    <div>
        Advanced Frontend

        <Counter/>
    </div>,
    document.getElementById('root')
)