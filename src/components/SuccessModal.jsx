// import React from 'react'
import plus from "./../assets/image/faPlus.png";
import form from "./../assets/image/form.png";

function SuccessModal() {
  return (
    <div className="mt-20">
      <div className="">
        <img src={form} className="mx-auto mb-5" />
        <div className="text-center">
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
