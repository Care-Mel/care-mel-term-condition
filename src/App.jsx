import { useState } from "react";
// import Stepper from "./components/Stepper";
import axios from "axios";
import StepperForm from "./components/StepperForm";
import logo from "./assets/image/logo.png";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  console.log(currentStep);

  const handleSubmission = async () => {
    // console.log("Handling submission");
    // console.log(currentStep);
    // Handle form submission
    if (currentStep === 6) {
      // console.log("Form submitted");
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
        if (res.data.code === 201) {
          // console.log("Form submitted successfully");
          localStorage.clear();
          setCurrentStep(7);
        }
      } else {
        alert("နာမည်နှင့် NRC နံပါတ်ကို ထည့်ပါ");
      }
    }
  };
  return (
    <div className="min-h-screen py-1 px-[24px] bg-background">
      <div className="h-[80vh]">
        {currentStep === 1 && (
          <div className="flex flex-col justify-end gap-8 mb-10 items-center h-full">
            <img src={logo} alt="logo" className="w-[230px]" />
            <p className="font-sofia text-secondary text-[20px] mb-10 leading-[1.8]">
              Care Mel ပလက်ဖောင်းတွင် Caregiver / Nurse Aide များအတွက်
              လိုက်နာရန် စည်းမျဉ်းစည်းကမ်းများ
            </p>
          </div>
        )}
        {currentStep !== 1 && currentStep !== 7 && (
          <div>
            <p className="font-sofia text-secondary text-[20px] mt-5 leading-[1.8]">
              Care Mel ပလက်ဖောင်းတွင် Caregiver / Nurse Aide များအတွက်
              လိုက်နာရန် စည်းမျဉ်းစည်းကမ်းများ
            </p>
            <div className="mt-10">
              <StepperForm currentStep={currentStep} />
            </div>
          </div>
        )}
        {currentStep === 7 && (
          <div className="flex flex-col justify-center gap-8 mb-10 items-center h-full">
            <SuccessModal />
          </div>
        )}
      </div>

      <div>
        {currentStep !== 7 && (
          <div className="mt-5 flex justify-between">
            {currentStep > 2 && (
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                className="bg-primary w-full text-white px-4 py-3 font-bold text-[14px] rounded-3xl mr-2 transition-all duration-300 ease-in-out active:bg-secondary"
              >
                နောက်သို့
              </button>
            )}
            {currentStep !== 7 && (
              <button
                onClick={() => {
                  setCurrentStep((prev) => Math.min(prev + 1, 6));
                  handleSubmission();
                }}
                className="w-full bg-primary text-white px-4 py-3 rounded-3xl font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
                // disabled={currentStep === 7}
              >
                {currentStep === 6 ? "သဘောတူပါသည်။" : "ရှေ့သို့"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
