"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Product from "@/components/ui/Product";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const productsData = [
  {
    id: 1,
    name: "Nghĩ Giàu & Làm Giàu (Tái Bản 2020)",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "55.000 đ",
    originalPrice: "110.000 đ",
    discount: "-50%",
  },
  {
    id: 2,
    name: "Sách A",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "60.000 đ",
    originalPrice: "120.000 đ",
    discount: "-50%",
  },
  {
    id: 3,
    name: "Sách B",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "70.000 đ",
    originalPrice: "140.000 đ",
    discount: "-50%",
  },
  {
    id: 4,
    name: "Sách C",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "80.000 đ",
    originalPrice: "160.000 đ",
    discount: "-50%",
  },
  {
    id: 5,
    name: "Sách D",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "90.000 đ",
    originalPrice: "180.000 đ",
    discount: "-50%",
  },
  {
    id: 6,
    name: "Sách E",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "100.000 đ",
    originalPrice: "200.000 đ",
    discount: "-50%",
  },
  {
    id: 7,
    name: "Sách F",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "110.000 đ",
    originalPrice: "220.000 đ",
    discount: "-50%",
  },
  {
    id: 8,
    name: "Sách G",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "120.000 đ",
    originalPrice: "240.000 đ",
    discount: "-50%",
  },
  {
    id: 9,
    name: "Sách H",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "130.000 đ",
    originalPrice: "260.000 đ",
    discount: "-50%",
  },
  {
    id: 10,
    name: "Sách I",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "140.000 đ",
    originalPrice: "280.000 đ",
    discount: "-50%",
  },
];

// Sample product để nhân bản cho BookNew và BookPopular
const sampleProduct = {
  name: "Nghĩ Giàu & Làm Giàu (Tái Bản 2020)",
  image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
  price: "55.000 đ",
  originalPrice: "110.000 đ",
  discount: "-50%",
};

const items = [
  { src: "/Images/menu-item-8.webp", label: "Flash Sale" },
  { src: "/Images/menu-item-1.webp", label: "SBOOKS" },
  { src: "/Images/menu-item-2.webp", label: "ALPHA BOOK" },
  { src: "/Images/menu-item-3.webp", label: "Mã giảm giá" },
  { src: "/Images/menu-item-4.webp", label: "Sản phẩm mới" },
  { src: "/Images/menu-item-5.webp", label: "Sản phẩm được trợ giá" },
  { src: "/Images/menu-item-6.webp", label: "Phiên chợ đồ cũ" },
  { src: "/Images/menu-item-7.webp", label: "Bán sĩ" },
];

const categories = [
  { src: "/Images/category-item4.webp", label: "Truyện tranh" },
  { src: "/Images/category-item7.webp", label: "Tâm lý kỹ năng" },
  { src: "/Images/category-item6.webp", label: "Văn học" },
  { src: "/Images/category-item5.webp", label: "Lịch sử Việt Nam" },
  { src: "/Images/category-item8.webp", label: "Thiếu nhi" },
  { src: "/Images/category-item9.webp", label: "Sách học ngoại ngữ" },
  { src: "/Images/category-item10.webp", label: "Ngoại văn" },
];

