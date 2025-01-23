import ProductDetails from "@/app/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { Product } from "@/app/types/type.";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const query = `*[_type=='product' && id == "${id}"]{
      "imageUrl": image.asset->url,
      name,
      department,
      originalPrice,
      discountPrice,
      colors,
      id,
      description,
      lDress->{
        description,
        button,
        "heartIconUrl": heartIcon.asset->url,
        "cartIconUrl": cartIcon.asset->url,
        "eyeIconUrl": eyeIcon.asset->url
      }
    }[0]`;

    const product: Product | null = await client.fetch(query);

    if (!product) {
      return notFound(); // 404 page show karein
    }

    


    return <ProductDetails product={product} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product. Please try again later.</div>;
  }
}

// src/app/productItems/[id]/page.tsx
// import { client } from "@/sanity/lib/client";
// import ProductDetails from "@/app/components/ProductDetails";

// interface Product {
//   imageUrl: string;
//   name: string;
//   department: string;
//   originalPrice: string;
//   discountPrice: string;
//   colors: string[];
//   id: string;
//   description: string;
//   lDress: {
//     description: string;
//     button: string;
//     heartIconUrl: string;
//     cartIconUrl: string;
//     eyeIconUrl: string;
//   };
// }

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;

//   try {
//     const query = `*[_type=='product' && id == "${id}"]{
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
//     }[0]`;

//     const product: Product | null = await client.fetch(query);

//     if (!product) {
//       return <div>Product not found</div>;
//     }

//     return <ProductDetails product={product} />;
//   } catch (error) {
//     // console.error("Error fetching product:", error);
//     return <div>Error loading product. Please try again later.</div>;
//   }
// }