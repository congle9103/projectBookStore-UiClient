"use client";

import { useEffect, useState } from "react";
import { FaBox, FaCheckCircle, FaStore, FaTruck } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import Product from "@/components/ui/Product";
import Image from "next/image";

const bookInfo = {
  tenSach: "Trái tim của đảo",
  gia: 60000,
  phanTramGiamGia: 13,
  tenNhaCungCap: "Nhà Xuất Bản Kim Đồng",
  tacGia: "Hồ Huy Sơn, Hậu Phan, Thảo Võ",
  nxb: "Kim Đồng",
  namXuatBan: 2025,
  ngonNgu: "Tiếng Việt",
  trongLuong: 145,
  kichThuocBaoBi: "20.5 x 18.5 x 0.2 cm",
  soTrang: 52,
  hinhThuc: "Bìa Mềm",
};

const sampleProduct = {
  name: "Nghĩ Giàu & Làm Giàu (Tái Bản 2020)",
  image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
  price: "55.000 đ",
  originalPrice: "110.000 đ",
  discount: "-50%",
};

const productList = Array(10).fill(sampleProduct);

export default function ProductDetail() {
  const [showMesAddtoCart, setShowMesAddtoCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-4">
      {/* Thông báo thêm vào giỏ */}
      {showMesAddtoCart && (
        <div className="fixed px-12 py-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 rounded-lg">
          <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />
          <div className="text-green-600 font-semibold text-lg">
            Đã thêm vào giỏ hàng!
          </div>
        </div>
      )}

      <div className="mx-[145px] flex mb-4">
        {/* Ảnh sách */}
        <div className="bg-white w-[484px] mr-4 rounded-xl">
          <div>
            <Image className="my-4" src="/Images/product1.jpg" alt="" />
          </div>
          <div className="flex justify-around mb-4">
            <Image className="h-[75px]" src="/Images/product1.jpg" alt="" />
            <Image className="h-[75px]" src="/Images/product2.webp" alt="" />
            <Image className="h-[75px]" src="/Images/product3.webp" alt="" />
            <Image className="h-[75px]" src="/Images/product4.webp" alt="" />
            <Image className="h-[75px]" src="/Images/product5.webp" alt="" />
          </div>

          {/* Nút hành động */}
          <div className="mb-4 flex justify-evenly">
            <button
              onClick={() => {
                setShowMesAddtoCart(true);
                setTimeout(() => setShowMesAddtoCart(false), 2000);
              }}
              className="flex cursor-pointer font-semibold justify-center py-2 w-[220px] text-red-600 border-2 border-red-600 rounded-lg"
            >
              <MdOutlineShoppingCart className="h-6 w-6 mr-2" /> Thêm vào giỏ hàng
            </button>

            <Link href="/checkout">
              <button className="bg-red-600 text-white cursor-pointer flex items-center justify-center font-semibold py-[10px] w-[220px] rounded-lg">
                Mua ngay
              </button>
            </Link>
          </div>
        </div>

        {/* Chi tiết sách */}
        <div className="flex-1 ">
          {/* Giá sách */}
          <div className="bg-white rounded-xl pl-2 mb-2">
            <div className="text-2xl py-2 font-semibold">{bookInfo.tenSach}</div>
            <div className="flex justify-between mb-2">
              <div>
                <div>Nhà cung cấp: {bookInfo.tenNhaCungCap}</div>
                <div>Nhà xuất bản: {bookInfo.nxb}</div>
              </div>
              <div>
                <div>Tác giả: {bookInfo.tacGia}</div>
                <div>Độ dài: {bookInfo.soTrang}</div>
              </div>
            </div>
            <div className="flex gap-x-4 pb-2">
              <div className="font-semibold text-3xl text-red-600">
                {(
                  bookInfo.gia -
                  (bookInfo.gia * bookInfo.phanTramGiamGia) / 100
                ).toLocaleString("vi-VN")}{" "}
                <span className="font-semibold text-3xl">₫</span>
              </div>
              <div className="text-gray-500 line-through pt-1.5">
                {bookInfo.gia.toLocaleString("vi-VN")}{" "}
                <span className="font-semibold">₫</span>
              </div>
              <div className="bg-red-600 text-white rounded h-6 mt-1.5 px-0.5">
                -{bookInfo.phanTramGiamGia}%
              </div>
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="bg-white rounded-xl pl-2 mb-2">
            <div className="text-xl font-semibold py-2">Thông tin chi tiết</div>
            <div className="text-sm mr-2 pb-2">
              {[
                ["Tên Nhà Cung Cấp", bookInfo.tenNhaCungCap],
                ["Tác giả", bookInfo.tacGia],
                ["NXB", bookInfo.nxb],
                ["Năm XB", bookInfo.namXuatBan],
                ["Ngôn Ngữ", bookInfo.ngonNgu],
                ["Trọng lượng (gr)", bookInfo.trongLuong],
                ["Kích Thước Bao Bì", bookInfo.kichThuocBaoBi],
                ["Số trang", bookInfo.soTrang],
                ["Hình thức", bookInfo.hinhThuc],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className={`flex border-b border-gray-300 py-2 ${
                    idx === 8 ? "border-none" : ""
                  }`}
                >
                  <div className="text-gray-400 w-[175px]">{label}</div>
                  <div className="font-normal">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chính sách */}
          <div className="bg-white rounded-xl pl-2 pt-2 pb-1">
            <div className="text-xl font-semibold mb-2">
              Chính sách ưu đãi của BookStore
            </div>
            <div className="flex gap-x-2">
              <FaTruck className="mt-1 text-red-600 mb-2" />
              <span className="font-semibold">Thời gian giao hàng: </span>
              <span>Giao nhanh và uy tín</span>
            </div>
            <div className="flex gap-x-2">
              <FaBox className="mt-1 text-red-600 mb-2" />
              <span className="font-semibold">Chính sách đổi trả: </span>
              <span>Đổi trả miễn phí toàn quốc</span>
            </div>
            <div className="flex gap-x-2">
              <FaStore className="mt-1 text-red-600" />
              <span className="font-semibold">Chính sách khách sỉ: </span>
              <span>Ưu tiên khi mua số lượng lớn</span>
            </div>
          </div>
        </div>
      </div>

      {/* BookStore Giới thiệu */}
      <div className="mx-[145px] bg-gray-300 rounded-xl">
        <div className="bg-white rounded-xl px-4">
          <div className="text-xl font-semibold pt-2 pb-4">BookStore giới thiệu</div>
          <div className="flex flex-wrap justify-between gap-y-4">
            {productList.map((p, idx) => (
              <div
                key={idx}
                className="w-[19%] p-2 border rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <Product {...p} />
              </div>
            ))}
          </div>
          <div className="flex justify-center py-6">
            <div className="px-2 py-1 w-[226px] text-center font-semibold text-red-600 border-2 border-red-600 rounded-xl cursor-pointer">
              Xem thêm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
