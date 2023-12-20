import React from "react";

const AddItem = () => {
  return (
    <form class="max-w-sm mx-auto mt-20 h-full">
      <div class="mb-5">
        <input
          type="text"
          placeholder="Item Name"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5">
        <input
          type="text"
          placeholder="Item Code"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5">
        <input
          type="number"
          placeholder="Stock"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5">
        <input
          type="number"
          placeholder="Price/Unit"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="text-sm font-semibold bg-primaryYellow px-6 py-2 rounded-sm"
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default AddItem;
