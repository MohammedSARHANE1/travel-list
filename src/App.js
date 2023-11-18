
import './App.css';

const ititialItems=[
  {id:1, description:"Passports",quantity:2, packed:false},
  {id:2, description:"socks",quantity:5, packed:true},
  {id:3, description:"luggage",quantity:3, packed:false},
]
export default function App() {
 

function Logo(){
  return(
      <div className="logo">
        
          <h1>🏝 <span>FAR AWAY</span>🧳</h1>
      </div>
  );
}
function Form(){
  return(
      <form className="form">
        <div className='form-item'>
         <h3> what need for your trip?</h3>
          <select id="numberDropdown">{
          Array.from({length:20},(_,i)=>i+1).map
          ((num)=><option  value={num} key={num}>{num}</option>)
          }
           
  </select>
       <input id="items" type='text'  placeholder="items..."/>
       <button> ADD</button> 
      </div>
    </form> 
  );
}
function PackingList(){
  return(
      <ul className='packing-list'>
        {ititialItems.map(item=>
        <li key={item.id} className='list'> 
        <input  id="checkbox" type="checkbox"/>
        <span style={item.packed?{textDecoration:"line-through"}:{}}>
          {item.quantity} {item.description} ❌
          </span>
        </li>)
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
return (
  <div className='App'>
  <Logo/>
  <Form/>
  <PackingList/>
  <Footer/>
  </div>
);
}
