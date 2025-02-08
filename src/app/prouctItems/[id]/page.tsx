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

