// import React from "react";
import plus from "./../../assets/image/faPlus.png";

const BookingInfo = () => {
  const infoList = [
    {
      title: "ကြိုတင် (Booking) တင်ခြင်းနှင့် ပယ်ဖျက်ခြင်း",
      content: [
        "ကြိုတင် (Booking) တင်သည့်အချိန်ကို လက်ခံပြီးနောက် Caregiver/ Nurseaid များသည် အနည်းဆုံး (၁၂) နာရီကြိုတင်အသိပေးခြင်းမရှိဘဲ ပယ်ဖျက်၍မရပါ။",
        "ပထမဆုံး ချိန်းဆိုထားသည့် Booking ပယ်ဖျက်ပါက Platform မှ သတိပေးစာ ကို ရရှိမည်ဖြစ်သည်။",
        "ထပ်မံ၍ ဒုတိယအကြိမ်နှင့်အထက် ပယ်ဖျက်ခြင်းများရှိလာပါကမိမိအကောင့်ကို Duty ချိတ်ဆက်ပေးမှုများ ယာယီကန့်သတ်မှုများ ရှိလာမည် ဖြစ်သည်။",
        "၁၂နာရီကြိုတင် အကြောင်း ကြားမှုမရှိပဲ ရုတ်တရက် Booking ပယ်ဖျက်မှု (၃) ကြိမ် (သို့မဟုတ်) ထို့ထက်ပိုသောအကြိမ်ရေရှိလာပါက Caregiver/ Nurseaid ၏ အကောင့်ကို အပြီးတိုင် ရပ်ဆိုင်းသွားမည်ဖြစ်သည်။",
      ],
    },
    {
      title: "ငွေပေးချေမှု",
      content: [
        "စောင့်ရှောက်မှုပေးသည့်ဝန်ဆောင်မှုများအတွက် ဝန်ဆောင်ခငွေပေးချေမှုများကို ပလက်ဖောင်းမှ တဆင့်သာ ဆောင်ရွက်မည်ဖြစ်သည်။ Caregiver/ Nurseaid များသည် Service သုံးစွဲသူ များထံမှ တိုက်ရိုက်ငွေပေးချေမှုများကို လက်ခံခြင်း ခွင့်မပြုပါ။",
        "Caregiver/ Nurseaid များသည် Service သုံးစွဲသူများထံမှ ဆုကြေးငွေ၊ အပိုငွေ (သို့မဟုတ်) လက်ဆောင်များကို လက်ခံရန် တားမြစ်ထားသည်။",
        "Caregiver/ Nurseaid များသည် မိမိ Duty မဆင်းနိုင်သော ရက်များကို ကြိုတင်အသိပေးနိုင်သည်။",
        "Caregiver/ Nurseaid များသည် ငွေပေးချေမှုနှင့်သက်ဆိုင်သည့် ပြဿနာများအတွက် ပလက် ဖောင်းကို ဆက်သွယ်နိုင်သည်",
      ],
    },
  ];

  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="space-y-2">
        {infoList.map((item, index) => (
          <div key={index} className="mb-10">
            <span className="font-bold text-[16px] text-secondary">
              {item.title}
            </span>
            <div className="pl-4 mt-5">
              {" "}
              {/* Reduced margin for closer spacing */}
              {item.content.map((content, idx) => (
                <div key={idx} className="flex items-start mb-5 text-[14px]">
                  {/* Added 'items-center' and some margin */}
                  <img src={plus} className="mr-2 mt-3" />
                  {/* Adjusted color */}
                  <span className="font-medium leading-[36px]">{content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
