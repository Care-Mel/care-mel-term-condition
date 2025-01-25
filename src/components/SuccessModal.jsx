// import React from 'react'
import { motion } from "framer-motion";
// import form from "./../assets/image/form.png";

function SuccessModal() {
  return (
    <div className="mt-20">
      <div className="">
        {/* <img src={form} className="mx-auto mb-5" /> */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="w-36 h-36 mx-auto relative">
                <motion.svg
                  viewBox="0 0 50 50"
                  className="w-full h-full"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="#3DBB47"
                    strokeWidth="1"
                    fill="#3DBB47"
                  />
                  <motion.path
                    d="M14 26l8 8 16-16"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.svg>
              </div>
            </div>
          </motion.div>
          {/* <img src={plus} className="mr-2 mt-3" /> */}
          <span className="font-bold text-[24px] leading-[40px]">
            အချက်အလက်များအား <br /> အောင်မြင်စွာ <br />
            မှတ်တမ်းတင် ပြီးပါပြီ။
          </span>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
