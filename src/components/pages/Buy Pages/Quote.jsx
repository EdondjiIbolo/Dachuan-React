import { Link } from "react-router-dom";

export function Quote({ id = "45236" }) {
  return (
    <>
      <tr className="p-4">
        <td className="text-center text-sm p-2 cursor-pointer">
          <Link to={`list/:${id}`}> SQ7241705373578506</Link>
        </td>
        <td className="text-center text-sm p-2">零件2303093</td>
        <td className="text-center text-sm p-2">2024-01-16 10:52:59</td>
        <td className="text-center text-sm p-2">1</td>
        <td className="text-center text-sm p-2">2</td>
        <td className="text-center text-sm p-2">2024-01-16 14:22:33</td>
        <td className="text-center text-sm p-2">￥417.48</td>
        <td className="text-center text-sm p-2">6 个工作日</td>
        <td className="text-center text-sm p-2">已过期</td>
        <td className="text-center text-sm p-2">NO</td>
      </tr>
    </>
  );
}
