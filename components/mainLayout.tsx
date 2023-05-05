import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout