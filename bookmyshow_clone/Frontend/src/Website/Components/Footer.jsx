
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">

          <div className="footer-col">
            <h2 className="footer-logo">BookMyShow</h2>
            <p className="footer-text">
              India's biggest entertainment destination.
              Book movie tickets, events, sports and much more.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-list">
              <li><a href="/">Movies</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Plays</a></li>
              <li><a href="/">Sports</a></li>
              <li><a href="/">Activities</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-list">
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Customer Care</h3>
            <p className="footer-text">Customer Support</p>
            <p className="footer-text">support@bookmyshow.com</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BookMyShow Clone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;