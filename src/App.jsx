import { useState } from "react";
import Stepper from "./components/Stepper";
import axios from "axios";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmission = async () => {
    console.log("Handling submission");
    console.log(currentStep);
    // Handle form submission
    if (currentStep === 4) {
      console.log("Form submitted");
      const name = localStorage.getItem("name");
      const NRC = localStorage.getItem("NRC");
      if (name && NRC) {
        const data = {
          name,
          NRC,
        };
        const res = await axios.post(
          "https://care-mel-api.onrender.com/api/v1/term-and-condition",
          data
        );
        console.log(res);
        if (res.status === 201) {
          localStorage.clear();
          setCurrentStep(5);
        }
      } else {
        alert("နာမည်နှင့် NRC နံပါတ်ကို ထည့်ပါ");
      }
    }
  };
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
        {currentStep !== 5 && (
          <div className="mt-5 flex justify-between">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
              className="bg-primary w-full text-white px-4 py-3 font-bold text-[14px] rounded mr-2 disabled:opacity-50"
              disabled={currentStep === 1}
            >
              နောက်သို့
            </button>
            <button
              onClick={() => {
                setCurrentStep((prev) => Math.min(prev + 1));
                handleSubmission();
              }}
              className="w-full bg-primary text-white px-4 py-3 rounded font-bold text-[14px] flex justify-center items-center"
              // disabled={currentStep === 5}
            >
              {currentStep === 4 ? "သဘောတူပါသည်။" : "ရှေ့သို့"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
