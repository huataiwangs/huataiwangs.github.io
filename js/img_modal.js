$(function(){

// 获取模态窗口
var modal = document.getElementById('myModal');
// var modal1 = document.getElementById('myModal1');

// 获取图片模态框，alt 属性作为图片弹出中文本描述
var img = document.getElementById('Img');
var modalImg = document.getElementById("img01");

var img1 = document.getElementById('Img1');
var img2 = document.getElementById('Img2');
var img3 = document.getElementById('Img3');
var img4 = document.getElementById('Img4');
var img5 = document.getElementById('Img5');
var img6 = document.getElementById('Img6');
var img7 = document.getElementById('Img7');
var img8 = document.getElementById('Img8');
var img9 = document.getElementById('Img9');
var img10 = document.getElementById('Img10');
var img11 = document.getElementById('Img11');
var img12 = document.getElementById('Img12');
var img13 = document.getElementById('Img13');
var img14 = document.getElementById('Img14');
var img15 = document.getElementById('Img15');
var img16 = document.getElementById('Img16');
var img17 = document.getElementById('Img17');


var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img9.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img12.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img13.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img14.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img15.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img16.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img17.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}









// 获取 <span> 元素，设置关闭模态框按钮
var span = document.getElementsByClassName("close")[0];
// var span1 = document.getElementsByClassName("close")[1];

// 点击 <span> 元素上的 (x), 关闭模态框
span.onclick = function() { 
    modal.style.display = "none";
}

// span1.onclick = function() { 
//     modal1.style.display = "none";
// }


});