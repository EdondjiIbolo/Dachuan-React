import { Link } from "react-router-dom";

export function Quote({ quote }) {
  console.log(quote.shipping_date);
  return (
    <>
      <td
        className="text-center text-xs p-2 cursor-pointer hover:text-blue-600 hover:font-medium text-nowrap"
        data-label=" Order No. "
      >
        <Link to={`/panel/quote/${quote.id}`}>{quote.id}</Link>
      </td>
      <td
        className="text-center text-xs p-2 text-nowrap font-semibold"
        data-label=" User"
      >
        {quote.name}
      </td>
      <td className="text-center text-xs p-2 font-semibold" data-label=" Phone">
        {quote.phone}
      </td>
      <td className="text-center text-xs p-2" data-label=" Technology">
        {quote.technology}
      </td>
      <td className="text-center text-xs p-2" data-label=" Material">
        {quote.material}
      </td>
      <td className="text-center text-xs p-2" data-label=" Finishing">
        {quote.finishing}
      </td>
      <td className="text-center text-xs p-2" data-label=" Tolerance">
        {quote.tolerance}
      </td>
      <td className="text-center text-xs p-2" data-label=" Threads">
        {quote.threads}
      </td>
      <td className="text-center text-xs p-2" data-label=" Address">
        {quote.address}
      </td>
      <td
        className="text-center text-xs hover:text-blue-600 hover:font-semibold p-2 text-nowrap cursor-pointer"
        data-label=" Shipping date"
      >
        {quote.shipping_date ?? "--"}
      </td>
      <td className="text-center text-xs p-2" data-label=" Quantity">
        {quote.quantity}
      </td>
      <td className="text-center text-xs p-2" data-label=" Amount">
        {quote.price ?? "--"}
      </td>
      <td className="text-center text-xs p-2" data-label=" Status">
        {quote.status}
      </td>
      <td className="text-center text-xs p-2" data-label=" Actions">
        <div>
          <a
            href={`https://api-chuantai-dev-dbab.4.us-1.fl0.io/file/${quote.url}`}
            download
            className="p-1 bg-orange-500 text-white min-w-min text-nowrap hover:scale-110 transition-all duration-150 ease-linear hover:shadow-md rounded"
          >
            view File
          </a>
        </div>
      </td>
    </>
  );
}
