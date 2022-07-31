// //                 //var có thể khai báo đa dạng các kiểu biến như number, string, boolean,etc
// //     // biến var thường sẽ có scope là globally scoped.
// //     // biến var có tính chất hoisting: nghĩa là dù khai báo ở đâu cũng sẽ được đưa lên đầu scope trước khi code đc thực hiện
// //                 //let đc khai báo sẽ có scope là blocked scope chứ ko phải globally hay locally
// //     //đối với biến có scope là block scoped nếu ra khỏi scope được khai báo thì sẽ không thể sử dụng được nữa.
// //     // let chỉ cho phép chúng ta cập nhật lại giá trị biến chứ ko đc khai báo lại biến
// //                 //const cũng có scope là blocked scope và có tính hoisting 
// //     // trong biến const nếu kiểu dữ liệu của biến thuộc kiểu primitive(string,number,boolean,null và undifined) thì chúng 
// //     //ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.
// //                 // trong trường hợp kiểu biến reference(bao gồm object, array, và function) thì ko thể khai báo lại biến nhưng vẫn có thể 
// //                 // cập nhật lại các biến đó
    
    



// // // bai tap 1:
// // // boolean là 1 kiểu dữ liệu nguyên thuỷ chỉ có 2 giá trị là true và false
// // // boolean có chức năng dùng để lưu trữ giá trị đúng sai của 1 mệnh đề so sánh nào đó

// // // bài tập 2:

// // let a = prompt("Enter a number in range 0-9");

// // if(a>=0 && a<4.5){
// //     console.log("Lower half of 9");
// // }   else if(a>4.5 && a<=9){
// //     console.log("Higher half of 9");
// // }   else  if(a==4.5){
// //     console.log(`${a + " is the centre of the range 0-9"}`);
// // }   else {
// //     console.log(`${a + "is not belonged to the range of 0-9"}`);
// // }
// // //bài tập 2
// // let n= prompt("Input number n");
// // let x = prompt("Input number x");
// // if(x>=0 && x < n/2){
// //     console.log(`${x + " is in lower half of " + n}`);
// // }   else if(x==n/2){
// //     console.log(`${x + " is the centre of the range 0-" +n }`);
// // }    else if(x>n/2 && x<=n) {
// //     console.log(`${x + " is in higher half of " + n}`);
// // }    else {
// //     console.log(`${x + " is not belonged to the range 0-"+n}`);
// // }
// // // bài tập 3
// // // let x1= prompt("Input number x")
// // // if (x1%2==0) {
// // //     console.log(`${x1 + " is an even number"}`);    
// // // } else { 
// // //     console.log(`${x1 + "is an odd number"}`);
// // // } 
// // // //bài tập 4

// // let weight = prompt("cân nặng của bạn (kg)");
// // let height = prompt("Chiều cao của bạn (m)");
// // let bmi = weight/(height)**2
// // alert(`${"Chỉ số bmi của bạn là " + bmi}`);

// //     if (bmi<16) {
// //         alert("mày là bộ xương à");
// //     } else if(bmi>=16 && bmi<18.5){
// //         alert("mày là idol Hàn quốc à");
// //     } else if(bmi>=18.5 && bmi <25) {
// //         alert("mày đẹp zai đấy");
// //     }  else if(bmi>=25 && bmi<30){
// //         alert("Mày béo quá rồi đấy");
// //     }  else {
// //         alert("Thôi không cần giảm nữa đâu");
// //     }
    
// // //     
// // // //bài tập 5

// let toan = prompt("nhập điểm Toán");
// let ly = prompt("nhập điểm Lý");
// let hoa = prompt("nhập điểm Hoá");
// let van = prompt("nhập điểm Văn");
// let anh = prompt("nhập điểm Anh");

// let tb = (`${(toan + ly + hoa + van + anh)/5}`);

//     if (tb<4){
//         console.log("grade F");
//     }   else if(tb>=4 && tb<6){
//         console.log("grade E");
//     }    else if(tb>=6 && tb<7){
//         console.log("grade D");
//     }   else if(tb>=7 && tb<8){
//         console.log("grade C");
//     }   else if(tb>=8 && tb<9){
//         console.log("grade B");
//     }    else if(tb>=9 && tb<=10){
//         console.log("grade A");
//     }   else {
//         console.log(" Điểm ko hợp lệ");
//     }

