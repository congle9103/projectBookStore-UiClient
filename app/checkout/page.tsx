"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaCheckSquare, FaRegCircle } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { PiWarningCircleThin } from "react-icons/pi";

const paymentMethods = [
  {
    name: "Ví ZaloPay",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayapp.svg?q=11108",
    active: false,
  },
  {
    name: "VNPAY",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_vnpay.svg?q=11108",
    active: false,
  },
  {
    name: "Ví ShopeePay",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_airpay.svg?q=11108",
    active: false,
  },
  {
    name: "Ví Momo",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_momopay.svg?q=11108",
    active: false,
  },
  {
    name: "ATM",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayatm.svg?q=11108",
    active: false,
  },
  {
    name: "Visa",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopaycc.svg?q=11108",
    active: false,
  },
  {
    name: "Thanh toán bằng tiền mặt khi nhận hàng",
    icon: "https://cdn1.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=11108",
    active: true,
  },
];

const cartItems = [
  {
    id: 1,
    name: "Trái tim của đảo",
    price: "60.000 đ",
    qty: 2,
    total: "120.000 đ",
    img: "/Images/product1.jpg",
  },
  {
    id: 2,
    name: "Trái tim của đảo",
    price: "60.000 đ",
    qty: 2,
    total: "120.000 đ",
    img: "/Images/product1.jpg",
  },
];

export default function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 py-6 pb-6">
        {/* Địa chỉ giao hàng */}
        <div className="bg-white mx-[145px] rounded-xl px-6 py-6 mb-4">
          <h2 className="font-semibold text-xl border-b border-gray-200 pb-3">
            Địa chỉ giao hàng
          </h2>
          <form className="mt-4 space-y-4">
            {[
              { id: "fullName", label: "Họ và tên người nhận", type: "text" },
              { id: "phone", label: "Số điện thoại", type: "tel" },
              { id: "address", label: "Địa chỉ nhận hàng", type: "text" },
            ].map((field) => (
              <div key={field.id} className="flex items-center">
                <label htmlFor={field.id} className="w-48 text-sm font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={`Nhập ${field.label.toLowerCase()}`}
                  className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* Tỉnh/Thành phố */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium" htmlFor="province">
                Tỉnh/Thành phố
              </label>
              <select
                id="province"
                name="province"
                className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Chọn Tỉnh/Thành Phố --</option>
                <option value="ha-noi">Hà Nội</option>
                <option value="ho-chi-minh">TP. Hồ Chí Minh</option>
                <option value="can-tho">Cần Thơ</option>
                <option value="hai-phong">Hải Phòng</option>
                <option value="da-nang">Đà Nẵng</option>
                <option value="thua-thien-hue">Thừa Thiên Huế</option>
                <option value="bac-giang">Bắc Giang</option>
              </select>
            </div>

            <div className="flex">
              <label
                htmlFor="order-note"
                className="w-48 text-sm font-medium"
              >
                Ghi chú đơn hàng
              </label>
              <textarea
                id="order-note"
                name="order_note"
                placeholder="Nhập ghi chú cho đơn hàng ..."
                className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
          </form>
        </div>

        {/* Phương thức thanh toán */}
        <div className="bg-white mx-[145px] rounded-xl px-6 py-6 mb-4">
          <h2 className="font-semibold text-xl border-b border-gray-200 pb-3 mb-4">
            Phương thức thanh toán
          </h2>
          <div className="flex flex-col gap-y-4">
            {paymentMethods.map((method, i) => (
              <div key={i} className="flex gap-x-2">
                {method.active ? (
                  <FaRegCircleDot className="text-red-600 my-auto h-6 w-6" />
                ) : (
                  <FaRegCircle className="text-gray-300 my-auto h-6 w-6" />
                )}
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={40}
                  height={40}
                />
                <span>{method.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mã khuyến mãi */}
        <div className="bg-white mx-[145px] rounded-xl px-6 py-6 mb-4">
          <h2 className="font-semibold text-xl border-b border-gray-200 pb-3 mb-4">
            Mã khuyến mãi / Mã quà tặng
          </h2>
          <div className="flex gap-x-4 mb-2">
            <span className="my-auto">Mã KM/Quà tặng</span>
            <div className="w-96 h-10 relative">
              <input
                type="text"
                placeholder="Nhập mã khuyến mãi/Quà tặng"
                className="w-full h-full pl-2 rounded border border-gray-300"
              />
              <button
                type="button"
                className="absolute bg-blue-600 w-20 h-8 rounded flex items-center justify-center right-2 top-1/2 -translate-y-1/2 text-white"
              >
                Áp dụng
              </button>
            </div>
          </div>
          <div className="flex gap-x-2 text-sm text-gray-600">
            Có thể áp dụng đồng thời nhiều mã
            <PiWarningCircleThin className="h-5 w-5" />
          </div>
        </div>

        {/* Kiểm tra lại đơn hàng */}
        <div className="bg-white mx-[145px] rounded-xl">
          <h2 className="font-semibold text-xl mx-6 border-b border-gray-200 pb-3 pt-4">
            Kiểm tra lại đơn hàng
          </h2>
          <div className="rounded-xl">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex py-6 justify-between border-b border-gray-200 mx-6"
              >
                <div className="flex gap-x-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded"
                  />
                  <div className="w-[150px]">{item.name}</div>
                </div>
                <div className="flex-1 flex ml-40 justify-between">
                  <div>{item.price}</div>
                  <div>{item.qty}</div>
                  <div className="mr-40 text-red-600 font-semibold">
                    {item.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Xác nhận thanh toán */}
        <div
          style={{ boxShadow: "0 -8px 16px rgba(0, 0, 0, 0.25)" }}
          className="bg-white pb-4 mt-12 fixed bottom-0 left-0 right-0"
        >
          <div className="mx-[145px] border-t border-gray-200 flex pt-4">
            <FaCheckSquare className="text-red-600 my-auto mr-4 h-6 w-6" />
            <div>
              <p>Bằng việc tiến hành Mua hàng, Bạn đã đồng ý với</p>
              <p className="text-blue-600 hover:text-red-600 cursor-pointer">
                Điều khoản & Điều kiện của BookStore
              </p>
            </div>
            <button className="bg-red-600 text-white py-2 px-16 ml-auto rounded">
              Xác nhận thanh toán
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
