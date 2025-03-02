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


   //Updating Arrays
   const [tags, setTags] = useState(['happy ', ' sad']);
   
   const handelTagsAdd = ()=>{
    //Add tag
    setTags([...tags,' angry'])

    //Delete tag
    // setTags(tags.filter((tag) => tag !== 'happy '))


    //Update tag
    // setTags(tags.map(tag=>tag === "happy " ?'happiness' : tag))
   }

   const handelTagsUpdate = ()=>{
    //Update tag
    setTags(tags.map(tag=>tag === "happy " ?'happiness' : tag))
   }


   const handelTagsDelete = ()=>{
    //Delete tag
    setTags(tags.filter((tag) => tag !== 'happy '))
   }



   // Updating object of Array

   const [bugs, setBugs] = useState([
    {id:1, title:'Bug1', fixed: false},
    {id:2, title:'Bug2', fixed: false},

   ])

   const handelObjectArry = () => {
    setBugs(bugs.map((bg) => (bg.id === 1 ? {...bg,fixed:true} : bg)))
   }



   const updateCustomerCode = ()=>{
     setCustomerNested({ ...customerNested, address:{...customerNested.address, code:555} })
   }


  return (
    <>
    <h1>hi</h1>
      <div>
        <h2> customer age: {customer.age} </h2>
        

        <h2> customer code: {customerNested.address.code}</h2>

        <h2> My Tags: {tags}</h2>

        <h3>{bugs[0].fixed.toString()}</h3>
        
        <br /><br />
        <button type="button" onClick= { () => {updateCustomerAge();  updateCustomerCode(); handelTagsAdd(); handelObjectArry(); } }> click me </button>
        
      </div>

    </>
  );
}

export default App;
