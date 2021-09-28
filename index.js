var dob=document.querySelector("#dob")
var luckyno=document.querySelector("#luckyno")
var checknumber=document.querySelector("#checknumber")
var message=document.querySelector("#output")
var total=0;

function changinghifens(dob){
    
    dob=dob.replaceAll("-","")
    return dob;
}
function calculatesum(amountdifference,date1){
  
for(let i=0;i<date1.length;i++){
    total=total+Number(date1.charAt(i));
}

return total;
}
function compare(sum,luckynumber){
    if(sum%luckynumber===0){
        message.innerText="yayy!the bday is lucky"
    }
    else{
        message.innerText="oh-oh!its not that lucky"
    }
}

function isyourbdaylucky(){
    var dateofbirth=dob.value;
    var lucky=luckyno.value;
    if(dateofbirth&&lucky){
 var amountdifference=dateofbirth-lucky;
 var date3=changinghifens(dateofbirth);
 var sum=calculatesum(amountdifference,date3);
 compare(sum,lucky)
    }
    else{
        message.innerText="please give all the fields!!"
    }


    
}



checknumber.addEventListener("click",isyourbdaylucky)