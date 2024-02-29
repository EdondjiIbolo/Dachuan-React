import { Link } from "react-router-dom";
import { Status } from "./Status";
import { useState } from "react";

export function Quote({ id = "45236" }) {
  const [showStatus, setShowStatus] = useState(false);
  return (
    <>
      <tr className="p-4 border border-gray-400 rounded">
        <td
          className="text-center text-xs p-2 cursor-pointer hover:text-blue-600 hover:font-medium"
          data-label=" 询价单号"
        >
          <Link to={`/panel/order/${id}`}> SQ7241705373578506</Link>
        </td>
        <td className="text-center text-xs p-2" data-label=" 名称">
          零件2303093
        </td>
        <td className="text-center text-xs p-2" data-label=" 询价时间">
          2024-01-16 10:52:59
        </td>
        <td className="text-center text-xs p-2" data-label=" 零件款数">
          1
        </td>
        <td className="text-center text-xs p-2" data-label=" 总件数">
          2
        </td>
        <td className="text-center text-xs p-2" data-label=" 报价时间">
          2024-01-16 14:22:33
        </td>
        <td className="text-center text-xs p-2" data-label=" 总价">
          ￥417.48
        </td>
        <td className="text-center text-xs p-2" data-label=" 交货时间">
          6 个工作日
        </td>
        <td
          className="text-center text-xs hover:text-blue-600 hover:font-semibold p-2 cursor-pointer"
          data-label=" 状态"
          onClick={() => setShowStatus(true)}
        >
          已过期
        </td>
        <td className="text-center text-xs p-2" data-label=" 操作">
          NO
        </td>
      </tr>
      <Status showStatus={showStatus} setShowStatus={setShowStatus} />
    </>
  );
}
