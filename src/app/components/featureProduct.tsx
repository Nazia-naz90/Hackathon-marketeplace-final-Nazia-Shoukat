import Image from "next/image";
import ProductCard from "@/app/components/productCard";
import type { Product } from "@/app/components/productCard";
import { client } from "@/sanity/lib/client";

export default async function FeatureProduct() {

  
  const products = await client.fetch(`*[_type=='product' ]{
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
 // console.log(products)

  return (
    <>
      <div className="flex flex-col items-center justify-center 
      text-center mt-28 mb-7 overflow-x-hidden">
        <div>
          <h3 className="text-[#737373] text-[20px]">
            FEATURED PRODUCTS</h3>
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
        {/* VITA CLASSIC SECTION */}
        <div className="bg-[#23856D] sm:h-[990px] md:h-[713px] w-full mt-16 pt-7 flex items-center justify-between flex-col md:flex-row">
          {/* TEXT PORTION */}
          <div className="text-white space-y-4 ml-4 sm:ml-12 md:ml-36 text-center sm:text-left">
            <h3 className="text-[20px]">SUMMER 2020</h3>
            <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-bold">
              Vita Classic <br /> <span>Product</span>
            </h2>
            <p
              className="text-[14px]
               sm:text-[16px]"
            >
              We know how large objects will act, We know <br />
              <span>how objects will act, We know</span>
            </p>

            {/* PRICE & BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 pb-7">
              <h3 className="text-[24px] font-bold">{`$16.48`}</h3>
              <button className="text-[14px] font-bold bg-[#2DC071] ">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* IMAGE PORTION */}
          <div className="w-full sm:w-[400px] md:w-[510px] flex-shrink-0">
            <Image
              src={"/images/vitaclasic-img.png"}
              alt="vitaClasic"
              width={510}
              height={685}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-between
         mt-16 flex-col md:flex-row"
        >
          {/* IMAGE Portion */}
          <div className="w-full md:w-auto">
            <Image
              src={"/images/universe.png"}
              alt="universe"
              height={704}
              width={682}
              className="w-full"
            />
          </div>

          {/* TEXT AREA */}
          <div
            className="text-center
    md:text-left w-full md:w-auto  mt-6 md::mt-0 leading-10
    "
          >
            <h3 className="text-[#BDBDBD] font-bold text-[16px]">
              SUMMER 2020
            </h3>
            <h2 className="text-[#252B42] font-bold text-[30px] sm:text-[40px] mt-8">
              Part of the Neural <br /> Universe
            </h2>
            <p className="text-[#737373] text-[14px] sm:text-[20px] mt-7">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <button
                className="text-white w-[145px] h-[50px]
        text-[14px] font-bold  rounded-md bg-[#23A6F0] hover:bg-transparent text-center 
        hover:text-blue-500
        md:bg-[#2DC071]
         md:hover:bg-transparent
         md:hover:text-[#2DC071]
        "
              >
                Buy Now
              </button>
              <button
                className="text-[#23A6F0] text-[14px] font-bold
         w-[156px] h-[50px] text-center
          rounded-md border-2 border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white md:border-[#2DC071]
        md:text-[#2DC071] md:hover:bg-transparent md:hover:bg-green-500
        "
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
