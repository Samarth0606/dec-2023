import { useEffect, useState } from "react";

function Product(){

    const [data,setData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [search,setSearch] = useState("");
    const [price,setPrice] = useState(0);
    const [brand,setBrand] = useState("");

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

    useEffect(()=>{
        if(price === 0){
            setFilteredData([...data])
        }else{
            setFilteredData(
                [...data].sort((a,b)=> price === 1 ? a.price - b.price : b.price - a.price )
            )
        }
    } , [price,data])

    useEffect(()=>{
        setFilteredData(
            data.filter((product)=>{
                return product.brand?.includes(brand)
            })
        )
    } , [brand,data])

    function handleInputChange(e){
        // console.log(e.target.value.trim());
        setSearch(e.target.value.trim())
    }

    return(
        <div>
            <input type="text" onChange={handleInputChange} value={search} placeholder="search here" />
            <input type="text" onChange={(e)=>setBrand(e.target.value)} value={brand}  placeholder="brand here" />

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th onClick={()=> setPrice((price+1)%3)} >PRICE</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((product)=>{
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