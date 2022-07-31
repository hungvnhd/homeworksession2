// bài tập 1:

// let a = Number(prompt("Nhập vào số a"));
// let b = Number(prompt("Nhập vào số b"));

// if (a%b===0){
//     alert(`${a + " chia hết cho " + b}`);
// }    else {
//     alert(`${a + " không chia hết cho " + b}`);
// }


// //bài tập 2:

// let age = Number(prompt("Nhập tuổi của học sinh"));

// if (age===15 & age===16){
//     alert("Bạn đủ điều kiện học lớp 10");
// }   else{
//     alert("Bạn không đủ điều kiện học lớp 10");
// }

// // bài tập 3:
// let a = Number(prompt("Mời bạn nhập số nguyên bất kì"));

// if (a>0 && a%1===0){
//     alert(`${a + " là số nguyên lớn hơn 0"}`);
// }   else if (a<0 &&a%1===0){
//     alert(`${a + " là số nguyên nhỏ hơn 0"}`);
// }   else if(a===0){
//     alert("a=0");
// }   else(`${a + " không phải là số nguyên"}`);

// bài tập 4:

// let q=Number(prompt("nhập số a"));
// let w=Number(prompt("Nhập số b"));
// let e=Number(prompt("Nhập số c"));

// if (q>=w && q>=e){
//     console.log(`${"Số lớn nhất là " + q}`);
// }   else if (w>=q && w >=e){
//     console.log(`${"Số lớn nhất là "+ w}`);
// }   else {
//     console.log(`${"Số lớn nhất là "+ e}`);
// }   


// bài tập 5:
// let a = Number(prompt("nhập điểm thi giữa kì"));
// let b =Number(prompt("nhập điểm thi cuối kì"));
// let tb= (a+b)/2

// if (tb<3){
//     alert("học lực yếu");
// }   else if(tb>=3 && tb<5){
//     alert("học lực trung bình");
// }   else if(tb>=5 && tb<7.5){
//     alert("học lực khá");
// }   else if(tb>=7.5 && tb<=10){
//     alert("học lực giỏi");        
// }   else {
//     alert("điểm không hợp lệ");
// }

// bài tập 6:

// let doanhso = Number(prompt("Nhập doanh số bán hàng, đơn vị(triệu vnđ)"));
//     if (doanhso > 0 && doanhso<=100){
//         alert(`${"Hoa hồng bạn nhận được là " + (doanhso*5)/100 + " triệu đồng"}`);
//     }   else if (doanhso>100 && doanhso<300){
//         alert(`${"Hoa hồng bạn nhận được là " + (doanhso*10)/100 + " triệu đồng"}`);
//     }    else if (doanhso>=300){
//         alert(`${"Hoa hồng bạn nhận đượclà " + (doanhso*20)/100 + " triệu đồng"}`);
//     }    else {
//         alert("Doanh số ko hợp lệ");
//     }

// bài tập 7:

let weight = Number(prompt("xin mời nhập cân nặng(kg)"));
let height = Number(prompt("xin mời nhập chiều cao(m)"));
let bmi= weight/(height**2)

if (bmi>0 && bmi<=18){
    alert("thiếu cân");
}   else if (bmi>18 && bmi <=25){
    alert("bình thường");
}   else if (bmi>25 && bmi <=30){
    alert("thừa cân");
}   else if(bmi>30){
    alert("Béo quá, giảm cân đi");
}   else {
    alert("cân nặng hoặc chiều cao không hợp lệ");
}
    
