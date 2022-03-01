# `near-hello-world-as` 
هذا المشروع هو مثال بسيط لعقد ذكي smart contract  تم تنفيذه على منصة نيــر.[NEAR Protocol](https://near.org) 

يمكنك استخدام هذا المشروع كنقطة بداية لتطبيقات البلوك تشين على شبكة نير. 

يحتوي ملف الكود الرئيسي على دالة واحدة فنكشن `sayHello` و التي تقوم - عند استدعائها - بإرجاع جملة "Hello from the blockchain world!" 

## يمكنك مشاهدة فيديو عملي للخطوات التالية هنــا

<center>

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/LubFN4kasN4/0.jpg)](https://www.youtube.com/watch?v=LubFN4kasN4) 
</center>


## طريقة الإستخدام

1. انسخ هذا المشروع clone على جهازك الشخصي فى أى مكان
2. قم بكتابة الأمر   `yarn` فى شاشة الأوامر - ترمنال - لتثبيت المكتبات التي يحتاجها المشروع للتشغيل
3. اكتب الأمر `yarn build:release` لبناء و استخراج ملف wasm من الكود استعداداً لرفعه. ستجد بعد تنفيذ هذا الأمر ملف `helloworld.wasm` تم انشاءه فى هذا المسار `build\release` 
4. قم بكتابة الأمر `near dev-deploy .\build\release\helloworld.wasm` لرفع الملف السابق على البلوك تشين 
5. من المفروض بعد تنفيذ الأمر السابق أن تجد رسالة تحتوى على الحساب الذي تم انشاؤه و وضع الكود عليه - مثل dev-XXXXXX-XXXXXXX 
6. هذا مثال لناتج تنفيذ الأمر السابق

`Transaction Id EtdLuXkhT5eex1ubT1pRKhETZNv8AoAMzadHiJMdGH9z
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/EtdLuXkhT5eex1ubT1pRKhETZNv8AoAMzadHiJMdGH9z
Done deploying to dev-1643380555927-18139425398700
` 

8. قم بكتابة هذا الأمر لاستدعاء الدالة `near call dev-1643380555927-18139425398700 sayHello '{}' --accountId=EXAMPLE.testnet`  
9. يمكنك استخدام هذا الأمر أيضا `near view dev-1643380555927-18139425398700 sayHello`  
10. ستجد ناتج الرسالة ظهر على شاشة الأوامر بناتج العلية 


