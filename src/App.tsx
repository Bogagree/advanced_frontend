import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from './components/Counter';
import './styles/index.scss'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {useTheme} from './theme/useTheme';


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <div>Feature slice design</div>

            <button onClick={toggleTheme}>Toggle theme</button>

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