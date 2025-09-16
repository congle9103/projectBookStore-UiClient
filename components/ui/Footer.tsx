import React from "react";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-[145px] bg-white text-white py-10 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Cột 1: Thông tin công ty */}
            <div className="ml-22">
              <h3 className="text-xl font-serif text-red-600 mb-4">
                BookStore
              </h3>
              <ul className="space-y-2 text-sm text-black">
                <li className="cursor-pointer">Giới thiệu</li>
                <li className="cursor-pointer">Tin tức</li>
                <li className="cursor-pointer">Liên hệ</li>
              </ul>
            </div>

            {/* Cột 2: Hỗ trợ khách hàng */}
            <div className="ml-22">
              <h3 className="text-xl text-black font-semibold mb-4">Hỗ Trợ</h3>
              <ul className="space-y-2 text-sm text-black">
                <li className="cursor-pointer">Hướng dẫn mua hàng</li>
                <li className="cursor-pointer">Chính sách đổi trả</li>
                <li className="cursor-pointer">Chăm sóc khách hàng</li>
              </ul>
            </div>

            {/* Cột 3: Dịch vụ */}
            <div className="ml-22">
              <h3 className="text-xl text-black font-semibold mb-4">Dịch Vụ</h3>
              <ul className="space-y-2 text-sm text-black">
                <li className="cursor-pointer">Thanh toán</li>
                <li className="cursor-pointer">Vận chuyển</li>
                <li className="cursor-pointer">Bảo hành</li>
              </ul>
            </div>

            {/* Cột 4: Mạng xã hội */}
            <div className="ml-22">
              <h3 className="text-xl text-black font-semibold mb-4">Kết nối</h3>
              <ul className="space-y-2 text-black text-base">
                <li className="flex items-center space-x-2 cursor-pointer">
                  <FaGlobe className="text-green-500" />
                  <span className="text-green-500">Website</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer">
                  <FaFacebookF className="text-blue-500" />
                  <span className="text-blue-500">Facebook</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer">
                  <FaInstagram className="text-pink-500" />
                  <span className="text-pink-500">Instagram</span>
                </li>
              </ul>
            </div>
          </div>

          {/* List logo */}
          <div>
            <div className="flex justify-evenly pb-12">
              <Image
                src="/Images/logo-footer1.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
              <Image
                src="/Images/logo-footer2.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
              <Image
                src="/Images/logo-footer3.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
            </div>

            <div className="flex justify-between mb-6">
              <Image
                src="/Images/logo-footer7.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
              <Image
                src="/Images/logo-footer6.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
              <Image
                src="/Images/logo-footer5.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
              <Image
                src="/Images/logo-footer4.webp"
                alt=""
                width={0}
                height={0}
                unoptimized
                className="h-[60px] w-auto"
              />
            </div>
          </div>

          {/* Dòng dưới cùng */}
          <div className="mt-10 text-center text-sm text-black border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} Công ty TNHH{" "}
            <span className="font-serif text-red-600">BookStore</span>. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
