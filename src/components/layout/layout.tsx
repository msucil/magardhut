import { Component, ReactElement, ReactNode } from "react";
import { PageItemProps } from "react-bootstrap";
import { ReactHTMLElement } from "react";
import MainNavbar from "../mainnavbar/MainNavbar";
import Footer from "../footer/footer";

function Layout({ children }: {children: ReactNode}) {
    return (
        <>
        <MainNavbar/>
        <div>{children}</div>
        <Footer/>
        </>
    );
}

export default Layout;