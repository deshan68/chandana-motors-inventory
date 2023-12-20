import React, { useState } from "react";

const AddItem = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || code == "" || stock == null || price == null) {
      setError("Please fill in all the fields");
      return;
    }

    const item = { name, code, stock, price };

    const response = await fetch(
      "https://chandana-motors-inventory-backend.vercel.app/api/items/",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setCode("");
      setPrice("");
      setStock("");
      setError(null);
      setResult("New item added successfully");
    }
  };
  return (
    <form class="max-w-sm mx-auto mt-20 h-full">
      <div class="mb-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Item Name"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="Item Code"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5">
        <input
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          type="number"
          placeholder="Stock"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5">
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price/Unit"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-sm font-semibold bg-primaryYellow px-6 py-2 rounded-sm self-end"
        >
          Add Item
        </button>
        {error && <div className="text-[#fe0000] text-sm">{error}</div>}
        {result && <div className="text-[#2eae3a] text-sm">{result}</div>}
      </div>
    </form>
  );
};

export default AddItem;
