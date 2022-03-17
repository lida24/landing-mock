import React, { FunctionComponent, ComponentType } from 'react';

import { ClassName, cn } from '../../utils';
import styles from './index.module.scss';


interface IconProps extends ClassName {
    icon: ComponentType<ClassName>;
    size?: '56' | '48' | '40' | '32' | '24' | '16';

    [prop: string]: any;
}

export const Icon: FunctionComponent<IconProps> = ({ icon: Icon, size, className, ...props }) => (
    <Icon className={cn(styles.icon, styles[`size-${size}`], className)} {...props} />
);

Icon.defaultProps = {
    size: '24',
};
