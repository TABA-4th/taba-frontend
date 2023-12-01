/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/"
                target="_self"
              >
                Nimonaemo
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TABA-4th"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://github.com/siwooJang"
            target="_blank"
          >
            siwooJang
          </a>
        </div>
      </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
