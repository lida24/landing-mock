import React from 'react';

import styles from './index.module.scss';
import { cn } from '../../ui2';


export const PageTitle = ({ children }) => (
    <div className={styles.title}>
        {children}
    </div>
);

export const PageShortIntro = ({ title, className, children }) => (
    <div className={cn(styles.intro, className)}>
        {title && (
            <PageTitle>
                {title}
            </PageTitle>
        )}
        {children}
    </div>
);
