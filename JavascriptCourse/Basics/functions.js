let count = 0;
const data = setInterval(() => {
    for (let i = 0; i < 1500; i++) {
        count++;
        fetch("http://localhost:8080/api/employees").then(res => { res.json() }).then(res => { console.log(res, "================================") }).catch(err => { })
    }

    console.log("Creating 3000 requests for the last attempt we got "+count);
    count=0;




}, 5000);

