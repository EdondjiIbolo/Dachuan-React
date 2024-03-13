import { Link } from "react-router-dom";
import { Status } from "./Status";
import { useState } from "react";

export function Quote({ quote }) {
  const [showStatus, setShowStatus] = useState(false);
  return (
    <>
      <td
        className="text-center text-xs p-2 cursor-pointer hover:text-blue-600 hover:font-medium"
        data-label=" 询价单号"
      >
        <Link to={`/panel/quote/${quote.id}`}> {quote.id}</Link>
      </td>
      <td className="text-center text-xs p-2" data-label=" 名称">
        {quote.technology}
      </td>
      <td className="text-center text-xs p-2" data-label=" 询价时间">
        {quote.date.split("T")[0]}
      </td>
      <td className="text-center text-xs p-2" data-label=" 零件款数">
        1
      </td>
      <td className="text-center text-xs p-2" data-label=" 总件数">
        {quote.quantity}
      </td>
      <td className="text-center text-xs p-2" data-label=" 报价时间">
        {quote.shipping_date ?? "--"}
      </td>
      <td className="text-center text-xs p-2" data-label=" 总价">
        {quote.price}
      </td>
      <td className="text-center text-xs p-2" data-label=" 交货时间">
        {quote.lead_time}
      </td>
      <td
        className="text-center text-xs hover:text-blue-600 hover:font-semibold p-2 cursor-pointer"
        data-label=" 状态"
        onClick={() => setShowStatus(true)}
      >
        {quote.status}
      </td>
      <td className="text-center text-xs p-2" data-label=" 操作">
        NO
      </td>

      <Status showStatus={showStatus} setShowStatus={setShowStatus} />
    </>
  );
}
