console.log("JS đã chạy");
function reduceNumber(num){

while(num > 9 && num !== 11 && num !== 22){
num = num.toString().split('').reduce((a,b)=>a+parseInt(b),0);
}

return num;

}

function lifePath(date){

let nums = date.replaceAll("-","");

let sum = 0;

for(let i=0;i<nums.length;i++){
sum += parseInt(nums[i]);
}

return reduceNumber(sum);

}

function pythagorasChart(date){

let nums = date.replaceAll("-","");

let count={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};

for(let n of nums){

if(n!=="0"){
count[n]++;
}

}

for(let i=1;i<=9;i++){

let cell=document.getElementById("c"+i);

cell.innerHTML="";

for(let j=0;j<count[i];j++){
cell.innerHTML+=i;
}

}

}

function calculate(){

let name=document.getElementById("name").value;

let birth=document.getElementById("birth").value;

if(!birth){
alert("Hãy nhập ngày sinh");
return;
}

let life=lifePath(birth);

document.getElementById("result").innerHTML=

"<h2>Số chủ đạo: "+life+"</h2>";

pythagorasChart(birth);


}
