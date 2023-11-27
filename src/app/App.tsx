import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';
import { Modal } from 'shared/ui/Modal/Modal';

export const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, culpa, impedit. Alias corporis
                    dolores fugiat odio odit possimus quia, voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, culpa, impedit. Alias corporis
                    dolores fugiat odio odit possimus quia, voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, culpa, impedit. Alias corporis
                    dolores fugiat odio odit possimus quia, voluptatibus.
                </Modal>
                <button type="button" onClick={() => setIsOpen(true)}>toggle</button>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
