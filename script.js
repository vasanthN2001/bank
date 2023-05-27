const fetchUserDetail = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const jsonObj = JSON.parse(this.responseText)
        console.log(jsonObj.length);
    console.log(jsonObj);

    let html="";
     
    for(let i=0;i<jsonObj.length;i++)
    {
        const element = jsonObj[i];
        
console.log(i);
 html += '<div class="container"><p class="userName">' + element.account_number + '</p>' + '<span class="Name">' + element.bank_name
 + '</span>'
   
    }
       
document.getElementById("main").innerHTML=html;
    };
    xhttp.open("GET", "https://random-data-api.com/api/v2/banks?size=10", true);
    xhttp.send();

};

