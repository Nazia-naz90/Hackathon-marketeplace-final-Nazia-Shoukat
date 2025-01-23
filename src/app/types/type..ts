// types/product.ts
export interface Product {
    imageUrl: string;
    name: string;
    department: string;
    originalPrice: string;
    discountPrice: string;
    colors: string[];
    id: string;
    description: string;
    lDress: {
      description: string;
      button: string;
      heartIconUrl: string;
      cartIconUrl: string;
      eyeIconUrl: string;
    };
  }