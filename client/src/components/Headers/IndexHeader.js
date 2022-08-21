/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bayet.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/loggo.jpg")}
            ></img>
            <h1 className="h1-seo">beit AL HIKMA</h1>
            <h3>The Tunisian Academy of Sciences
                Letters and Arts</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by{" "}
            OUR TEAM
            . Coded by{" "}
          
            OUR TEAM
              
            
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
