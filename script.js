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
   
    }
       
















    };
    xhttp.open("GET", "https://random-data-api.com/api/v2/users?size=10", true);
    xhttp.send();

};

