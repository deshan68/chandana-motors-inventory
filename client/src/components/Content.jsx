import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [items, setItems] = useState([]);
  const [searchField, setSearchField] = useState([]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
    const filteredItems = items?.filter((item) => {
      return (
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.code.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchField(filteredItems);
    console.log(filteredItems);
  };

  // https://chandana-motors-inventory-backend.vercel.app/

  const fetchItems = async () => {
    const response = await fetch(
      "https://chandana-motors-inventory-backend.vercel.app/api/items"
    );
    const json = await response.json();
    setItems(json);
    setSearchField(json);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(
      "https://chandana-motors-inventory-backend.vercel.app/api/items/" + id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    fetchItems();
  };

  return (
    <main className="w-full px-4 py-6 ">
      {/* top div */}
      <div className="w-full flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          className="border-[0.5px] border-borderLight p-2 outline-none md:w-[360px] w-56 h-8 md:h-[40px] md:text-sm text-[10px]"
        />
        <Link to={"/add"}>
          <button className="md:text-base text-[11px] md:font-semibold font-normal bg-primaryYellow md:px-6 md:py-3 px-2 py-1">
            Add New Item
          </button>
        </Link>
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
            {searchField?.map((item) => (
              <tr key={item._id} class="border-b border-b-borderLight">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.code}
                </th>
                <td class="px-6 py-4">{item.name}</td>
                <td class="px-6 py-4">{item.stock}</td>
                <td class="px-6 py-4">Rs: {item.price}.00</td>
                <td class="px-6 py-4 flex gap-x-6">
                  <Link
                    to={`/edit/${item._id}`}
                    state={{
                      id: item._id,
                      name: item.name,
                      code: item.code,
                      stock: item.stock,
                      price: item.price,
                    }}
                    class="font-medium text-[#0477FF]  hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    class="font-medium text-[#FF0000] hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Content;
