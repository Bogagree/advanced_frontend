import 'app/styles/index.scss';
import {Story} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Theme ) => (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
};
