import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProviders';
import {AppRouter} from 'app/providers/router';


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>Feature slice design</div>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'} style={{margin: 10}}>Главная страница</Link>
            <Link to={'/about'} style={{margin: 10}}>О проекте</Link>

            <AppRouter/>
        </div>
    );
};