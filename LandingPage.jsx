import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="relative">

      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="w-screen h-screen overflow-hidden">
        <img
          src="https://images.openai.com/static-rsc-4/UNKBNvvUlmgTSB70CaNRgtuM0p53Q0AzlgEWIRn_Vw90t4h5cgr-SyVNerHEdp0aQ70fLPwba9o6ishSjFXLHLo6WjIkQN67OPCMMiWbrgCrgVRzvlNihd5A44EY5JT31iV_epwK_HhyeqrUnmbV1fqfhXVdbu7hdrzom1uuP5rsxUSLOo2lt7QIUY75OawN?purpose=fullsize"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default LandingPage;