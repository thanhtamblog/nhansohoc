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

  function createPitagoChart(birthdate){

let digits = birthdate.replaceAll("-","").split("");

let count = {
1:0,2:0,3:0,
4:0,5:0,6:0,
7:0,8:0,9:0
};

digits.forEach(d=>{
if(count[d] !== undefined){
count[d]++;
}
});

return count;
}
pythagorasChart(birth);


}

function renderPitago(chart){

let layout = [1,4,7,2,5,8,3,6,9];

let html = `<div class="pitago-grid">`;

layout.forEach(num=>{

let value = chart[num] > 0 ? String(num).repeat(chart[num]) : "";

let className = chart[num] > 0 ? "pitago-filled" : "pitago-empty";

html += `<div class="pitago-cell ${className}">${value}</div>`;

});

html += `</div>`;

document.getElementById("pitagoChart").innerHTML = html;
}

function showMissingNumbers(chart){

let missing = [];

for(let i=1;i<=9;i++){
if(chart[i] == 0){
missing.push(i);
}
}

let text = missing.length ? missing.join(", ") : "Không có";

document.getElementById("missingNumbers").innerHTML =
"<b>Số thiếu:</b> " + text;

}function showMissingNumbers(chart){

let missing = [];

for(let i=1;i<=9;i++){
if(chart[i] == 0){
missing.push(i);
}
}

let text = missing.length ? missing.join(", ") : "Không có";

document.getElementById("missingNumbers").innerHTML =
"<b>Số thiếu:</b> " + text;

}
function detectArrows(chart){

let arrows = [];

if(chart[1] && chart[2] && chart[3]){
arrows.push("Mũi tên Kế hoạch (1-2-3)");
}

if(chart[4] && chart[5] && chart[6]){
arrows.push("Mũi tên Ý chí (4-5-6)");
}

if(chart[7] && chart[8] && chart[9]){
arrows.push("Mũi tên Hoạt động (7-8-9)");
}

if(chart[1] && chart[4] && chart[7]){
arrows.push("Mũi tên Thực tế (1-4-7)");
}

if(chart[2] && chart[5] && chart[8]){
arrows.push("Mũi tên Cân bằng cảm xúc (2-5-8)");
}

if(chart[3] && chart[6] && chart[9]){
arrows.push("Mũi tên Trí tuệ (3-6-9)");
}

document.getElementById("pitagoArrows").innerHTML =
"<b>Mũi tên Pitago:</b><br>" + (arrows.join("<br>") || "Không có");

}

let chart = createPitagoChart(birth);

renderPitago(chart);

showMissingNumbers(chart);

detectArrows(chart);

