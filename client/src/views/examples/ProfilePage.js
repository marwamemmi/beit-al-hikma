import React from "react";

// reactstrap components
import {
  Button,
  Modal,
  ModalBody,Container,
  Col, Row
} from "reactstrap";
import { useEffect, useState } from "react";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import axios from "axios";
import 'react-card-with-image/dist/index.css'
import DarkFooter from "components/Footers/DarkFooter";
function ProfilePage() {
  
  const [pills, setPills] = React.useState("1");
  const [data, setImages] = useState([]);
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
 
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [modal4, setModal4] = React.useState(false);
  const [modal5, setModal5] = React.useState(false);
  const [modal6, setModal6] = React.useState(false);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/loggo.jpg") + ")"
            }}
          ></div>
<div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/book.png")}
             
            ></img>
            <h1 className="h1-seo">Beit Al Hikma</h1>
            <h3>We want to be the largest online Arabic-speaking library in the world, and we need your help to read and publish our content.
             </h3>
          </div>
     </div>
     <div className="main">
        <div className="section section-tabs">
        <Container>
          <Row> 
            <div className="btn-neutral" color="white">
     <button className="btn-link" ><img src={require("assets/img/a.png")} height ="500px" width="450px" alt="my image" onClick={() => setModal1(true)} /></button>
             
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Uncovered</h4>
                </div>
                <ModalBody>
                  <p>
                  In Uncovered, Leah Lax tells her story - beginning as a young teen who left her liberal, secular home for life as a Hasidic Jew and ending as a 40-something woman who has to abandon the only world she's known for 30 years in order to achieve personal freedom.
                  </p>
                </ModalBody>
                
              </Modal>
              </div>
              <br></br>
              <img src={require("assets/img/55.PNG")} alt="my image" width="150px"/>
<div>

     <button className="btn-link"><img src={require("assets/img/b.png")}  height ="500px" width="450px" alt="my image" onClick={() => setModal2(true)} /></button>
             
              <Modal isOpen={modal2} toggle={() => setModal2(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">بحوث في تاريخ العلوم عند العرب</h4>
                </div>
                <ModalBody>
                  <p>
                  بحوث في تاريخ العلوم عند العرب
يمنى طريف الخولي
تُعدُّ «فلسفة العلم» واحدًا مِن أهمِّ مباحثِ الفلسفةِ بما تُقدِّمُه مِن رؤيةٍ نقديةٍ تَصوِيبيةٍ للمَناهجِ العِلميةِ السائدة. وإذ استغرقَ كثيرونَ في البحثِ عن مناهجِ العلومِ بمُختلِفِ فروعِها، غفلَ آخَرونَ عَنِ البحثِ وراءَ جذورِ تلك العلومِ وتواريخِها، تلك التي إنْ تَمكَّـنَّا مِنَ الإلمامِ بها، تَمكَّـنَّا مِن إيجادِ مَناطقِ الضَّعفِ والقوةِ في أصلِ كلِّ فرعٍ من فروعِ المعرفة، واستطَعْنا إتاحةَ المزيدِ مِنَ البدائلِ المُمكِنة، للمُساهَمةِ في التوظيفِ الأمثلِ للمعرفةِ العِلميةِ داخلَ مُجتمعِنا المُعاصِر.
                  </p>
                </ModalBody>
                
              </Modal>
     
              </div>  
              <br></br>
              </Row>
              <br></br>
              <br></br>
              <Row>
              <div>
     <button className="btn-link" color="default"><img src={require("assets/img/c.png")} height ="500px" width="450px" alt="my image" onClick={() => setModal3(true)} /></button>
             
              <Modal isOpen={modal3} toggle={() => setModal3(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">European women scientists in chemistry
</h4>
                </div>
                <ModalBody>
                  <p>
                  A fascinating collection of the pictures, figures, and diagrams that chemists create to explain their craft

In A Chemical History Tour, Arthur Greenberg took readers on a wild romp through the history of chemistry, introducing the unique characters, sometimes bizarre theories, and novel experiments that ultimately produced the modern science. Now Greenberg returns with more tales of chemistry glory, lovingly chronicling the extraordinary artwork that alchemists and chemists have produced in their pursuit of understanding the nature of matter in The Art of Chemistry: Myths, Medicines, and Materials.
                  </p>
                </ModalBody>
               
              </Modal>
              </div>
     <br></br>
     <img src={require("assets/img/55.PNG")} alt="my image" width="150px"/>
     <div>
     <button className="btn-link"><img src={require("assets/img/44.png")} height ="500px" width="450px" alt="my image" onClick={() => setModal4(true)} /></button>
             
              <Modal isOpen={modal4} toggle={() => setModal4(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal4(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Space flight: A Brief History</h4>
                </div>
                <ModalBody>
                  <p>
                  Charles Robert Darwin, (12 February 1809 – 19 April 1882) was an English naturalist, geologist and biologist, best known for his contributions to the science of evolution. He established that all species of life have descended over time from common ancestors and, in a joint publication with Alfred Russel Wallace, introduced his scientific theory that this branching pattern of evolution resulted from a process that he called natural selection, in which the struggle for existence has a similar effect to the artificial selection involved in selective breeding.
                  </p>
                </ModalBody>
                
              </Modal>
              </div>
             < div>
     <button className="btn-link"><img src={require("assets/img/ss.png")} height ="500px" width="450px" alt="my image" onClick={() => setModal5(true)} /></button>
             
              <Modal isOpen={modal5} toggle={() => setModal5(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal5(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">A naturalist’s journey around the world</h4>
                </div>
                <ModalBody>
                  <p>
                  Charles Robert Darwin, (12 February 1809 – 19 April 1882) was an English naturalist, geologist and biologist, best known for his contributions to the science of evolution. He established that all species of life have descended over time from common ancestors and, in a joint publication with Alfred Russel Wallace, introduced his scientific theory that this branching pattern of evolution resulted from a process that he called natural selection, in which the struggle for existence has a similar effect to the artificial selection involved in selective breeding.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    Nice Button
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal5(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              </div>
              <br></br>
              <img src={require("assets/img/55.PNG")} alt="my image" width="150px"/>
              < div>
     <button className="btn-link"><img src={require("assets/img/kk.png")} height ="500px" width="450px" alt="my image" onClick={() => setModal6(true)} /></button>
             
              <Modal isOpen={modal6} toggle={() => setModal6(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal6(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Freedom</h4>
                </div>
                <ModalBody>
                  <p>
                  For 20 years, the Freedom Writers Foundation has mitigated student dropout rates by reproducing the Freedom Writers’ experience in schools around the world. The Foundation’s mission is to provide educators with tools to empower all students to succeed. Our core programs include Training, Outreach, Scholarship, and Curriculum.
                  </p>
                </ModalBody>
                
              </Modal>
              </div>
     </Row></Container></div></div></div>
     <DarkFooter />
    </>
  );
}

export default ProfilePage;
