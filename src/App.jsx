import { useState } from "react";
// import Stepper from "./components/Stepper";
import axios from "axios";
import StepperForm from "./components/StepperForm";
// import { ReactComponent as Logo } from "./assets/image/logo.svg";
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
          "https://api.caremelmm.com/api/v1/term-and-condition",
          data,
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
    <div className="min-h-screen max-w-[440px] overflow-hidden mx-auto py-1 px-[24px] bg-background">
      <div className="h-[80vh]">
        {currentStep === 1 && (
          <div className="flex flex-col justify-end gap-8 mb-10 items-center h-full">
            <img src="./logo.svg" alt="" />
            <p className="text-center font-bold text-secondary text-[20px] mb-10 leading-[1.8]">
              Healthy Nara ပလက်ဖောင်းတွင် Caregiver / Nurse Aide များအတွက်
              လိုက်နာရန် စည်းမျဉ်းစည်းကမ်းများ
            </p>
          </div>
        )}
        {currentStep !== 1 && currentStep !== 7 && (
          <div>
            <p className="font-bold text-secondary text-[20px] mt-5 leading-[1.8]">
              Healthy Nara ပလက်ဖောင်းတွင် Caregiver / Nurse Aide များအတွက်
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
                className="bg-white font-sofia font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full mr-2 transition-all duration-300 ease-in-out active:bg-secondary"
              >
                နောက်ပြန်သွားမယ်
              </button>
            )}
            {currentStep !== 7 && (
              <button
                onClick={() => {
                  setCurrentStep((prev) => Math.min(prev + 1, 6));
                  handleSubmission();
                }}
                className="font-sofia w-full bg-primary text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
                // disabled={currentStep === 7}
              >
                {currentStep === 6 ? "သဘောတူပါသည်။" : "ရှေ့ဆက်မယ်"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
