import ProductCard, { Product } from "@/app/components/productCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
// import { Product } from "@/app/components/productCard";

const Cards: React.FC = async () => {

  const products = await client.fetch(groq`*[_type=='product' ]{
    lDress->{ 
      "eyeIconUrl": eyeIcon.asset->url,
      "cartIconUrl": cartIcon.asset->url,
      "heartIconUrl": heartIcon.asset->url,
      button,description
    },

    "imageUrl": image.asset->url,
      description,
    id,
    colors,
    discountPrice,
    originalPrice,
    department,
    name
}
`);

  // const products: Product[] = [
  //   {
  //     image: "/images/productList/images/card-1.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-2.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-3.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-4.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-5.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-6.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-7.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //     image: "/images/productList/images/card-8.png",
  //     name: "Graphic Design",
  //     department: "English Department",
  //     originalPrice: "$16.48",
  //     discountPrice: "$6.48",
  //     colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //   },
  //   {
  //       image: "/images/productList/images/card-9.png",
  //       name: "Graphic Design",
  //       department: "English Department",
  //       originalPrice: "$16.48",
  //       discountPrice: "$6.48",
  //       colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //     },
  //     {
  //       image: "/images/productList/images/card-10.png",
  //       name: "Graphic Design",
  //       department: "English Department",
  //       originalPrice: "$16.48",
  //       discountPrice: "$6.48",
  //       colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //     },
  //     {
  //       image: "/images/productList/images/card-11.png",
  //       name: "Graphic Design",
  //       department: "English Department",
  //       originalPrice: "$16.48",
  //       discountPrice: "$6.48",
  //       colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //     },
  //     {
  //       image: "/images/productList/images/card-12.png",
  //       name: "Graphic Design",
  //       department: "English Department",
  //       originalPrice: "$16.48",
  //       discountPrice: "$6.48",
  //       colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  //     },
  // ];
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
        <div>
          <h3 className="text-[#737373] text-[20px]">FEATURED PRODUCTS</h3>
          <h2 className="text-[#252B42] text-[24px] font-bold mt-2">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-[#737373] text-[14px] mt-2">
            Problems Trying to Resolve the Conflict Between
          </p>
        </div>
        {/* GRID OF PRODUCT CART */}
        <div className="grid grid.cols-1 sm:grid-cols-2  md:grid-cols-4 gap-1 mt-6 w-full">
        {products.map((product:Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

       {/* Pagination Controls */}
<div className="flex flex-wrap justify-center items-center space-x-4 mt-16 border-[#BDBDBD] border-2 rounded-md">
  <button className="px-4 py-2 bg-[#F3F3F3] text-[#BDBDBD] rounded-md hover:bg-gray-300 text-sm sm:px-8 sm:py-6">
    First
  </button>

  {/* Page Numbers */}
  <div className="flex items-center justify-center  space-x-2 ">
    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
      1
    </button>
    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
      2
    </button>
    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
      3
    </button>
  </div>

  <button className="px-4 py-2 text-[#23A6F0] rounded-md hover:bg-[#1D8CC8] hover:text-white text-sm sm:px-8 sm:py-6">
    Next
  </button>
</div>


        </div>
    </>
  );
};

export default Cards;
