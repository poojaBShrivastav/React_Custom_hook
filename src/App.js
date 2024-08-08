import logo from './logo.svg';
import './App.css';
import UseFetch from './UseFetch';
import CardComponent from './CardComponent';
import card from "./CardComponent"

      
function App() {
  const {error,data,loading} = UseFetch("https://jsonplaceholder.typicode.com/photos")
  // console.log(err,data,loading)

  if(loading){
    return <div className='load'>Loading.....</div>
  }

  if(error){
    return <div className='error'>Error : {error}</div>
  }
  return(
    <div>
       <h1>Photos</h1>
      <div className='cart_cont'>
        {
          data.map(function(item){
            return(
              <CardComponent data={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
