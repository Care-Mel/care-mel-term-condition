// import React from 'react'
import plus from "./../assets/image/faPlus.png";
import form from "./../assets/image/form.png";

function SuccessModal() {
  return (
    <div className="mt-20">
      <div className="">
        <img src={form} className="w-[150px] h-[150px] mx-auto mb-5" />
        <div className="text-center">
          {/* <img src={plus} className="mr-2 mt-3" /> */}
          <span className="font-bold leading-[32px]">
            အချက်အလက်များအား အောင်မြင်စွာ မှတ်တမ်း တင်ပြီးပါပြီ
          </span>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
