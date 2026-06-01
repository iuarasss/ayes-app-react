import Badge from "./Badge";

export default function BookingTable() {

  const bookings = [
    {
      id: 1,
      package: "Bali Adventure",
      status: "Pending",
      price: "$250"
    },
    {
      id: 2,
      package: "Japan Sakura",
      status: "Success",
      price: "$820"
    },
    {
      id: 3,
      package: "Dubai City Tour",
      status: "Pending",
      price: "$410"
    }
  ];

  return (
    <table className="w-full">

      <thead>
        <tr className="text-left border-b">
          <th className="py-3">Package</th>
          <th>Status</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>

        {bookings.map((item) => (
          <tr
            key={item.id}
            className="border-b"
          >
            <td className="py-4">
              {item.package}
            </td>

            <td>
              <Badge
                type={
                  item.status === "Success"
                    ? "success"
                    : "warning"
                }
              >
                {item.status}
              </Badge>
            </td>

            <td>{item.price}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}