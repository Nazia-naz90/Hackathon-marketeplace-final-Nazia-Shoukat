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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Products</h1>
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
        <h2 className="text-xl font-semibold mb-2">
          Search Results for {searchTerm}
        </h2>
        <ul>
          {searchResults.map((product) => (
            <li
              key={product.id}
              className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => router.push(`/product/${product.id}`)}
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