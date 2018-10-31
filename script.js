var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var button1 = document.getElementById("XHR");
var button2 = document.getElementById("Fetch");
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

button1.addEventListener("click", xml)

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

button2.addEventListener("click", fetching);