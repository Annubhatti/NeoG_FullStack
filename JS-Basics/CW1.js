// Async and defer :

// They are boolean attributes which can be put inside your script tag and they are useful for loading external scripts into your web page.

// understand flow of html parsing
// Script tag inside <head> 
// when <script src =".."> is inside the head tag no async or defer used.


//                  HTML Parsing Paused               HTML Parsing Continues
// HTML Parsing---|-----------------|---------------|-----------------|
//                  Script fetching    Script Execution
//                 ^
//                 |
//                 Script is encountered


//  when <script src =".."> is inside the body tag no async or defer used.


//                 HTML Parsing Finised              
// HTML Parsing--------------------|---------------|-----------------|
//                                     Script fetching    Script Execution
//                                 ^
//                                 |
//                          Script is encountered


// When we have script tag inside the head tag and we use async attributes

// HTML Parsing               HTML Parsing Paused               HTML Parsing Continues
// |-----------------------------------|-----------------|------------------------|
//                |--- Script fetching-| Script Execution
//                 ^
//                 |
//                 Script is encountered

//  When we have script tag inside the head tag and we use defer attributes

//                 HTML Parsing               HTML Parsing Completed              
//  |----------------------------------------------------|------------------------|
//             |--- Script fetching-|                      Script Execution
//             ^
//             |
//     Script is encountered
                
                                   
// If there are multiple scripts which are dependent on each other, use defer.Completed
// Defer scripts are executed in the order in which they defined.
// <head>
//     <script defer src=""></script>
//     <script defer src=""></script>
//     <script defer src=""></script>
// </head>

// if you want to load external script which is not dependent on execution of any other script, use async. Async
// attribute does not gurantee the order of execution of script.


// localStoraage and sessionStorage: they are important these are storage provided by your browser

// sessionStorage:
// //Save data to sessionStorage
// sessionStorage.setItem('key', 'value');

// //Get saved data from sessionStorage
// let data =  sessionStorage.getItem('key');

// // Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// localStorage:
// //Save data to localStorage
// localStorage.setItem('key', 'value');

// //Get saved data from localStorage
// let data =  localStorage.getItem('key');

// // Remove saved data from localStorage
// localStorage.removeItem('key');
