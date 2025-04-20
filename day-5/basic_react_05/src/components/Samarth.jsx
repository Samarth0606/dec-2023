// const Samarth = (props)=>{
//     return(
//         <>
//             <h1>I am Samarth Vohra</h1>
//             <h3>props 1: {props.isTired} </h3>
//             <h3>props 2: {props.lol}</h3>
//         </>
//     )
// }

// export default Samarth;

// ---------------------------------------------------------

const Samarth = ({isTired,lol})=>{
    return(
        <>
            <h1>I am Samarth Vohra</h1>
            <h3>props 1: {isTired} </h3>
            <h3>props 2: {lol}</h3>
        </>
    )
}

export default Samarth;