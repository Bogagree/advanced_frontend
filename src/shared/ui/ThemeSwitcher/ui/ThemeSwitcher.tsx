import React from 'react';
import {Theme, useTheme} from 'app/providers/ThemeProviders';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {toggleTheme, theme} = useTheme()
    return (
        <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className, cls.icon])}
                theme={ThemeButton.CLEAR}>
            {theme === Theme.DARK
                ? <DarkIcon/>
                : <LightIcon/>}
        </Button>
    );
};
