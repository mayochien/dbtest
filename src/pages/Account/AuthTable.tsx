import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
// import Badge from "../../components/ui/badge/Badge";

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

const tableHead = [
  "模板ID",
  "模板名称",
  "操作时间",
  "操作員",
  "操作"
];

const randomDay = [
  "2025-04-18 18:13:12",
  "2025-01-23 23:20:30",
  "2025-02-09 05:26:48",
  "2024-09-28 14:31:55",
  "2024-12-10 02:00:23",
  "2025-01-31 19:42:21",
  "2025-03-03 07:30:31",
  "2025-02-09 11:32:05",
  "2025-03-15 08:03:18",
  "2025-02-12 12:09:24",
]

const tableDataFake = [
  { id: "089", name: "name089", type: "type01", lastLogin: randomDay[0], control: "" },
  { id: "125", name: "name125", type: "type02", lastLogin: randomDay[1], control: "" },
  { id: "131", name: "name131", type: "type03", lastLogin: randomDay[2], control: "" },
  { id: "145", name: "name145", type: "type04", lastLogin: randomDay[3], control: "" },
  { id: "148", name: "name148", type: "type05", lastLogin: randomDay[4], control: "" },
  { id: "221", name: "name221", type: "type06", lastLogin: randomDay[5], control: "" },
  { id: "254", name: "name254", type: "type07", lastLogin: randomDay[6], control: "" },
  { id: "266", name: "name266", type: "type08", lastLogin: randomDay[7], control: "" },
]

const btnStyle = "py-1 px-2 bg-gray-100 rounded-sm border hover:bg-gray-200"

export default function AuthTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-200 dark:border-white/[0.05]">
            <TableRow>
              {tableHead.map(_head =>
                <TableCell className="px-2 py-2 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                  {_head}
                </TableCell>
              )}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y-1 divide-gray-100 dark:divide-white/[0.05]">
            {tableDataFake.map(item =>
              <TableRow key={item.id} className="">
                <TableCell className="">
                  {item.id}
                </TableCell>

                <TableCell>
                  {item.type}
                </TableCell>

                <TableCell className="">
                  {item.lastLogin}
                </TableCell>

                <TableCell className="">
                  {item.name}
                </TableCell>

                <TableCell className="min-w-20 space-x-2 space-y-1">
                  {/* {item.control} */}
                  <button className={btnStyle}>
                    刪除
                  </button>
                  <button className={btnStyle}>
                    修改
                  </button>
                  <button className={btnStyle}>
                    查看
                  </button>
                  <button className={btnStyle}>
                    修改模板名稱
                  </button>
                </TableCell>

              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
