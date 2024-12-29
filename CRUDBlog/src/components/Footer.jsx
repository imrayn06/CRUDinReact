import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Blogging. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link tp="#" className="text-dark">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
