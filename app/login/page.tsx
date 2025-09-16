"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Link from "next/link";

// Kiểu dữ liệu Login
interface FormData {
  username: string;
  password: string;
}

// Schema kiểm tra hợp lệ Login
const schema = yup.object({
  username: yup
    .string()
    .required("Vui lòng nhập tên tài khoản")
    .max(12, "Tên tài khoản tối đa 12 ký tự"),
  password: yup
    .string()
    .min(6, "Mật khẩu tối thiểu 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // form hook cho Login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu đăng nhập:", data);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center py-6">
      <div className="bg-white rounded-lg shadow-lg w-full h-full px-[300px] mx-[145px]">
        {/* Tabs */}
        <div className="flex justify-evenly my-4 cursor-pointer select-none">
          <div className="w-full text-center mx-2 pb-2 text-red-600 border-b border-red-600">
            Đăng nhập
          </div>
          <Link
            href="/register"
            className="w-full text-center mx-2 pb-2 text-gray-500 hover:text-red-600 border-b border-transparent hover:border-red-600 transition"
          >
            Đăng Ký
          </Link>
        </div>

        {/* Form Login */}
        <form className="px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Tên người dùng */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Tên người dùng
            </label>
            <input
              type="text"
              id="username"
              {...register("username")}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-600"
              placeholder="Nhập tên người dùng"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>

          {/* Mật khẩu */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mật khẩu
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                className="w-full px-3 py-2 pr-14 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-600"
                placeholder="Nhập mật khẩu"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 text-sm hover:underline focus:outline-none"
              >
                {showPassword ? "Ẩn" : "Hiện"}
              </button>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-50 bg-red-600 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Đăng nhập
            </button>
            <div className="text-red-600 cursor-pointer">Quên mật khẩu?</div>
          </div>
        </form>
      </div>
    </div>
  );
}
