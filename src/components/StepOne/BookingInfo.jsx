// import React from "react";
import plus from "./../../assets/image/faPlus.png";

const BookingInfo = () => {
  const infoList = [
    {
      title: "ကြိုတင် (Booking) တင်ခြင်းနှင့် ပယ်ဖျက်ခြင်း",
      content: [
        "ကြိုတင် (Booking) တင်သည့်အချိန်ကို လက်ခံပြီးနောက် Caregiver များသည် အနည်းဆုံး (၁၂) နာရီကြိုတင်အသိပေးခြင်းမရှိဘဲ ပယ်ဖျက်၍မရပါ။",
        "ပထမဆုံး ကြိုတင်မှာကြားသည့်အချိန် ပယ်ဖျက်ပါက သတိပေးချက်တစ်ခုကို ရရှိမည်ဖြစ်သည်။",
        "ထပ်မံ၍ အကြိမ်ကြိမ် ပယ်ဖျက်ခြင်းများရှိလာပါကမိမိအကောင့်ကို ယာယီကန့်သတ်မှုများ ရှိလာမည် ဖြစ်သည်။",
        "ပယ်ဖျက်မှု (၅) ကြိမ် (သို့မဟုတ်) ထို့ထက်ပိုသောအကြိမ်ရေရှိလာပါက Caregiver ၏ အကောင့်ကို အပြီးတိုင် ရပ်ဆိုင်းသွားမည်ဖြစ်သည်။",
      ],
    },
    {
      title: "ငွေပေးချေမှု",
      content: [
        "စောင့်ရှောက်မှုပေးသည့်ဝန်ဆောင်မှုများအတွက် ဝန်ဆောင်ခငွေပေးချေမှုများကို ပလက်ဖောင်းမှ တဆင့်သာ ဆောင်ရွက်မည်ဖြစ်သည်။ Caregiver များသည် Service သုံးစွဲသူ များထံမှ တိုက်ရိုက်ငွေပေးချေမှုများကို လက်ခံခြင်း ခွင့်မပြုပါ။",
        "Caregiver များသည် Service သုံးစွဲသူများထံမှ ဆုကြေးငွေ၊ အပိုငွေ (သို့မဟုတ်) လက်ဆောင်များကို လက်ခံရန် တားမြစ်ထားသည်။",
        "Caregiver များသည် မိမိ Duty မဆင်းနိုင်သော ရက်များကို ကြိုတင်အသိပေးနိုင်သည်။",
        "Caregiver များသည် ငွေပေးချေမှုနှင့်သက်ဆိုင်သည့် ပြဿနာများအတွက် ပလက် ဖောင်းကို ဆက်သွယ်နိုင်သည်။",
      ],
    },
  ];

  const ruleList = [
    {
      title: "စောင့်ထိန်းရန်",
      content: [
        {
          desc: " လူမှုကွန်ယက် မီဒီယာမူဝါဒ",
          body: [
            "Caregiver သည် Service သုံးစွဲသူ၏ ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို လေးစားရမည်ဖြစ်ပြီး Service သုံးစွဲသူနှင့်၎င်းတို့၏ မိသားစုဝင်များ၏ ဓာတ်ပုံများ (သို့မဟုတ်) ဗီဒီယိုများအား Service သုံးစွဲသူ၏ ခွင့်ပြုချက်မရှိဘဲ လူမှုကွန်ယက် မီဒီယာပေါ်တွင် မျှဝေခြင်းမပြုရ။ ",
            "Caregiver သည် Service သုံးစွဲသူ၏ အကြောင်းအချက်အလက်၊ လုပ်ငန်းဆောင် တာ အစီအစဉ်များ (သို့မဟုတ်) တည်နေရာအချက်အလက်များကို ခွင့်ပြုချက်မရှိဘဲ အခြားမည်သည့် ပြင်ပလူကိုမျှ မျှဝေခြင်းမပြုရ။",
          ],
        },
        {
          desc: "Caregiver များမှ သဘောတူညီချက်မျာ",
          body: [
            "စာချုပ်ချုပ်ဆိုထားသည့် ကာလအပြင် စာချုပ်သက်တမ်းကုန်ဆုံးချိန်တွင်လည်း  ထိန်းသိမ်းစောင့်ထိန်းအပ်သည့်အချက်အလက်များအား ပြင်ပသို့မပေါက်ကြားစေရပါ။",
            "Caregiver ၏ အလုပ်အကိုင်နှင့်မသက်ဆိုင်ဘဲ အခြားသော ရည်ရွယ်ချက် တစ်မျိုးမျိုးဖြင့် ထိန်းသိမ်းစောင့်ထိန်းအပ်သည့် အချက်အလက်များကို ဖော်ထုတ်ခြင်း၊ အသုံးပြုခြင်း မပြုလုပ်ပါရန်။",
            "ထိန်းသိမ်းစောင့်ထိန်းအပ်သည့်အချက်အလက်များအား ထပ်တူကူးယူခြင်း (သို့မဟုတ်) အလွဲသုံးစား ပြုလုပ်ခြင်းများ မပြုလုပ်ရန်။",
          ],
        },
      ],
    },
  ];

  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="space-y-2">
        {infoList.map((item, index) => (
          <div key={index} className="mb-10">
            <span className="font-semibold text-[16px] text-secondary">
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
                  <span className="font-bold leading-[36px]">{content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 mt-10">
        {ruleList.map((item, index) => (
          <div key={index} className="mb-10">
            <span className="font-semibold text-[16px] text-secondary">
              {item.title}
            </span>
            <div className="pl-4 mt-5">
              {" "}
              {/* Reduced margin for closer spacing */}
              {item.content.map((content, idx) => (
                <div key={idx} className="text-[14px]">
                  <p className="ms-5 mb-5 font-bold text-secondary">
                    {content.desc}
                  </p>
                  {content.body.map((b, i) => (
                    <div key={i} className="flex items-start mb-5">
                      <img src={plus} className="mr-2 mt-3" />
                      <span className="font-bold leading-[32px]">{b}</span>
                    </div>
                  ))}
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
