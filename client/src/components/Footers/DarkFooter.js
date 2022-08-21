/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
         OUR TEAM
          . Coded by{" "}
          OUR TEAM
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
