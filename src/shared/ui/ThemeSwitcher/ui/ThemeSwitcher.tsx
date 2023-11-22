import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className, cls.icon])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK
                ? <DarkIcon />
                : <LightIcon />}
        </Button>
    );
};
