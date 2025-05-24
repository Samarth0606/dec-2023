import { useEffect, useState } from "react";

function Product(){

    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        const API = search ? `https://dummyjson.com/products/search?q=${search}` : "https://dummyjson.com/products"
        async function fetchData(){
            const resp = await fetch(API);
            const json = await resp.json();
            // console.log(json.products , "json");
            setData(json.products)
        }
        fetchData()
    } , [search])

    function handleInputChange(e){
        // console.log(e.target.value.trim());
        setSearch(e.target.value.trim())
    }

    return(
        <div>
            <input type="text" onChange={handleInputChange} value={search} />

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product)=>{
                            return(
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                       {product.images.length >0 ? 
                                       <img
                                      style={{
                                         width:"64px",
                                         height:"64px",
                                         objectFit:"cover"
                                      }}
                                       src={product.images[0]} /> : null
                                    } 
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product;