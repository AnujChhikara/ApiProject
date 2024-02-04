import  { useState } from "react";


/**
 * Quotation card
 * Powered by the Quotable API
 * https://github.com/lukePeavey/quotable
 */
export default function Quotable() {
  const [data, setData] = useState(null)

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

 

  return (
    <div className="flex flex-col text-white items-center">
        <h2 className="underline text-xl font-semibold">Random Quote Generator</h2>
       <h3 className="p-6">
      {data? <p className="border-2 bg-zinc-800  p-4 w-60 rounded-lg shadow-md shadow-white">{data.content}</p> : ''}
      </h3>

      <button className="bg-white text-zinc-800 font-lg px-4 py-2 rounded-3xl font-semibold" onClick={updateQuote}>Generate</button>
    </div>
  );
}
