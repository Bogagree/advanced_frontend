import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';

export const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
