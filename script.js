const btnCreate = document.querySelector('.btnCreateVertex');
const btnOutMatrix = document.querySelector('.outMatrixs');
const btnOutMatrix1 = document.querySelector('.outMatrixs1');
const dataEntry = document.querySelector('.dataEntry');
const td = document.querySelectorAll('td');
const tableB = document.querySelector('.tableOfMatrixB');
const vertexValue = document.querySelector('.vertexInput');
const containerForG = document.querySelector('.container_for_G')
const inputOfNum = document.querySelector('.inputOfNumbers')
btnCreate.addEventListener('click', getValue);
function getValue() {
dataEntry.textContent = ''
tableB.textContent =''
const valueOfInput = vertexValue.value;
if (!valueOfInput) {
alert('Поле пустое');
return;
}
dataEntry.textContent = '';
for (let i = valueOfInput; i > 0; i--) {
dataEntry.insertAdjacentHTML('afterbegin',
`
<div class="first">
<div>G<sup>-</sup>(${i}) </div>
<input type="text" class="inputOfNumbers">
</div>
`
)
}
btnOutMatrix.style.display = 'block';
btnOutMatrix1.style.display = 'block';
btnOutMatrix.addEventListener('click', test);
btnOutMatrix1.addEventListener('click', test1);
}





function test(){
    
btnOutMatrix.style.display = 'none';
let dataOfInputs = Array.from(document.querySelectorAll('.inputOfNumbers'), el => el.value);
let a = [];
let sumOfArcs;
for (let t = 0; t < dataOfInputs.length; t++) {
a[t] = dataOfInputs[t].split(' ');
}
for (let el in a) {
a[el] = a[el].map(parseFloat);
a[el] = a[el].filter(Number);
}

console.log(a);

console.log('G-:',a);
let Gm = [];
for(let i = 0; i < a.length; i++){
Gm.push([]);
for(let j = 0; j < a.length; j++){
Gm[i][j] = 0;
}
}
let c = [];
for(let i = 0; i < a.length; i++){
c.push([]);
}
let Gp = [];
for(let i = 0; i < a.length; i++){
Gp.push([]);
for(let j = 0; j < a.length; j++){
Gp[i][j] = 0;
}
}


for(let i = 0; i < a.length; i++){//преобразование множества G- в G+
for(let j = 0; j < a[i].length; j++){
for(let k = 0; k < a.length; k++){
if(a[i][j] - 1 == k){
c[k].push(i+1)
}
}
}
}

for(let i = 0; i < c.length; i++){//преобразование множества G+ в матрицу смежности
for(let j = 0; j < c[i].length+1; j++){
for(let k = 0; k < Gp.length+1; k++){
if(c[i][j] == k){
Gp[i][k-1] = 1;
}
}
}
}
console.log('G+:',c);
console.log('Матрица смежности G+:',Gp);

console.log(Gp);
let sum_array = [];
console.log(Gp);//матрица смежности из G-, только без нулей
for(let i = 0; i < Gp.length; i++){
    sum_array.push([]);
    for(let j = 0; j < Gp[i].length; j++){
        if(Gp[i][j] != 0){
            sum_array[i].push(Gp[i][j]);
        }
    }
}
for(let i = 0; i < sum_array.length; i++){
    sum_array[i] = sum_array[i].length;
}
let max = 0;
sum_array.forEach(function(item) {
    max += item;
  });
let m = max/2;
console.log(m,max);
let R = 0.5/(((sum_array.length - 1) * max) - 1);
R = Math.trunc(R);//СТРУКТУРНАЯ ИЗБЫТЫЧНОСТЬ
for(let i = 0; i < sum_array.length; i++){
    sum_array[i] = sum_array[i] * sum_array[i];
}
max = 0;
sum_array.forEach(function(item) {
    max += item;
  });
console.log(max);
let S = max - (4*(m*m)/sum_array.length);
S = S.toFixed(1);//НЕРАВНОМЕРНОСТЬ РАСПРЕДЕЛЕНИЯ
console.log(S);
dataEntry.innerHTML = '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p>Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
btnOutMatrix.style.display = 'none';
btnOutMatrix1.style.display = 'none';

}









function test1(){
    
    btnOutMatrix1.style.display = 'none';
    let dataOfInputs = Array.from(document.querySelectorAll('.inputOfNumbers'), el => el.value);
    let a = [];
    let sumOfArcs;
    for (let t = 0; t < dataOfInputs.length; t++) {
    a[t] = dataOfInputs[t].split(' ');
    }
    for (let el in a) {
    a[el] = a[el].map(parseFloat);
    a[el] = a[el].filter(Number);
    }

    console.log(a);

    console.log('G-:',a);
    let Gm = [];
    for(let i = 0; i < a.length; i++){
    Gm.push([]);
    for(let j = 0; j < a.length; j++){
    Gm[i][j] = 0;
    }
    }
    let c = [];
    for(let i = 0; i < a.length; i++){
    c.push([]);
    }
    let Gp = [];
    for(let i = 0; i < a.length; i++){
    Gp.push([]);
    for(let j = 0; j < a.length; j++){
    Gp[i][j] = 0;
    }
    }
    
    
    for(let i = 0; i < a.length; i++){//преобразование множества G- в G+
    for(let j = 0; j < a[i].length; j++){
    for(let k = 0; k < a.length; k++){
    if(a[i][j] - 1 == k){
    c[k].push(i+1)
    }
    }
    }
    }
    
    for(let i = 0; i < c.length; i++){//преобразование множества G+ в матрицу смежности
    for(let j = 0; j < c[i].length+1; j++){
    for(let k = 0; k < Gp.length+1; k++){
    if(c[i][j] == k){
    Gp[i][k-1] = 1;
    }
    }
    }
    }
    console.log('G+:',c);
    console.log('Матрица смежности G+:',Gp);
    
    let sum_array = [];
    console.log(Gp);//матрица смежности из G-, только без нулей
    for(let i = 0; i < Gp.length; i++){
        sum_array.push([]);
        for(let j = 0; j < Gp[i].length; j++){
            if(Gp[i][j] != 0){
                sum_array[i].push(Gp[i][j]);
            }
        }
    }
    for(let i = 0; i < sum_array.length; i++){
        sum_array[i] = sum_array[i].length;
    }
    let max = 0;
    sum_array.forEach(function(item) {
        max += item;
      });
    let m = max;
    //console.log(m,max);
    let R = 0.5/(((sum_array.length - 1) * max) - 1);
    R = Math.trunc(R);//СТРУКТУРНАЯ ИЗБЫТЫЧНОСТЬ
    for(let i = 0; i < sum_array.length; i++){
        sum_array[i] = sum_array[i] * sum_array[i];
    }
    max = 0;
    sum_array.forEach(function(item) {
        max += item;
      });
    //console.log(max);
    let S = max - (4*(m*m)/sum_array.length);
    S = S.toFixed(1);//НЕРАВНОМЕРНОСТЬ РАСПРЕДЕЛЕНИЯ
    //console.log(S);
    if(S < 0){
       test();
       dataEntry.innerHTML += '<p style="text-align: center;color:red;">Невозможно рассчитать показатель для ориентированного графа</br>расчет произведен по неориентированному</p>';
    }
    else{
    dataEntry.innerHTML = '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p>Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
    }
    btnOutMatrix.style.display = 'none';
    btnOutMatrix1.style.display = 'none';
    }