// // // bài tập 6:
//     let year = Number(prompt("nhập năm bất kì"));

//     if(year > 0 && year % 1 ===0){
//         console.log("Năm hợp lệ");
//         if(year % 4===0){
//             if(year%100===0 && year %400===0){
//             console.log(`${"Năm " + year + " là năm nhuận"}`);
//         }   else if (year%100!=0){
//             console.log("Năm "+ year + " là năm nhuận");
//         }   else {
//             console.log("Năm " + year + " là năm không nhuận");
//         }   
        
//     } else {
//             console.log("Năm " + year + " là năm không nhuận");
//         }
        
//     }else {
//             console.log(`${"Năm " + year + " không hợp lệ"}`);
//         }

// // bài tập 7:

//         let cao = Number(prompt("nhập chiều cao của bạn(cm)"));

//         if (cao >0 && cao<150){
//             console.log("Mày là người lùn à");
//         }   else if(cao>=150 && cao <=169){
//             console.log("Trông mày cũng tàm tạm, cho 3 điểm");
//         }   else if(cao>=179){
//             console.log("Mày trông cũng được đấy");
//         }   else {
//             console.log("Chiều cao không hợp lệ");
//         }

// // bài tập 8:

            
//     let x = Number(prompt("nhập số a"));
//     let y = Number(prompt("nhập số b"));

//     if (x>y){
//         console.log(`${"Số " + x +" là số lớn hơn"}`);
//     }   else if (x===y){
//         console.log("Hai số bằng nhau");
//     }   else {
//         console.log(`${"Số " + y + " là số lớn hơn"}`);
//     }

    
        
// // //bai 9

// let ab = Number(prompt("nhap so a"));
// let ba = Number(prompt("nhap so b"));
// let dau= prompt("nhap dau");

// switch(dau){
//     case'+':

//     console.log(`${ab+ba}`);

//     break;

//     case'-':
//     console.log(`${ab - ba}`);

//     break;

//     case'*':

//     console.log(`${ab*ba}`);

//     break;

//     case'/':

//     console.log(`${ab/ba}`);

//     break;

//     case'%':

//     console.log(`${ab%ba}`);

//     break;

//     case'**':

//     console.log(`${ab**ba}`);

//     break;

//     default:

//     console.log("Dau ko hop le");

//     break;
// }


// // bài tập 10:

let q=Number(prompt("nhập số a"));
let w=Number(prompt("Nhập số b"));
let e=Number(prompt("Nhập số c"));

if (q>=w && q>=e && w>=e){
    console.log(`${"Max là " + q + "; Min là " + e }`);
}   else if (w>=q && w >=e && q>=e){
    console.log(`${"Max là "+ w + "; Min là " + e}`);
}   else if (e>=q &&e>=w && q>=w){
    console.log(`${"Max là "+ e +"; Min là " + w}`);
}    else{
    console.log(`${"Max là " + e + "; Min là " + q}`);
}

// //bài tập 11:

// let r= Number(prompt("Nhập số bất kì"));

// if (Math.sqrt(r)%1===0){
//     console.log(`${"Số " + r +" là số chính phương"}`);
// }   else {
//     console.log(`${"Số " + r +" không là số chính phương"}`);
// }   



// // baitap 12:

// let ngay=Number(prompt("Mời bạn nhập ngày sinh của bạn"));
// let thang=Number(prompt("Mời bạn nhập tháng sinh của bạn"));

// switch (thang) {
//     case 1:
//         if (ngay>0 && ngay<=19){
//             alert("ban thuoc cung ma ket");
//         }   else if (ngay>=20 && ngay <=31){
//             alert("ban thuoc cung bao binh");
//         }   else {
//             alert("Ko hợp lệ");
//         }
//     break;
    
//     case 2:
//         if(ngay>0 && ngay <=18){
//             alert("Bạn thuộc cung Bảo Bình");
//         }   else if (ngay>=19 && ngay <=28 && ngay===29){
//             alert("Bạn thuộc cung Song Ngư");
//         }   else{
//             alert("Ko hợp lệ")
//         }
//     break;

