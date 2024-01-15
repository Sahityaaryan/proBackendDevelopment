
import './App.css'
import axios from  'axios'
function App() {
  // const [count, setCount] = useState(0)

   async function fetchData(){

    let res = await axios('https://jsonplaceholder.typicode.com/posts');

    return res.data;

  }

  function clickHandler(){

    let responseContainer = document.querySelector('#responseContainer');
      
    fetchData()
    .then((res)=>{

      // console.log('res: ',res)
      
      if(res){

        responseContainer.innerHTML = '';
       res.forEach(async function(ele){

         const div = document.createElement('div');

         div.setAttribute('key',ele.id);

         div.innerHTML = ele.title;

         responseContainer.appendChild(div);

        
        })

      }
    })
     

    // .catch((err)=>{
    //   console.log(err);
    // })



  }

  return (
    <>
     <h1>Jai Mata di</h1>

     <button onClick={clickHandler}>
      click me
     </button>

     <div id='responseContainer'>
      Show me some results
     </div>
    </>
  )
}

export default App;
