let Sub_Img = document.querySelectorAll('.SubImg');
let circle = document.querySelector('.circle')
var list_item = document.querySelectorAll(".list-item");
Sub_Img.forEach((item)=>{
    item.addEventListener("click",()=>{
        document.getElementById('SupImg').src = item.src ;
        circle.style.backgroundColor = item.getAttribute('data-color')
        document.getElementById('KeyWord').style.color = item.getAttribute('data-color')
        document.getElementById('button').style.backgroundColor = item.getAttribute('data-color')
        Sub_Img.forEach((Sitem)=>{Sitem.classList.remove('selectImg')})
        item.classList.add('selectImg')
        list_item.forEach((list)=>{
            list.style.setProperty('--Color-Bg',item.getAttribute('data-color'));
        })
        if(item.getAttribute('data-color') == "#a16d4c" || item.getAttribute('data-color') == "#d44b32" ){
            document.getElementById('SupImg').classList.add("rotedImg")
        }
        else{
            document.getElementById('SupImg').classList.remove("rotedImg")
        }
    })
})