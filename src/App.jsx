import React, { useState } from "react";
import logo from "./assets/image/logo.png";
import Stepper from "./components/Stepper";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="min-h-screen py-1 px-[24px] bg-background">
      <div className="">
        {/* <img src={logo} alt="logo" className="w-[64px]" /> */}
        <p className="font-sofia text-[20px] mt-5 leading-[1.8]">
          Care Mel ပလက်ဖောင်းတွင် Caregiver / Nurse Aide များအတွက် လိုက်နာရန်
          စည်းမျဉ်းစည်းကမ်းများ
        </p>
      </div>
      <div className="mt-10">
        <Stepper currentStep={currentStep} />
        <div className="mt-5 flex justify-between">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            className="bg-primary w-full text-white px-4 py-2 rounded mr-2 disabled:opacity-50"
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 3))}
            className="w-full bg-primary text-white px-4 py-2 rounded"
            disabled={currentStep === 3}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
