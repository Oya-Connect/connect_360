import NavBar from "@/app/(pages)/components/global/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      {children}
      <footer className="footer">
        <div className="container">
          <div className="cyp-row">
            <div className="col-lg-4 col-md-12">
              <div className="footer-brand">
                {/* Reposition the image file if possible  */}
                <img
                  src="../public/images/logo.png"
                  alt=""
                />
                <div className="footer-social">
                  {/* Import the fontawesome CSS module to enable these icons  */}
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <ul className="footer-list">
                <div className="footer-list-header">Other Links</div>
                <li className="footer-item">
                  <a href="#">Admin sign in</a>
                </li>
                <li className="footer-item">
                  <a href="#">About us</a>
                </li>
                <li className="footer-item">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div clasName="cyp-row">
            <div className="footer-credits">
              &copy;<span id="dateYear">2023</span>{" "}
              <a href="#">www.connect.ng.</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
