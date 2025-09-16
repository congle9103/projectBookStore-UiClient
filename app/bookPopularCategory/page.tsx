import Product from "@/components/ui/Product";
import Image from "next/image";
import { useEffect } from "react";

const BookPopularCategory = () => {
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
    <div className="bg-gray-100">
      <div className="mx-[145px] py-4">
        <div className="bg-white rounded-xl pb-4">
          <div className="flex bg-red-200 pl-4 p-2 rounded-t-xl mb-4 items-center">
            <Image src="/Images/icon-popular-book.webp" alt="" />
            <div className="ml-4 text-xl font-semibold">Sách mới</div>
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
                <option value="Truyện tranh">Truyện tranh</option>
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

export default BookPopularCategory;
