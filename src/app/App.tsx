import React from 'react';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProviders';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>Feature slice design</div>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};