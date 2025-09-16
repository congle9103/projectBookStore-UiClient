"use client";

import { useEffect } from "react";
import Image from "next/image";
import { GiSquare } from "react-icons/gi";
import { FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fake data giỏ hàng (sau này thay bằng state hoặc fetch API)
  const cartItems = [
    {
      id: 1,
      name: "Trái tim của đảo Trái tim của đảo Trái tim của đảo",
      price: 60000,
      quantity: 2,
      image: "/Images/product1.jpg",
    },
    {
      id: 2,
      name: "Trái tim của đảo Trái tim của đảo Trái tim của đảo",
      price: 60000,
      quantity: 2,
      image: "/Images/product1.jpg",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100">
      <div className="mx-[145px] pb-4">
        {/* Tiêu đề */}
        <div className="py-4 text-xl font-semibold">
          Giỏ hàng ({cartItems.length} sản phẩm)
        </div>

        {/* Header bảng */}
        <div className="bg-white rounded-xl mb-2 flex py-4 justify-end gap-x-24 pr-42">
          <div>Đơn giá</div>
          <div>Số lượng</div>
          <div>Thành tiền</div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="bg-white rounded-xl mb-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex py-6 px-2 justify-between border-b last:border-b-0">
              <GiSquare className="h-8 w-8 mx-6 my-auto" />

              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-md"
              />

              <div className="w-[150px] my-auto">{item.name}</div>

              <div className="my-auto">{item.price.toLocaleString("vi-VN")} đ</div>

              <div className="border-gray-300 my-auto">- {item.quantity} +</div>

              <div className="my-auto text-red-600 font-semibold">
                {(item.price * item.quantity).toLocaleString("vi-VN")} đ
              </div>

              <FaRegTrashCan className="mr-12 my-auto cursor-pointer text-gray-500 hover:text-red-600" />
            </div>
          ))}
        </div>

        {/* Footer giỏ hàng */}
        <div className="bg-white rounded-xl mb-2 flex py-4 gap-x-24 pl-2">
          <GiSquare className="h-8 w-8 mx-6 my-auto" />
          <div className="my-auto">
            Chọn tất cả ({cartItems.length} sản phẩm)
          </div>
          <div className="my-auto cursor-pointer hover:text-red-600">
            Xóa tất cả
          </div>

          <div className="flex ml-auto my-auto gap-x-2">
            <div>Tổng cộng ({cartItems.length} sản phẩm):</div>
            <div className="text-red-600 font-semibold">
              {total.toLocaleString("vi-VN")} đ
            </div>
          </div>

          <button className="bg-red-600 text-white my-auto mr-2 flex items-center justify-center font-semibold py-2 w-[220px] rounded-lg hover:bg-red-700 transition">
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
