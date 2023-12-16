    import React from "react";
    import Calendar from "views/index-sections/Calendar";

    // core components
    import IndexNavbar from "components/Navbars/IndexNavbar";
    import ProfileMypageHeader from "components/Headers/ProfileMypage";
    import DefaultFooter from "components/Footers/DefaultFooter.js";

    function CalendarPage() {

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
        <ProfileMypageHeader />
        <div className="wrapper" style={{width: '80%', margin: '0 auto'}}>
            <br></br>
            <div className="section" style={{margin: '0 auto'}}>
                <Calendar />
            </div>

        </div>
        <DefaultFooter />
        </>
    );
    }

    export default CalendarPage;
