    import React from "react";
    import Calendar from "views/index-sections/Calendar";

    // reactstrap components
    import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
    } from "reactstrap";

    // core components
    import IndexNavbar from "components/Navbars/IndexNavbar";
    import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
    import DefaultFooter from "components/Footers/DefaultFooter.js";

    function CalendarPage() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
        document.body.classList.remove("profile-page");
        document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
            <ProfilePageHeader />
            <br></br>
            <div className="section" style={{margin: '0 auto'}}>
                <Calendar />
            </div>


            <DefaultFooter />
        </div>
        </>
    );
    }

    export default CalendarPage;
