import React from "react";
import BookingInfo from "./StepOne/BookingInfo";
import HomeRule from "./StepOne/HomeRule";
import { delay, motion } from "framer-motion";
import CaregiverPower from "./StepOne/CaregiverPower";
import AgreeForm from "./StepOne/AgreeForm";
import SuccessModal from "./StepOne/SuccessModal";

const Stepper = ({ currentStep }) => {
  const steps = [
    { label: "စည်းမျဉ်းစည်းကမ်း", number: 1 },
    { label: "လုပ်ငန်းစဉ်တာ", number: 2 },
    { label: "သဘောတူညီချက်", number: 3 },
  ];

  const formVarient = {
    hidden: {
      opacity: 0,
      x: "-100vw",
      transition: {
        else: "easeInOut",
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {currentStep < 4 &&
          steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full text-[12px] font-bold flex items-center justify-center border border-primary ${
                  currentStep >= step.number
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                {step.number}
              </div>
              <span className={`mt-2 text-[10px] font-bold text-primary`}>
                {step.label}
              </span>
            </div>
          ))}
      </div>

      {/* Progress Bar */}
      {currentStep < 4 && (
        <div className="mt-4 h-2 bg-sub rounded">
          <div
            className={`h-full bg-primary transition-all duration-300 ease-in-out rounded`}
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      )}

      <div className="mt-5">
        {currentStep === 1 && (
          <motion.div
            key={1}
            variants={formVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookingInfo />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            key={2}
            variants={formVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <HomeRule />
          </motion.div>
        )}
        {currentStep === 3 && (
          <motion.div
            key={3}
            variants={formVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CaregiverPower />
          </motion.div>
        )}
        {currentStep === 4 && (
          <motion.div
            key={4}
            variants={formVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AgreeForm />
          </motion.div>
        )}
        {currentStep === 5 && (
          <motion.div
            key={5}
            variants={formVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SuccessModal />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
