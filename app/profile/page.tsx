"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ProfileFormData {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  birthDate: string;
}

// Schema yup validation
const schema = yup.object({
  fullName: yup
    .string()
    .required("Vui lòng nhập họ và tên")
    .min(6, "Ít nhất 6 ký tự"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^[0-9]{10,11}$/, "Số điện thoại phải có 10 đến 11 chữ số"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  gender: yup.string().required("Vui lòng chọn giới tính"),
  birthDate: yup
    .string()
    .required("Vui lòng nhập ngày sinh")
    .test("valid-date", "Ngày sinh không hợp lệ", (value) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      return (
        !isNaN(date.getTime()) &&
        date <= today &&
        date.getFullYear() >= 1900
      );
    }),
});

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Dữ liệu form:", data);
  };

  return (
    <div className="bg-gray-100 py-6 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[1000px] bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Hồ sơ cá nhân
        </h2>

        {/* Họ và tên */}
        <div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-600">
              Họ và tên
            </label>
            <input
              {...register("fullName")}
              type="text"
              className="col-span-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Nhập họ và tên"
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1 ml-[33%]">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Số điện thoại */}
        <div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-600">
              Số điện thoại
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="col-span-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Nhập số điện thoại"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 ml-[33%]">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              {...register("email")}
              type="email"
              className="col-span-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Nhập email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 ml-[33%]">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Giới tính */}
        <div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-600">
              Giới tính
            </label>
            <div className="flex gap-6 col-span-2">
              <label className="flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  value="Nam"
                  className="mr-2"
                />
                Nam
              </label>
              <label className="flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  value="Nữ"
                  className="mr-2"
                />
                Nữ
              </label>
              <label className="flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  value="Khác"
                  className="mr-2"
                />
                Khác
              </label>
            </div>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1 ml-[33%]">
              {errors.gender.message}
            </p>
          )}
        </div>

        {/* Ngày sinh */}
        <div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-600">
              Ngày sinh
            </label>
            <input
              {...register("birthDate")}
              type="date"
              className="col-span-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              max={new Date().toISOString().split("T")[0]}
            />
          </div>
          {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1 ml-[33%]">
              {errors.birthDate.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[200px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Lưu thông tin
          </button>
        </div>
      </form>
    </div>
  );
}
