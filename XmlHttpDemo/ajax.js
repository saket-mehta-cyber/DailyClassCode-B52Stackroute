function getData(params) {
    alert("About to get data!")

    //step 1 create xml http req obj xhr
    const xhr = new XMLHttpRequest();


    //step2 opening connection

    const url = "http://127.0.0.1:5500/XmlHttpDemo/data.json"
    xhr.open("Get", url);

    //step 3 what to do after load
    xhr.onload = () => {
        // console.log(typeof xhr.responseText);
        let obj = JSON.parse(xhr.responseText);
        console.log(obj);


        for (const key in obj) {

            let dl = document.createElement('dl')
            let dt = document.createElement('dt')
            let dd = document.createElement('dd')

            dt.innerHTML=`${key}`
            dd.innerHTML=`${obj[key]}`

            dl.appendChild(dt)
            dl.appendChild(dd)

            document.getElementById("data").appendChild(dl);



        }






    }



    // step 4
    xhr.send()




}