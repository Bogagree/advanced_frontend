import React from 'react';
import {useTheme} from 'app/providers/ThemeProviders';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import LightIcon from 'shared/assets/icons/light-theme.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {toggleTheme} = useTheme()
    return (
        <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <DarkIcon style={{width: '50px', height: '50px'}}/>
        </button>
    );
};
