
class TodoServices{
    getToken(data){
        let url=`http://127.0.0.1:8000/token/`
        let payload=JSON.stringify(data)
        let option={
            method:"POST",
            body:payload,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        return fetch(url,option)
    }
}


var service = new TodoServices()

function authenticate(){
    let username=id_username.value
    let password=id_password.value
    console.log(username,password);                // "Converting to json format" next step
    let data={username,password}                   //  only if key and value is same otherwise  let data={"username":username,"password":password}
    
    service.getToken(data).then(res=>res.json()).then(data=>{
        let token=data.token
        
    })
}