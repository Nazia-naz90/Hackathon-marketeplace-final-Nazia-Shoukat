import Image from 'next/image';
import Link from 'next/link';


 export interface Product {
  imageUrl: string;
  name:string;
  department: string;
  originalPrice: number;
  discountPrice: number;
  colors: string[];
  id:string;
  description: string;
}

export  interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product)
  return (
<>
<div className="flex flex-col items-center p-4 mt-6 rounded-lg 
transition-all transform hover:scale-105 hover:shadow-lg">
      <div>
        {/* FEATURED IMAGE */}
         
                <Image
                  src={product.imageUrl}
                  width={350}
                  height={360}
                  alt="image"
                  className="rounded-md shadow-lg w-[350px] 
                  h-[360px] "
                />
            
      </div>
      <div className="mt-4 text-center">
      <h1 className="text-[17px] text-yellow-600 sm:text-[20px] 
      font-semibold">
    {product.name}
  </h1> 
        <p className="text-[#737373] text-[14px]">
          {product.department}
        </p>
        <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
          {product.originalPrice}
          <span className="text-[#23856D]">
            {product.discountPrice}
          </span>
        </p>

        <div className="flex justify-center gap-2 mt-4">
          {product.colors && product.colors.map((color, index) => (
            <div key={index} className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: color }} />
          ))}
        </div>
        <div>
  <Link href={`/prouctItems/${product.id}`}>
  <button className='w-[150px] bg-green-200 text-green-700
  text-{17px} font-bold h-[45px] p-2 rounded-lg mt-4'>
   View Details
  </button>
</Link>
          
</div>
</div>
</div>
</>
  );
};

export default ProductCard;
