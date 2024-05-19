import { myusers } from './myusers'

let userslist = myusers.users

let oldies: any = []

for (let i: number =0; i<userslist.length; i++) {
  if(userslist[i].birthDate.substring(0,4)=="1964")
    oldies.push(userslist[i])
}

console.log(oldies)
//console.log(userslist)
//console.log(userslist.length)