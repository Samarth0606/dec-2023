
// let divEl = document.querySelector('#root')

// // create a tag

// // React.createElement('h1', {}, )
// //prop == attribute
// let h1 = React.createElement('h1', null , "I am h1")

// // manipulation
// let rootEl = ReactDOM.createRoot(divEl)

// rootEl.render(h1)

// --------------------------------------


// let divEl = document.querySelector('#root')

// // create a tag

// // React.createElement('h1', {}, )
// //prop == attribute
// // div> div>h1
// let h1 = React.createElement('div', null , 
//     React.createElement('div', { } , 
//         React.createElement('h1',{id:"sam"},"iam sam h1 thanks")
//     ) )

// // manipulation
// let rootEl = ReactDOM.createRoot(divEl)

// rootEl.render(h1)


// ----------------------------------------



let divEl = document.querySelector('#root')


// let h1 = React.createElement('div', null , 
//     React.createElement('div', { } , 
//         React.createElement('h1',{id:"sam"},"iam sam h1 thanks")
//     ) )

let h1 = <div> 
            <div>
                <h1>i am sam h1 thanks</h1>
            </div>
        </div>
let rootEl = ReactDOM.createRoot(divEl)

rootEl.render(h1)



