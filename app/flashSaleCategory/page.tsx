import Product from "@/components/ui/Product";
import Image from "next/image";
import { useEffect } from "react";

const FlashSaleCategory = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const sampleProduct = {
    name: "Nghĩ Giàu & Làm Giàu (Tái Bản 2020)",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    price: "55.000 đ",
    originalPrice: "110.000 đ",
    discount: "-50%",
  };

  // Hiển thị luôn 70 sản phẩm
  const products = Array(70).fill(sampleProduct);

  return (
    <div className="bg-gray-100 pb-6">
      <div className="mx-[145px]">
        <Image
          className="py-4"
          src="/Images/banner-flashsale-category.webp"
          alt=""
        />
        <div className="bg-white rounded-xl pb-4">
          <div className="flex bg-red-200 pl-4 p-2 rounded-t-xl mb-4 items-center">
            <Image className="mr-4" src="/Images/icon-flashsale.svg" alt="" />
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
          </div>

          <div className="px-4">
            <div className="mb-4">
              Thể loại:
              <select
                name="category"
                id="category"
                className="ml-2 border-1 border-gray-300 rounded p-2"
              >
                <option value="Lịch sử Việt Nam">Lịch sử Việt Nam</option>
                <option value="Đam mỹ">Đam mỹ</option>
                <option value="Văn học">Văn học</option>
                <option value="Tâm lý kỹ năng">Tâm lý kỹ năng</option>
                <option value="Thiếu nhi">Thiếu nhi</option>
                <option value="Sách học ngoại ngữ">Sách học ngoại ngữ</option>
                <option value="Ngoại văn">Ngoại văn</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-between gap-y-4">
              {products.map((p, idx) => (
                <div
                  key={idx}
                  className="w-[19%] p-2 border rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <Product {...p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCategory;
