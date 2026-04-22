import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Consultant</h4>
                <h5>HORBACH</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Improving business decision accuracy, reducing operating costs, and
              supporting export-led growth initiatives in Stuttgart through
              data-backed consulting and process optimization.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Working Student, Business Leads Management</h4>
                <h5>Consulate General of India Munich</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Supported international business development, coordinated trade-related
              activities, prepared compliance-focused documentation, and helped build
              stronger business visibility through structured reporting.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Working Student Einkäufer</h4>
                <h5>Laumer GmbH</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on procurement, supplier coordination, and sourcing efficiency,
              contributing to cost reduction, better supply continuity, and improved
              quality support within the purchasing function.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst / Project Manager</h4>
                <h5>Adani Group</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Managed procurement and business analysis initiatives across supplier
              negotiations, risk analysis, forecasting, and operational planning,
              helping reduce cost and improve planning accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
