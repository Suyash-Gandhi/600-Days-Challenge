import {Child, Child2} from "./child"
/*
export default function Parent() {
  return (
   <Child name="suyash" age={22} isPremium={true}/>
  )
}
*/

export default function Parent() {

  const user={
name:"suyash", age:22, isPremium:true
  } 
  return (
   <Child2 user={user}/>
  )
}