const Home = () => {
  // Logic Home
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ProductList
  const productList = Array(10).fill(sampleProduct);

  // FlashSaleSection state
  // Khai báo state 'page' để lưu trang hiện tại, mặc định là 0 (trang đầu tiên)
  const [page, setPage] = useState(0);

  // Số lượng sản phẩm hiển thị trên mỗi trang
  const productsPerPage = 5;

  // Tổng số trang, làm tròn lên để đảm bảo đủ trang cho tất cả sản phẩm
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  // Xử lý khi ấn nút sang trang kế tiếp
  const handleNext = () => {
    // Nếu chưa phải trang cuối cùng thì mới cho phép tăng trang
    if (page < totalPages - 1) {
      setPage(page + 1); // Tăng số trang lên 1
    }
  };

  // Xử lý khi ấn nút quay lại trang trước
  const handlePrev = () => {
    // Nếu chưa phải trang đầu tiên thì mới cho phép giảm trang
    if (page > 0) {
      setPage(page - 1); // Giảm số trang đi 1
    }
  };

  // BannerSlider state
  const slides = [
    { src: "/Images/banner-slide-1.webp", alt: "Banner 1" },
    { src: "/Images/banner-slide-2.webp", alt: "Banner 2" },
    { src: "/Images/banner-slide-3.webp", alt: "Banner 3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 border-b-[24px] border-gray-100">
      <div className="px-[145px]">
        {/* BannerSlider */}
        <div className="flex py-6">
          <div className="relative flex-grow h-[320px] rounded-xl">
            {slides.map((slide, index) => (
              <Image
                width={600}
                height={320}
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={`absolute rounded-xl cursor-pointer top-0 left-0 object-cover w-full h-full transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <button
              onClick={prevSlide}
              className="absolute cursor-pointer top-1/2 left-[-12px] -translate-y-1/2 bg-white w-6 h-6 flex justify-center items-center rounded-full shadow-2xl z-10"
            >
              <MdChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute cursor-pointer top-1/2 right-[-12px] -translate-y-1/2 bg-white w-6 h-6 flex justify-center items-center rounded-full shadow-2xl z-10"
            >
              <MdChevronRight />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer border border-gray-300 ${
                    index === currentSlide ? "bg-red-600" : "bg-white"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          {/* SideBanner */}
          <div className="w-[392px] ml-2 grid grid-rows-2 gap-2 h-[320px]">
            <Image
              width={392}
              height={320}
              className="w-full h-full rounded-xl cursor-pointer"
              src="/Images/banner-side-1.webp"
              alt="Side Banner 1"
            />
            <Image
              width={392}
              height={320}
              className="w-full h-full rounded-xl cursor-pointer"
              src="/Images/banner-side-2.webp"
              alt="Side Banner 2"
            />
          </div>
        </div>

        {/* SubBanner */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4].map((i) => (
            <Image
              width={392}
              height={320}
              key={i}
              className="w-[23%] rounded-xl cursor-pointer"
              src={`/Images/banner-sub-${i}.webp`}
              alt={`Sub Banner ${i}`}
            />
          ))}
        </div>

        {/* MenuItems */}
        <div className="mb-6 flex justify-evenly p-4 bg-white rounded-xl">
          {items.map((item, idx) => (
            <div key={idx} className="w-[8%] rounded-xl cursor-pointer">
              <Image width={100} height={100} src={item.src} alt={item.label} />
              <div className="mt-1 text-sm w-[95px] text-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FlashSaleSection */}
      <div className="bg-gradient-to-b from-red-300 to-red-400 py-6">
        <div className="px-[145px]">
          <div className="flex bg-white mb-4 p-4 rounded-xl items-center">
            <Image
              width={140}
              height={140}
              className="mr-4"
              src="/Images/icon-flashsale.svg"
              alt=""
            />
            <div className="font-semibold flex">
              <div className="mt-1">Kết thúc trong</div>
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-black text-white h-8 w-8 ml-2 flex items-center justify-center rounded">
                    00
                  </div>
                  {idx < 2 && (
                    <div className="mt-1 ml-2 font-semibold">
                      <div className="pb-2">:</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/FlashSaleCategory"
              className="ml-auto mt-1 font-semibold text-blue-500 flex items-center hover:underline"
            >
              Xem tất cả <FaAngleRight className="ml-1 mt-[3px]" />
            </Link>
          </div>

          <div className="relative w-full">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div key={pageIndex} className="flex min-w-full">
                    <div key={pageIndex} className="flex min-w-full px-0">
                      {productsData
                        .slice(
                          pageIndex * productsPerPage,
                          (pageIndex + 1) * productsPerPage
                        )
                        .map((product, idx) => (
                          <Card
                            key={product.id}
                            className={`flex-shrink-0 w-[calc((100%-16px*4)/5)] ${
                              idx !== 0 ? "ml-4" : ""
                            }`}
                          >
                            <CardContent className="px-2">
                              <Product
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                              />
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nút điều hướng được đặt ở đây và căn giữa theo chiều dọc */}
            <Button
              className={`absolute top-1/2 left-[-20px] -translate-y-1/2 z-10 rounded-full w-10 transition-opacity duration-300 ${
                page === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              variant="outline"
              onClick={handlePrev}
            >
              <FaAngleLeft />
            </Button>

            <Button
              className={`absolute top-1/2 right-[-20px] -translate-y-1/2 z-10 rounded-full w-10 transition-opacity duration-300 ${
                page >= totalPages - 1
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
              variant="outline"
              onClick={handleNext}
            >
              <FaAngleRight />
            </Button>
          </div>
        </div>
      </div>

      {/* CategorySection */}
      <div className="mx-[145px] mt-6 bg-white p-4 rounded-xl">
        <div className="flex border-b pb-2 border-gray-100 items-center">
          <Image
            width={50}
            height={50}
            src="/Images/icon-category.png"
            alt="Danh mục"
          />
          <div className="font-semibold text-xl ml-4">Danh mục sản phẩm</div>
        </div>
        <div className="flex justify-evenly mt-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-[100px] h-[80px]">
                <Image
                  src={cat.src}
                  alt={cat.label}
                  fill
                  className="object-contain" // hoặc object-cover
                />
              </div>

              <div>{cat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BookNewSection */}
      <div className="mx-[145px] mt-6 bg-white rounded-xl mb-6">
        <div className="flex bg-red-200 pl-4 p-2 rounded-t-xl mb-4 items-center">
          <Image
            width={50}
            height={50}
            src="/Images/icon-newbook.svg"
            alt="Sách mới"
          />
          <div className="ml-4 text-xl font-semibold">Sách mới</div>
        </div>
        <div className="px-4">
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
          <Link href="/BookNewCategory">
            <div className="flex justify-center py-6">
              <div className="px-2 py-1 w-[226px] text-center font-semibold text-red-600 border-2 border-red-600 rounded-xl">
                Xem thêm
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* BookPopularSection */}
      <div className="mx-[145px] mt-6 bg-white rounded-xl mb-6">
        <div className="flex bg-red-200 pl-4 p-2 rounded-t-xl mb-4 items-center">
          <Image
            width={50}
            height={50}
            src="/Images/icon-popular-book.webp"
            alt="Sách thịnh hành"
          />
          <div className="ml-4 text-xl font-semibold">Sách thịnh hành</div>
        </div>
        <div className="px-4">
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
          <Link href="/BookPopularCategory">
            <div className="flex justify-center py-6">
              <div className="px-2 py-1 w-[226px] text-center font-semibold text-red-600 border-2 border-red-600 rounded-xl">
                Xem thêm
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
