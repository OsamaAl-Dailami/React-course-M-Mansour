import { useState } from "react";

function App() {
 //Update Object

 const [customer,setCustomer]  = useState({
  name :'osama',
  age : 20,
 });

 const  updateCustomerAge =  ()=>{

   setCustomer({...customer, age:25});

 }


  //Update Nested Object

  const [customerNested,setCustomerNested]  = useState({
    name :'osama',
    age : 20,
    address:{
      city: 'sanaa',
      code: 123456
    }
   });


   const updateCustomerCode = ()=>{
     setCustomerNested({ ...customerNested, address:{...customerNested.address, code:555} })
   }


  return (
    <>
    <h1>hi</h1>
      <div>
        <h2> customer age: {customer.age} </h2>
        

        <h2> customer code: {customerNested.address.code}</h2>
        
        <br /><br />
        <button type="button" onClick= { () => {updateCustomerAge();  updateCustomerCode();} }> click me </button>
        
      </div>

    </>
  );
}

export default App;
