//import sayHello from "../assembly/index
//لاستدعاء الفنكش
//sayHello
// من الملف
//index
import { sayHello } from "../assembly/index";

//describe
//لوصف مجموعة اختيارات بإسم  يظهر فى النتائج بعد ذلك
describe("Contract", () => {
  //it
  //أحد طرق وصف اختبار مثلما نقول هذا الإختبار يجب أن
  it("should say print the statement 'hello from the blockchain world!' ", () => {
    //expect
    //نتوقع نتيجة استدعاء الفنكشن أن تكون مساوية للجملة
    expect(sayHello()).toStrictEqual("hello from the blockchain world!");
  });
});
