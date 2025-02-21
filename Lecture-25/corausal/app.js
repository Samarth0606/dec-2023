let arrImg = [
    "https://images.unsplash.com/photo-1739987752520-f8da640d1b2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1740121565887-efe5b47fe9fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1739992115892-36453a241b5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1735348061620-81cf27a5b6ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
]


let imgEl = document.querySelector('img');
let n = 0;

let idd = setInterval(function(){
    imgEl.src = arrImg[n]
    n = (n+1)%arrImg.length;
} , 2000)



// after 30s => stop changing


setTimeout(function(){
    clearInterval(idd)
}, 10000)