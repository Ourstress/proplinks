

let navArrayProcess = [["nav1","#process1"],["nav2","#process2"],["nav3","#process3"]]
let navIDsProcess = new Map(navArrayProcess)
let navArrayFinance = [["fin1","#finance1"],["fin2","#finance2"],["fin3","#finance3"]]
let navIDsFinance = new Map(navArrayFinance)
let navArrayNationality = [["nat1","#nationality1"],["nat2","#nationality2"],["nat3","#nationality3"]]
let navIDsNationality = new Map(navArrayNationality)
let navArrayInvestment = [["inv1","#investment1"],["inv2","#investment2"],["inv3","#investment3"]]
let navIDsInvestment = new Map(navArrayInvestment)

const content = (target, container, lookupContent) => {
    document.addEventListener("DOMContentLoaded", function(){
    let allNavs = document.querySelectorAll(target)
    let processNav = document.querySelector(container)
    //add listener to monitor clicks on allNavs
    processNav.addEventListener("click", function(event){
        let selection = document.querySelector(lookupContent.get(event.target.id))
       if(selection.classList.contains("invisible")){
        allNavs.forEach(function(element){
            element.classList.contains("invisible")? "" : element.classList.toggle("invisible")
        })
        // toggle selection to visible
        selection.classList.toggle("invisible")} else {selection.classList.toggle("invisible")}
    })
})
} 

content(".navDiv", "#processNav", navIDsProcess)
content(".navDiv", "#processNav2", navIDsFinance)
content(".navDiv", "#processNav3", navIDsNationality)
content(".navDiv", "#processNav4", navIDsInvestment)

// loading in content from other sources seem dangerous
//document.addEventListener("DOMContentLoaded",
//function load_home() {
//    document.querySelector("#ID").innerHTML='<object type="text/html" data="finance.html" ></object>';
//})