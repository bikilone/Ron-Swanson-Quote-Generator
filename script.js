var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var button1 = document.getElementById("XHR");
var button2 = document.getElementById("Fetch");
var button3 = $("#jQuery");
var button4 = document.getElementById("Axios");
var p = document.getElementById("text");

// xmlhttp
function xml() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            appendDOM(JSON.parse(XHR.responseText))
        }
    }
    XHR.open("GET", url);
    XHR.send()
}

// append dom

function appendDOM(data) {
    p.innerText = data;
}

// fetch
function fetching() {
    fetch(url)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            } else throw Error(res.status)
        })
        .then(function (data) {
            appendDOM(data)
        })
        .catch(function (err) {
            console.log(err)
        });
}

// fetching with jQuery

function fetchingWithjQuery() {
    $.ajax(url)
    .done(function(data){
        $("p").html(data);
    })
}

// fetchin with axios

function fetchingWithAxios() {
    axios.get(url)
    .then(function(res) {
       appendDOM(res.data)
    })
    .catch(function(err) {
        if (err.response) {
            console.log("Problem with response");
        } else if (err.request) {
            console.log("Problem with request");
        } else {
            console.log(err.message)
        }
    })
}


button1.addEventListener("click", xml);
button2.addEventListener("click", fetching);
button3.click(fetchingWithjQuery);
button4.addEventListener("click", fetchingWithAxios);