import axios from "axios";

const Login = ()=>{

    async function clickHandler(){
        
        const loginResponseContainer = document.querySelector('#loginResponseContainer');
        try {
            let res = await axios('api/login');
        console.log('res: ',res);
        if(res){
            loginResponseContainer.innerHTML = '';
            const p = document.createElement('p');

            p.innerHTML = await res.data.content;

            loginResponseContainer.appendChild(p);
        } else {
            console.log('Bad request');
        }
        } catch (e) {
            loginResponseContainer.innerHTML = '';
            const p = document.createElement('p');

            p.innerHTML = "Something went wrong";

            loginResponseContainer.appendChild(p);            
        }


        
    }
    return (
        <>
        <button onClick={clickHandler}>
            Connect 🚀
        </button>

        <div id="loginResponseContainer">
            Here you will show the data to be fetched
        </div>
        </>
    )
}

export default Login;
