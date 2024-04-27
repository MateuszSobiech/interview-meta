import { ReactNode } from 'react';

export type PropsWithChildrenRequired<P = unknown> = P & { children: ReactNode | undefined };
