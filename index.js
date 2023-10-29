

document.addEventListener("DOMContentLoaded", () => {
const li = document.createElement('li').setAttribute("class", "users");
const searchedUsers = document.querySelectorAll(".users");
const ul = document.getElementById('github-container');
ul.innerHTML = `<ul> </ul>`;
document.querySelector("#github-form").addEventListener('submit',
searchUser)})






async function searchUser(e){
    e.preventDefault()
    let data
    let search = e.target.search.value
    await fetch(`https://api.github.com/search/users?q=${search}`)
    .then(res => res.json())
    .then(users =>  data = users.items)

let user = data.filter(x => {
    return x.login === search})

user.map(object => {
    
let { login, avatar_url, repos_url } = object
console.log(login)
document.getElementById('github-container').innerHTML = 

`<ul>
<li class:'searched-user' >${login}</li>
<li class:'searched-user'><img src=${avatar_url}></li>
<li class:'searched-user' ><a href=${repos_url}>repos</a></li>
</ul>`})
return user
}

     // document.querySelector('#user-list').innerHTML = `<li><img src=${data.avatar_url}/></li>`

  // let data2 = data.filter(user =>  user.login == search)

    //console.log(user)

const searchedUser = document.getElementById('searched-user')




async function submitLogin(e){
    e.preventDefault()
    search = e.target.search.value
    let img = document.createElement('img')
    console.log(search)
    
   await fetch(`https://api.github.com/users/${search}/repos`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        document.querySelector('#user-list').innerHTML = 
        `<li><a target= href= <img src=${data.avatar_url}/></li>`
    })
  // let data2 = data.filter(user =>  user.login == search)

    //console.log(user)
}



    //document.getElementById('user-list').append(`${search}`) : console.log('no'))
   // .then(users => users.filter(users => img.source(users.avatar_url)))
   // Object.values(data)
  
//document.getElementById('user-list').append(img)

//data.forEach(value => card(value)document.getElementById('user-list').append(card))


        

  //  data.filter(user => user.login ===  searchTerm ?  
    // document.querySelector('ul').innerHTML = `<li>${user.login}</li>` 
    //: document.querySelector('#github-form').reset())

//data.filter((user => user.value == toString(search) ? console.log(user.login) : console.log('fuck you')))
   // data['login'].filter(user =>{

   //    user.username === searchTerm ? console.log('yes'): console.log('no');
       // ? createList.innerHTML = searchTerm && createList.appendChild(userList) 
       // : console.log(`${searchTerm} is not a correct user`) && document.querySelector('#github-form').reset()
    


        //.items.flatMap(user => (user === searchTerm ? user = user : `${user} is an invalid user`))))
    
    /*.filter(searchTerm =>{

        data.items === searchTerm 
        ? createList.innerHTML = searchTerm && createList.appendChild(userList) : console.log(`${searchTerm} is not a correct user`) && document.querySelector('#github-form').reset()
    })
    */
    
    
 

//function submitLogin(e){
 //   e.preventDefault()
 //   fetch(`https://api.github.com/users/${e.target.search.value}/repos`)
  //  .then(resp => resp.json())
  //  .then(data => console.log(data))
//}
