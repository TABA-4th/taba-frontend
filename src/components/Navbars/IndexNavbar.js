import React,{useContext} from "react";
import { Link,useNavigate  } from "react-router-dom";
import { AuthContext } from "components/Functions/AuthContext";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const { isLoggedIn , logout } = useContext(AuthContext); // 로그인, 로그아웃 함수 가져오기
  const navigate = useNavigate(); // useNavigate hook 사용
  const handleLogout = () => {
    logout(); // 로그아웃 처리
    navigate("/"); // 홈페이지로 리디렉션
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{ backgroundColor: '#9ce8ee', color: 'white'}}>
        <Container>
          <div className="navbar-translate" >
            <NavbarBrand
              href="/"
              target="_self"
              id="navbar-brand"
              style={{color: 'white',fontSize:'30px',fontWeight:'bold'}}
            >
              Nimonemo
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem>
              <NavLink href="/" style={{color: 'white',fontSize:'20px'}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/magazine" style={{color: 'white',fontSize:'20px'}}>Magazine</NavLink>
            </NavItem>
            <NavItem>
                    <NavLink href="/product" style={{color: 'white',fontSize:'20px'}}>Product</NavLink>
            </NavItem>
              {isLoggedIn ? (
                // 로그인한 사용자에게 보여줄 항목
                <>
                  <NavItem>
                    <NavLink href="/mypage" style={{color: 'white',fontSize:'20px'}}>Mypage</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/login" onClick={handleLogout} style={{color: 'white',fontSize:'20px'}}>Logout</NavLink>
                  </NavItem>

                </>
              ) : (
                // 로그인하지 않은 사용자에게 보여줄 항목
                <>
                  <NavItem>
                    <NavLink href="/login" style={{color: 'white',fontSize:'20px'}}>Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register" style={{color: 'white',fontSize:'20px'}}>Register</NavLink>
                  </NavItem>

                </>
              )}
            {/* <UncontrolledDropdown nav style={{color: 'white'}}>
                <DropdownToggle caret color="default" href="#pablo" nav onClick={(e) => e.preventDefault()}>
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p style={{color: 'white',fontSize:'20px'}}>User</p>
                </DropdownToggle>
                <DropdownMenu>
                  {isLoggedIn ? (
                    // 로그인한 사용자에게 보여줄 항목
                    <>
                      <DropdownItem onClick={handleLogout} style={{color: 'black',fontSize:'20px'}}>
                        Logout
                      </DropdownItem>
                    </>
                  ) : (
                    // 로그인하지 않은 사용자에게 보여줄 기본 항목
                    <>
                      <DropdownItem to="/login" tag={Link} style={{color: 'black',fontSize:'20px'}}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register" tag={Link} style={{color: 'black',fontSize:'20px'}}>
                        Register
                      </DropdownItem>
                    </>
                  )}
                </DropdownMenu>
            </UncontrolledDropdown> */}
         
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
