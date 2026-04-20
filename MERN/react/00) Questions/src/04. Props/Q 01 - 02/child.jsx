import Parent from "./parent"

/*01. Create a UserCard component that receives:
name
age
isPremium

Display:

“Premium User” if isPremium is true

*/
export function Child({name,age,isPremium}) {
  return (<>
  <div>{name}</div> 
   <div>{age}</div> 
   <div>{isPremium?"Premium User":"Non Premium User"}</div> 
  </>
   
  )
}

/*
02. Pass dynamic data to a component from parent:
Create a parent component with variables
Pass them as props to child
*/


export function Child2({user}) {
 const {name,age,isPremium}=user
  return (<>

   <div>{name}</div>
   <div>{age}</div>
   <div>{isPremium?"Premium User":"Non Premium User"}</div>
  </>
  )
}
