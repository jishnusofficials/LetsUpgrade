import Product from "./Product";
function ProductsList ()
{
    let products =[
    {id:1,name:"Levi Jeans",price:1500,url:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/6ff2919b-8254-4153-83d9-376e98b3c072/Images/ProductImages/Source/Levis-Mens-Made-in-Japan-1980s-501-Jeans-A58750002_01_Front.jpg"},
    {id:2,name:"Samsung M53", price:25000,url:"https://i.gadgets360cdn.com/products/large/samsung-galaxy-m53-647x800-1650604669.jpg?downsize=*:180"},
    {id:3,name:"Dell Monitor", price:10000,url:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=797&qlt=100,1&resMode=sharp2&size=797,476&chrss=full"}
    ]
    return(
        <div className='products'>
            {
                products.map((product)=>{
                    return (
                        <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
                    )
                })
            }

        </div>
    )
}
export default ProductsList;