//     case 3:
//         if(ngay>0 && ngay<=20){
//             alert("Bạn thuộc cung Song Ngư");
//         }   else if (ngay>=21 && ngay<=31){
//             alert("Bạn thuộc cung Bạch Dương");
//         }   else {
//             alert("Ko hợp lệ");
//         }
//     break;

//     case 4:
//         if(ngay>0 && ngay<=19){
//             alert("Bạn thuộc cung Bạch Dương");
//         }   else if (ngay>=20 && ngay<=30){
//             alert("Bạn thuộc cung Kim Ngưu");
//         }   else {
//             alert("Ko hợp lệ");
//         }
//     break;

//     case 5:
//         if(ngay>0 && ngay <=20){
//             alert("Bạn thuộc cung Kim Ngưu");
//         }   else if (ngay >=21 && ngay<= 31){
//             alert("Bạn thuộc cung song tử");
//         }   else {
//             alert("ko hợp lệ");
//         }
//     break;
    
//     case 6: 
//         if(ngay >0 && ngay <=21){
//             alert("Bạn thuộc cung Song Tử");
//         }   else if (ngay>=22 && ngay<=30){
//             alert("Bạn thuộc cung Cự Giải");
//         }   else ("Ko hợp lệ");
//     break;
//     case 7:
//         if(ngay>0 && ngay <=22){
//             alert("Bạn thuộc cung Cự Giải");
//         }   else if (ngay>=23 && ngay <=31){
//             alert("Bạn thuộc cung Sư Tử");
//         }   else {
//             alert("Ko hợp lệ");
//         }
//     break;
//     case 8 :
//         if (ngay >0 && ngay <=22){
//             alert("Bạn thuộc cung Sư Tử");
//         }   else if (ngay >=23 && ngay<= 30){
//             alert("Bạn thuộc cung Xử Nữ");
//         }   else{
//             alert("Ko hợp lệ");
//         }
//     break;
//     case 9:
//         if (ngay>0 && ngay <=22){
//             alert("Bạn thuộc cung Xử Nữ");
//         }   else if (ngay>=23 && ngay <=31){
//             alert("Bạn thuộc cung Thiên Bình");
//         }   else {
//             alert("Ko hợp lệ");
//         }
//     break;
//     case 10:
//         if (ngay>0 && ngay <=23){
//             alert("Bạn thuộc cung Thiên Bình");
//         }   else if (ngay>=24 && ngay<=30){
//             alert("Bạn thuộc cung Hổ Cáp");
//         }   else {
//             alert("Ko hợp lệ");
//         }
//     break;
//     case 11: 
//         if(ngay>0 && ngay <=21){
//             alert("Bạn thuộc cung Hổ Cáp");
//         }   else if(ngay>=22 && ngay<=31){
//             alert("Bạn thuộc cung Nhân Mã");
//         }   else("Ko hợp Lệ")
//     break;
//     case 12:
//         if(ngay>0 && ngay <=21){
//             alert("Bạn thuộc cung Nhân Mã");
//         }   else if(ngay>=22 && ngay<=30){
//             alert("Bạn thuộc cung Ma Kết");
//         }   else("Ko hợp lệ")
//     break;
//     default:
//         alert("Ko hợp lệ");
//     }

//  bài tập 13:

// let a = Number(prompt("Nhập tham số a"));
// let b = Number(prompt("Nhập tham số b"));
// let c = Number(prompt("Nhập tham số c"));
// let delta = (b**2 - (4*a*c));

// if (delta>0){
//     alert(`${"Phương trình có 2 nghiệm là " + (0-b+Math.sqrt(delta))/2 + " và " + (0-b-Math.sqrt(delta))/2 }`);
// }  else if (delta===0){
//     alert(`${"Phương trình có 1 nghiệm là " + (0-b)/(2*a)}`);
// }  else {
//     alert("Phương trình vô nghiệm");
// }

//bài tập 14:

// let a = prompt("nhập độ dài cạnh thứ nhất");
// let b = prompt("nhập độ dài cạnh thứ hai");
// let c = prompt("nhập độ dài cạnh thứ ba");

// if(a+b>c && a+c>b && b+c>a){
//     alert(`${a+ " "+ b + " "+ c + " là 3 cạnh của 1 tam giác"}`);   
// }   else {
//     alert("3 cạnh trên không phải 3 cạnh của 1 tam giác");
// }




