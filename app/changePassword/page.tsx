"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const schema = yup.object({
  oldPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu cũ")
    .min(6, "Mật khẩu phải ít nhất 6 ký tự"),
  newPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu mới")
    .min(6, "Mật khẩu mới phải ít nhất 6 ký tự"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Xác nhận mật khẩu không khớp")
    .required("Vui lòng xác nhận mật khẩu mới"),
});

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ChangePasswordFormData) => {
    console.log("Dữ liệu đổi mật khẩu:", data);
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="mx-[145px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[1000px] mx-auto p-8 bg-white rounded-lg shadow space-y-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Đổi mật khẩu
          </h2>

          {/* Mật khẩu cũ */}
          <div>
            <div className="flex items-center gap-4">
              <label className="block text-sm font-medium text-gray-600 w-[250px]">
                Mật khẩu cũ
              </label>
              <input
                {...register("oldPassword")}
                type="password"
                className="flex-1 max-w-[600px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Nhập mật khẩu cũ"
              />
            </div>
            {errors.oldPassword && (
              <p className="text-red-500 text-sm mt-1 ml-[250px]">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* Mật khẩu mới */}
          <div>
            <div className="flex items-center gap-4">
              <label className="block text-sm font-medium text-gray-600 w-[250px]">
                Mật khẩu mới
              </label>
              <input
                {...register("newPassword")}
                type="password"
                className="flex-1 max-w-[600px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Nhập mật khẩu mới"
              />
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1 ml-[250px]">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Xác nhận mật khẩu mới */}
          <div>
            <div className="flex items-center gap-4">
              <label className="block text-sm font-medium text-gray-600 w-[250px]">
                Xác nhận mật khẩu mới
              </label>
              <input
                {...register("confirmNewPassword")}
                type="password"
                className="flex-1 max-w-[600px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Xác nhận mật khẩu mới"
              />
            </div>
            {errors.confirmNewPassword && (
              <p className="text-red-500 text-sm mt-1 ml-[250px]">
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-[200px] bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Đổi mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
