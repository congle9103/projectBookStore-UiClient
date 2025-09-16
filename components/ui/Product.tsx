import React from "react";
import Link from "next/link";
import Image from "next/image";

type TProduct = {
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  discount: string;
};

const Product = ({ name, image, price, originalPrice, discount }: TProduct) => {
  return (
    <Link href="/ProductDetail">
      <div className="w-full h-[310px] rounded bg-white overflow-hidden group">
        <div className="overflow-hidden">
          <Image 
            width={300}
            height={300}
            src={image}
            alt={name}
            className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:-translate-y-1"
          />
        </div>

        <div className="mx-2 mt-2">
          <div className="line-clamp-2 text-sm">{name}</div>
          <div className="max-w-[150px] flex items-center mt-1">
            <span className="font-semibold text-red-600">{price}</span>
            <div className="bg-red-500 text-white text-[12px] font-semibold h-6 w-8 ml-2 flex items-center justify-center rounded">
              {discount}
            </div>
          </div>
          <div className="text-gray-500 line-through text-sm">
            {originalPrice}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
