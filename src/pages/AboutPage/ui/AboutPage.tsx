import React from 'react';
import {useTranslation} from 'react-i18next';

const AboutPage = () => {

    const {t} = useTranslation('about')

    return (
        <div>
            <h1>{t('aboutPageTitle')}</h1>
            <h2>{t('newH2title')}</h2>
        </div>
    );
};

export default AboutPage;