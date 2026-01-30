import React from "react";

function DashboardJadval({ post }) {
  return (
    <div className="mt-[32px] rounded-[12px] border-[1px] border-[#E5E7EB] p-[24px]">
      <h2 className="mb-[4px] text-[20px] font-semibold text-[#0F1729]">
        Recent Posts
      </h2>
      <p className="mb-[24px] text-[14px] text-[#6B7280]">
        Manage and monitor your latest content
      </p>

      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="p-[16px] text-left text-[14px] font-medium text-[#6B7280]">
              Title
            </th>
            <th className="p-[16px] text-left text-[14px] font-medium text-[#6B7280]">
              Category
            </th>
            <th className="p-[16px] text-left text-[14px] font-medium text-[#6B7280]">
              Date
            </th>
            <th className="p-[16px] text-left text-[14px] font-medium text-[#6B7280]">
              Status
            </th>
            <th className="p-[16px] text-right text-[14px] font-medium text-[#6B7280]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {post?.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="p-[16px] text-left text-[16px] font-medium text-[#0F1729]">
                {item.title}
              </td>
              <td className="px-[14px]">
                <span className="rounded-[10px] bg-[#4346EF1A] px-[8px] py-[4px] text-left text-[12px] text-[#4346EF]">
                  {item?.category?.name || "—"}
                </span>
              </td>
              <td className="p-[16px] text-left text-[#6B7280]">
                {item?.created_at?.slice(0, 10)}
              </td>
              <td className="p-[16px] text-left">Active</td>
              <td className="flex justify-end gap-2 p-[16px]">
                <button className="text-red-500">Delete</button>
                <button className="text-blue-500">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardJadval;