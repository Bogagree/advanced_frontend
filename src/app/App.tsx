import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProviders';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>Feature slice design</div>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'} style={{margin: 10}}>Главная страница</Link>
            <Link to={'/about'} style={{margin: 10}}>О проекте</Link>

            <Suspense fallback={<div style={{color: 'red'}}>Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={''} element={<MainPage/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};