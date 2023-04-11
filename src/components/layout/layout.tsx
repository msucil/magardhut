import { ReactNode } from "react";
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