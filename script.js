

let navArray = [["nav1","#process1"],["nav2","#process2"],["nav3","#process3"]]
let navIDs = new Map(navArray)

document.addEventListener("DOMContentLoaded", function(){
    let processNav = document.querySelector("#processNav")
    processNav.addEventListener("click", function(event){
        let selection = document.querySelector(navIDs.get(event.target.id))
        selection.classList.toggle("visible")
    })
}) 