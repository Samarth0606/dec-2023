
const Person = () => {

    // 1. upar
    let a = 10;
    let b = "sam";
    let c = null;
    let d = undefined;
    let e = true;
    let f = false;

    

    // 2. neeche
  return (
    <div>
        <h1>a: {a}</h1>
        <h1>b: {b}</h1>
        <h1>c: {JSON.stringify(c)}</h1>
        {/* undefined is never visible */}
        <h1>d: {JSON.stringify(d)}</h1> 
        <h1>e: {JSON.stringify(e)}</h1>
        <h1>f: {JSON.stringify(f)}</h1>
    </div>
  )
}



export default Person