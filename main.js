var favs= Array.from(document.querySelectorAll('.fa-heard'));
var deleteBtns=Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".cards"));
var plusBtns=Array.from(document.querySelectorAll('.fa-plus-circle'));
var minusBtns=array.from(document.querySelectorAll('.fa-minus-circle'));


for(let fav of favs)
(
    fav.addEventlistenner("click")(
        function(){
            if (fav.style.color=="black"){
                fav.style.color="red"
            }else{
                fav.style.color="black"
            }

            

        }
)
)
for (let i in deleteBtns){
    deleteBtns[i].addEventListener("click",
    function(){
        plusBtns.nextElementSibling.innerHTML++
    }
    )
}
for (let minusBtn of minusBtns)
{
    minusBtn.addEventListener("click",
    function(){
        if minusBn.previousElementSibling.innerHTML> 0 ?
         minuusBtn.previousElementSibling.innerHTML--:
         null
    }


)
}
function totoal()
{
    let qte= Array.from(document.querySelectorAll('.qute'));
    let price=Arry.from(document.querySelectorAll('.unitt-price'));
    let s=0
    for (let i=0; i< price.length;i++)

{
     s=s+ price[i].innerHTML qte[i].innerHTML;
}
document.getElementById("total  price").innerHTML=





