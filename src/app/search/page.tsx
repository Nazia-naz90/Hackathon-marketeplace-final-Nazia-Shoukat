"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
// import ProductDetails from "../components/ProductDetails";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice?: number;
}

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const router = useRouter();

  const handleSearch = async () => {
    const query = `*[_type == 'product' && (name match "${searchTerm}*" || id match "${searchTerm}*")]{
      "imageUrl": image.asset->url,
      name,
      originalPrice,
      discountPrice,
      id
    }`;
    const results = await client.fetch(query);
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-500 shadow-md shadow-blue-800">Search Products</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by product name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-[#23A6F0] text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-green-500">
          Search Results for {searchTerm}
        </h2>
        <ul>
          {searchResults.map((product) => (
            <li
              key={product.id}
              className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => router.push(`/prouctItems/${product.id}`)}
            >
              <div className="flex items-center gap-4">
                <Link href={"/ProuctItems"}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-[250px] h-[300px] object-cover"
                />

                </Link>
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">
                    ${product.discountPrice || product.originalPrice}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;

// 'use client'
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import Image from "next/image";
// import { ClerkProvider } from "@clerk/nextjs";
// import Footer from "../components/footerFirst";
// import { FaSearch, FaSpinner, FaRegFrown, FaRegMeh, FaRegQuestionCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Header from "../components/navbar";

// interface Product {
//   _id: string;
//   name: string;
//   image: string;
//   price: number;
//   slug: {
//     current: string;
//   };
// }

// const SearchResultsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [productListResults, setProductListResults] = useState<Product[]>([]);
//   const [productResults, setProductResults] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Get the search query from the URL
//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search).get("q");
//     if (query) {
//       setSearchQuery(query);
//       fetchSearchResults(query);
//     }
//   }, []);

//   // Fetch search results from Sanity
//   const fetchSearchResults = async (id: string) => {
//     setIsLoading(true);
//     try {
//       // Fetch productList results
//       const productListData: Product[] = await client.fetch(
//         `*[_type=='product' && id == "${id}"]{
//       "imageUrl": image.asset->url,
//       name,
//       department,
//       originalPrice,
//       discountPrice,
//       colors,
//       id,
//       description,
//       lDress->{
//         description,
//         button,
//         "heartIconUrl": heartIcon.asset->url,
//         "cartIconUrl": cartIcon.asset->url,
//         "eyeIconUrl": eyeIcon.asset->url
//       }
// }[0]`,
//         { searchQuery: `*${id}*` }
//       );

//       // Fetch product results
//       const productData: Product[] = await client.fetch(
//         `*[_type == "product" && name match $searchQuery] {
//           _id,
//           name,
//           "image": image.asset->url,
//           price,
//           slug,
//         }`,
//         { searchQuery: `*${id}*` }
//       );

//       setProductListResults(productListData);
//       setProductResults(productData);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="bg-[#FAFAFA] min-h-screen">
//         <ClerkProvider
//           publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
//         >
//           <Header />
//         </ClerkProvider>
//         <div className="container mx-auto p-6">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2"
//           >
//             <FaSearch className="text-gray-700" /> Search Results for &quot;{searchQuery}&quot;
//           </motion.h1>
//           {isLoading ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="flex justify-center items-center h-64"
//             >
//               <FaSpinner className="animate-spin text-4xl text-gray-700" />
//             </motion.div>
//           ) : productListResults.length > 0 || productResults.length > 0 ? (
//             <div>
//               {/* Display productList Results */}
//               {productListResults.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="mb-12"
//                 >
//                   <h2 className="text-2xl font-bold mb-6">Product List</h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {productListResults.map((product, index) => (
//                       <motion.div
//                         key={product._id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                       >
//                         <Link
//                           href={`/productList/${product.slug.current}`}
//                           className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 block"
//                         >
//                           <div className="p-4">
//                             <Image
//                               src={product.image}
//                               alt={product.name}
//                               width={300}
//                               height={300}
//                               className="w-full h-72 object-cover rounded-lg"
//                             />
//                             <h2 className="text-xl font-semibold mt-4 text-gray-800">
//                               {product.name}
//                             </h2>
//                             <p className="text-lg font-medium text-gray-900 mt-2">
//                               ${product.price}
//                             </p>
//                           </div>
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Display product Results */}
//               {productResults.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <h2 className="text-2xl font-bold mb-6">Products</h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {productResults.map((product, index) => (
//                       <motion.div
//                         key={product._id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                       >
//                         <Link
//                           href={`/product/${product.slug.current}`}
//                           className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 block"
//                         >
//                           <div className="p-4">
//                             <Image
//                               src={product.image}
//                               alt={product.name}
//                               width={300}
//                               height={300}
//                               className="w-full h-72 object-cover rounded-lg"
//                             />
//                             <h2 className="text-xl font-semibold mt-4 text-gray-800">
//                               {product.name}
//                             </h2>
//                             <p className="text-lg font-medium text-gray-900 mt-2">
//                               ${product.price}
//                             </p>
//                           </div>
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-center text-gray-600 text-xl flex flex-col items-center justify-center gap-2"
//             >
//               <div className="icon-container">
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <FaRegFrown className="text-4xl text-blue-500" />
//                 </motion.div>
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                 >
//                   <FaRegMeh className="text-4xl text-yellow-500" />
//                 </motion.div>
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                 >
//                   <FaRegQuestionCircle className="text-4xl text-red-500" />
//                 </motion.div>
//               </div>
//               <p>No products found.</p>
//             </motion.div>
//           )}
//         </div>
//       </div>
//       <div>
//         <Footer/>
//         <style jsx>{`
//           .icon-container {
//             display: flex;
//             gap: 20px;
//             margin-bottom: 10px;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default SearchResultsPage;

