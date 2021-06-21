import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    
    <div className="bg">
     
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0" >
      <div style={{ backgroundColor: "DodgerBlue" }} >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h4  className="mb-0 white-text">
Sosyal medya hesaplarımızla bizi takipte kalın!              </h4>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left" >
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h3 className="text-uppercase font-weight-bold">
              <strong>HRMS</strong>
            </h3>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px"}} />
            <p style={{fontWeight:"bolder"}}>
              İş verenler ve iş arayanları buluşturmayı amaçladığımız bu platform ile iş verme ve iş bulma süreçlerinde hayatı kolaylaştırmayı amaçlıyoruz.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h3 className="text-uppercase font-weight-bold">
              <strong>Sayfalar</strong>
            </h3>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">İş Verenler</a>
            </p>
            <p>
              <a href="#!">İş Arayanlar</a>
            </p>
            <p>
              <a href="#!">İş İlanları</a>
            </p>
            <p>
              <a href="#!">Yöneticiler</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h3 className="text-uppercase font-weight-bold">
              <strong>Linkler</strong>
            </h3>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Hesabınız</a>
            </p>
            <p>
              <a href="#!">İş Veren Ortaklık Programları</a>
            </p>
            <p>
              <a href="#!">Uygulama</a>
            </p>
            <p>
              <a href="#!">Yardım</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4" style={{fontWeight:"bolder"}}>
            <h3 className="text-uppercase font-weight-bold">
              <strong >İletişim</strong>
            </h3>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p >
              <i className="fa fa-home mr-3" /> İstanbul,Türkiye
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> admin@sabriozbek.com.tr
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +905357079000
            </p>
            <p>
              <i className="fa fa-print mr-3" /> +05347079001
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Telif Hakkı: <a href="https://www.sabriozbek.com.tr"> sabriozbek.com.tr </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPagePro;