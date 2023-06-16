import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from './components/Counter';
import './index.scss'
import {AboutPageAsync} from './components/pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './components/pages/MainPage/MainPage.async';

export const App = () => {
    return (
        <div className="app">
            <div>Feature slice design</div>

            <Link to={'/'} style={{margin: 10}}>Главная страница</Link>
            <Link to={'/about'} style={{margin: 10}}>О проекте</Link>

            <Suspense fallback={<div style={{color: 'red'}}>Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={''} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

            <Counter/>
        </div>
    );
};