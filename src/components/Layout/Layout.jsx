import React from 'react';

const Layout = ({ children, title }) => {
    return (
        <div className="layout">
            {title && <h3>{title}</h3>}
            {children}
        </div>
    );
}
 
export default Layout;