import React from "react";

const Content = () => {
  return (
    <main className="w-full px-4 py-6 ">
      {/* top div */}
      <div className="w-full flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search"
          className="border-[0.5px] border-borderLight p-2 outline-none w-[360px] h-[40px] text-sm"
        />
        <button className="text-lg font-semibold bg-primaryYellow px-6 py-3">
          Add New Item
        </button>
      </div>

      {/* table */}

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#252b3bc9] uppercase bg-[#D9D9D9]">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product Code
              </th>
              <th scope="col" class="px-6 py-3">
                Product Name
              </th>
              <th scope="col" class="px-6 py-3">
                Stock
              </th>
              <th scope="col" class="px-6 py-3">
                Price/Unit
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-b-borderLight">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                CD1253
              </th>
              <td class="px-6 py-4">Honda Cable</td>
              <td class="px-6 py-4">12</td>
              <td class="px-6 py-4">Rs: 1200.00</td>
              <td class="px-6 py-4 flex gap-x-6">
                <a href="#" class="font-medium text-[#0477FF]  hover:underline">
                  Edit
                </a>
                <a href="#" class="font-medium text-[#FF0000] hover:underline">
                  Delete
                </a>
              </td>
            </tr>
            <tr class="border-b border-b-borderLight">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                CD1254
              </th>
              <td class="px-6 py-4">Bajaj Key</td>
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4">Rs: 1200.00</td>
              <td class="px-6 py-4 flex gap-x-6">
                <a href="#" class="font-medium text-[#0477FF]  hover:underline">
                  Edit
                </a>
                <a href="#" class="font-medium text-[#FF0000] hover:underline">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Content;
