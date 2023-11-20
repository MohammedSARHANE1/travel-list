
import { useState} from 'react';
import './App.css';

const ititialItems=[
  {id:1, description:"Passports",quantity:2, packed:false},
  {id:2, description:"socks",quantity:5, packed:true},
  {id:3, description:"luggage",quantity:3, packed:false},
]
export default function App() {
return (
  <div className='App'>
  <Logo/>
  <Form/>
 
  <Footer/>
  </div>
);
}
function Logo(){
  return(
      <div className="logo">
        
          <h1>🏝 <span>FAR AWAY</span>🧳</h1>
      </div>
  );
}
function Form(){
  const [description, setDescription] = useState("");
 const [quantity,SetQuantity]=useState(1);
 const [arr,setArr]=useState(ititialItems)

  const handleChange = (event) => {
     event.preventDefault();
    setDescription(event.target.value);
  };
 
 const handlechange2=(e)=>{
  SetQuantity(Number(e.target.value))
  if (!description)return;
  const newItem={description,quantity,packed:false,
  id:Date.now()}
  
  
}
const handleChange3=(e)=>{
  e.preventDefault();
  const newItem2= {
    id:arr.length+1,
    description:description,
    quantity:quantity,
    packed:false
    }
    setArr([...arr, newItem2])
    console.log(arr)
}


  return(
      <>
        <form className='form' >
         <h3> what need for your trip?</h3>
          <select id="numberDropdown"  value={quantity} onChange={handlechange2}>{
          Array.from({length:20},(_,i)=>i+1).map
          ((num)=><option value={num}  key={num}>{num}</option>)
          }
           
  </select>
       <input  type="text" id="items" 
        placeholder="items..."
        value={description}
        onChange={handleChange}  />
       <button onClick={handleChange3} > ADD</button> 
      </form>
      <PackingList arr={arr}/>
   </>
  );
}
function PackingList(props){
  return(
      <ul className='packing-list'>
        {props.arr.map(item=>(
         <li key={item.id} className='list'> 
         <input   type="checkbox"/>
         <span style={item.packed?{textDecoration:"line-through"}:{}}>
           {item.quantity} {item.description} ❌
           </span>
         </li>
        ))
        }
      </ul>
  )
}

function Footer(){


return(
   <div className='footer'>
  <p>🧳 You have {} items on your list, and your already packcked {} ({})</p>
  </div>
)
}

