import { FaRegBell, FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiFileOn, CiLogout } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { PiBookBookmarkLight } from "react-icons/pi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-4 flex justify-between px-[145px] bg-red-600 relative z-50">
      <Link href="/home">
        <div className="w-[160px] text-3xl font-serif flex items-center text-white mt-1">
          BookStore
        </div>
      </Link>

      <div className="w-[680px] relative">
        <input
          type="text"
          placeholder="Bạn đang tìm sách gì?"
          className="w-full h-full pl-2 rounded-xl border-2 border-white-300 placeholder-white text-white"
        />
        <div className="absolute bg-white w-12 h-8 rounded-xl flex items-center justify-center right-2 top-1/2 -translate-y-1/2 text-white cursor-pointer">
          <IoIosSearch className="text-red-600" />
        </div>
      </div>

      <div className="flex justify-evenly w-[400px] mt-2 text-gray-600">
        <div className="w-[100px] grid justify-items-center text-white">
          <FaRegBell />
          <div>Thông báo</div>
        </div>

        <Link href="/cart">
          <div className="w-[100px] grid justify-items-center text-white">
            <MdOutlineShoppingCart />
            <div>Giỏ hàng</div>
          </div>
        </Link>

        {/* Container bọc Link và dropdown */}
        <div className="relative group w-[100px] grid justify-items-center cursor-pointer">
          <Link href="/login">
            <div className="grid justify-items-center text-white">
              <FaRegUser />
              <div className="">Tài khoản</div>
            </div>
          </Link>

          {/* Dropdown menu */}
          <div
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
            className="absolute right-0 top-full mt-2 hidden group-hover:block bg-white rounded-md z-10 min-w-[350px]"
          >
            {/* Mũi tên */}
            <div
              style={{
                boxShadow: "-1px -1px 3px rgba(0,0,0,0.1)", // bóng lên trên + trái
              }}
              className="absolute right-6 -top-2 w-4 h-4 bg-white rotate-45 border-t-2 border-l-2"
            ></div>

            {/* Thanh ngang ẩn để tăng vùng hover */}
            <div className="absolute -top-4 left-0 w-full h-4 opacity-0"></div>

            {/* Danh sách menu */}
            <ul className="text-sm text-gray-600 bg-white rounded-md overflow-hidden">
              <Link href="/profile">
              <li className="py-3 border-b border-gray-200 hover:text-red-600 cursor-pointer">
                <div className="px-5 flex">
                  <CiFileOn className="h-6 w-6 my-auto mr-1.5" /> Hồ sơ cá nhân
                </div>
              </li>
              </Link>
              <Link href="/changePassword">
              <li className="py-3 border-b border-gray-200 hover:text-red-600 cursor-pointer">
                <div className="px-5 flex">
                  <IoKeyOutline className="h-6 w-6 my-auto mr-1.5" /> Đổi mật
                  khẩu
                </div>
              </li>
              </Link>
              <li className="py-3 border-b border-gray-200 hover:text-red-600 cursor-pointer">
                <div className="px-5 flex">
                  <PiBookBookmarkLight className="h-6 w-6 my-auto mr-1.5" /> Đơn
                  hàng của tôi
                </div>
              </li>
              <li className="py-3 hover:text-red-600 cursor-pointer">
                <div className="px-5 flex">
                  <CiLogout className="h-6 w-6 my-auto mr-1.5" /> Đăng xuất
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
