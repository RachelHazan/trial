let count = 0;
var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




const OKForm = e => {
    e.preventDefault();
    let psw = e.target.psw.value;
    let userNAme = e.target.uname.value;
    Users.forEach(element => {
        if (element.userName == userNAme) {
            if (element.pass == psw) {
                sessionStorage.setItem("UserName", element.userName)
                sessionStorage.setItem("status", element.statusUser)
                // window.open("index5.html")
                alert(`${sessionStorage.getItem("UserName")} , יקר`)
                id01.style.display = "none"
            }
            // else {
            //     window.open("index3.html")
            // }
            else
                if (element.pass != psw) {
                    id01.style.display = "none"
                    first.style.display = "flex"
                    alert("bhfghdfjkgbnjdfhudfhgjbnjdhfugnkj")
                }
        }
    });
    let UsersList = JSON.parse(localStorage.getItem('Users'))||[];
    console.log(UsersList);
    // if(UsersList)
    UsersList.forEach(user => {
        if (user.userName == userNAme) {
            if (user.pass == psw) {
                sessionStorage.setItem("UserName", user.userName)
                sessionStorage.setItem("status", user.statusUser)
            }
            // else
            // // if (element.pass < psw || element.pass > psw) 
            // {
            //     wrong1.style.display="flex"
            // }
        }
        else {
            count++;
            if (user.userName != userNAme && count == UsersList.length && psw != localStorage.getItem("psw") && userNAme != localStorage.getItem("userName")) {
                window.open("index3.html")
            }
        }
    });
    if (/*psw == sessionStorage.getItem("psw") &&*/ userNAme == sessionStorage.getItem("userName")) {
        if (sessionStorage.getItem("status") == 0) {
            alert(`hello, ${sessionStorage.getItem("UserName")} manager👩`)
            window.close()
            window.open("index2.html")
            window.close()
        }
        if (sessionStorage.getItem("status") == 1) {
            alert(`hello, ${sessionStorage.getItem("UserName")} user 👩`)
            window.open("index2.html")
        }
    }
}
let Users = [
    { userName: "Racheli", pass: "1234", statusUser: 1 },
    { userName: "Sari", pass: "1234", statusUser: 1 },
    { userName: "Tehila", pass: "1234", statusUser: 1 },
    { userName: "Dina", pass: "1234", statusUser: 1 },
    { userName: "Nomi", pass: "1234", statusUser: 1 },
    { userName: "Zipi", pass: "1234", statusUser: 1 },
    { userName: "Lea", pass: "1234", statusUser: 1 },
    { userName: "Sara", pass: "1234", statusUser: 1 },
    { userName: "Rivka", pass: "1234", statusUser: 1 },
    { userName: "Rachely", pass: "0000", statusUser: 0 },
    { userName: "Chani", pass: "0000", statusUser: 0 }
]

const signIn = () => {
    alert("hihihi")
}
const logout = () => {
    alert("LogOut")
    localStorage.clear()
    sessionStorage.clear()
}
const createForm = () => {
    // alert("createFOrm")
    first.style.display = "none"
    Adduser.style.display = "block"
}
const forgot = () => {
    first.style.display = "none"
}
const randUser = () => {
    first.style.display = "none"
}
const AddUser = (e) => {
    let psw1 = e.target.psw1.value
    console.log(psw1)
    let psw2 = e.target.psw.value
    console.log(psw2)
    let userNAme1 = e.target.uname.value
    console.log(userNAme1)
    if (psw2 == psw1) {
        one.value = ""
        one.value = `${localStorage.getItem("UserName")} יקר ,`
        tow.value = ""
        tow.value = "נרשמת בהצלחה למערכת"
        let newUser = { userName: userNAme1, pass: psw2, statusUser: 1 }
        Users.push(newUser)
        localStorage.setItem("Users", JSON.stringify(Users))
        // Customer.style.display="block"
        // alert("succeesfully")
        // window.close()
        // window.open("index4.html")
        // id01.style.display="none"
        // first.style.display="none" 
        // localStorage.setItem("UserName",userNAme1)
        // localStorage.setItem("status", "1")
        // localStorage.setItem("pass" , "1234")
    }
}
const opening = () => {
    alert("jgf")

    window.close()
    window.open("index4.html")
}


//    let manager = createElement("ul")
//    document.appendChild(manager)
//     
//    let addUsers = createElement("li")
//    manager.appendChild(addUsers)
//    let seeUsers = createElement("li")
//    manager.appendChild(seeUsers)
//    let deleteUsers = createElement("li")
//    manager.appendChild(deleteUsers)
//    let upDateUsersorPasswords = createElement("li")
//     
//    manager.appendChild(upDateUsersorPasswords)
//    let seeNowUsers = createElement("li")
//    manager.appendChild(seeNowUsers)
//    let Btn = createElement("button")



const SMS = () => {
    alert("SMS")
    Sms.style.display = "block"
    //  ok.style.display="block"
    first.style.display = "none"
    // let MySms = document.createElement("form")
    // MySms.id = "SmsForm"
    // console.log(MySms)
    // let Myinput = document.createElement("input")
    // Myinput.setAttribute("type", "text")
    // MySms.appendChild(Myinput)
    // console.log(Myinput +"huygyu")

}

const lll2 = () => {
    ok.style.display = "block"
    window.close()
    window.open("index6.html")
    first.style.display = "none"
    Sms.style.display = "none"
    first.style.display = "none"
    Sms.style.display = "none"
    f.innerHTML = ""
    f.innerHTML = "fffffffff"
    s.innerHTML = "sssssss"
    window.open("index5.html")
    alert("succeesfully")
}
const lll = () => {
    ok.style.display = "block"
    window.close()
    window.open("index6.html")
    first.style.display = "none"
    Sms.style.display = "none"
    first.style.display = "none"
    Sms.style.display = "none"
    f.innerHTML = ""
    f.innerHTML = "fffffffff"
    s.innerHTML = "sssssss"
    window.open("index5.html")
    alert("succeesfully")
}

let arr = [{id:3 , namer: "ghf"},{id:6 , namer:"vhcgh"}]
console.log(arr)
let rr2 =arr;
console.log(rr2)
