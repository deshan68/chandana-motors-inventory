import React from "react";

const Content = () => {
  return (
    <main className="w-full px-4 py-6">
      {/* top div */}
      <div className="w-full flex justify-between">
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
    </main>
  );
};

export default Content;
