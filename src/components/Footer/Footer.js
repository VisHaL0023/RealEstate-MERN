import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="first-col">
        <h1 className="company-name">QEstate Homes</h1>
        <div className="company-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          velit molestias ea dolor fugiat dignissimos at nam veritatis aliquid,
          accusamus cupiditate ab facere corporis fugit officia neque voluptates
          provident a.
        </div>
      </div>
      <div className="second-col">
        <h2 className="link-header">Contact</h2>
        <ul className="link-items">
          <li>Haryana, India</li>
          <li>vishal65.p@gmail.com</li>
          <li>+919000000222</li>
          <li>+021 29988833</li>
        </ul>
      </div>
    </footer>
  );
}