import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";
import React from "react";

const Pac: React.FC = () => {
  return (
    <>
      <HeadPageMonitoring title="Dashboard Pantau Gedung Telkomsel - TTC Pengayoman" />
      <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
        <iframe
          src="https://pacpengayoman.ipagemakassar.com"
          style={{ height: "100%", width: "100%", border: "none" }}
          title="Pac Mirror"
          sandbox="allow-same-origin allow-scripts allow-popups"
        />
      </div>
    </>
  );
};

export default Pac;
