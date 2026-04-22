import { useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            onClick={() => handleClick(containerRef.current[0])}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>STRATEGY</h3>
              <h4>Business Growth & Optimization</h4>
              <p>
                I work on business analysis, export strategy, procurement
                optimization, and cost improvement initiatives that support
                measurable growth and stronger operational performance.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Business Analysis</div>
                <div className="what-tags">Cost Optimization</div>
                <div className="what-tags">Procurement</div>
                <div className="what-tags">International Trade</div>
                <div className="what-tags">Compliance</div>
                <div className="what-tags">Risk Analysis</div>
                <div className="what-tags">Process Improvement</div>
                <div className="what-tags">Project Management</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            onClick={() => handleClick(containerRef.current[1])}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>ANALYTICS</h3>
              <h4>Reporting, Insights & Execution</h4>
              <p>
                I translate data into practical business decisions through
                structured reporting, dashboard thinking, forecasting, and
                execution support across finance and operations.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">MS Excel</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">SAP</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Financial Reporting</div>
                <div className="what-tags">Forecasting</div>
                <div className="what-tags">Supply Chain</div>
                <div className="what-tags">Decision Support</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement | null) {
  if (!container) return;
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container && sibling instanceof HTMLDivElement) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
