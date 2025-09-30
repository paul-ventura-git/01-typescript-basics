import { myusers } from './myusers'

let userslist = myusers.users

let result: any = []

for (let i: number =0; i<userslist.length; i++) {
  if(userslist[i].gender=="female")
    result.push(userslist[i])
}

console.log(result)
console.log(result.length)
//console.log(userslist)
//console.log(userslist.length)

// Ver solución con callbacks