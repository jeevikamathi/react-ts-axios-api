import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';

// Define a type for the product structure
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// const ProductList: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string>('');

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
//       setProducts(response.data);
//     } catch (err) {
//       setError('Failed to fetch products.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };
// //Listing a product when component renders initially
// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>

//      {/* Manually trigger to listing a Products when clicks a button */}
//      {/* <button onClick={fetchProducts}>Load Products</button> */}

//      {/* Listing a Products when hover a div */}
//      <div onMouseEnter={fetchProducts}>Load Products</div>

//       {loading && <p>Loading products...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {!loading && !error && (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//               <strong>{product.title}</strong> - ${product.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };



const ProductList:React.FC = () => {
    const{isLoading,error,data}=useQuery<Product[]>( {
       queryKey:['products'],
       queryFn: () =>
        axios.get('https://fakestoreapi.com/products').then((res) =>res.data)
    });
    if(isLoading) return <p>Loading...</p>
    if(error) return <p style= {{ color:'red'}}>Something went wrong</p>


return(
    <div>
        <h1>Products</h1>
        <ul>
            {data?.map((product) => (
                <li key={product.id}>
                  <strong>{product.title}</strong> - ${product.price}
                </li>
             ))};
        </ul>
    </div>
);
};
export default ProductList;
