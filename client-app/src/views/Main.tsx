import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="main">
            {children}
        </div>
    )
}

export default Main