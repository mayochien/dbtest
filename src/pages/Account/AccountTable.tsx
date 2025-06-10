// import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import { useModal } from "@/hooks/useModal";


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
  "子账号ID",
  "子账号名称",
  "子账号昵称",
  "创建日期",
  "状态",
  "登录状态",
  "OTP",
  "OTP出入款限制额度",
  "出入款限额",
  "最后登陆时间",
  "权限类型",
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
  {
    id: "89", name: "acc01", nkname: "nkname01", createDate: randomDay[9], status: "Active", loginStatus: "Active",
    otp: "", otpLimit: "500", amountLimit: "", lastLogin: randomDay[0], authType: "", control: ""
  },
  {
    id: "125", name: "acc02", nkname: "nkname02", createDate: randomDay[3], status: "Active", loginStatus: "Active",
    otp: "", otpLimit: "100", amountLimit: "", lastLogin: randomDay[1], authType: "", control: ""
  },
  {
    id: "131", name: "acc03", nkname: "nkname03", createDate: randomDay[3], status: "Pending", loginStatus: "Pending",
    otp: "", otpLimit: "100", amountLimit: "", lastLogin: randomDay[2], authType: "", control: ""
  },
  {
    id: "145", name: "acc04", nkname: "nkname04", createDate: randomDay[5], status: "Block", loginStatus: "Block",
    otp: "", otpLimit: "200", amountLimit: "", lastLogin: randomDay[3], authType: "", control: ""
  },
  {
    id: "148", name: "acc05", nkname: "nkname05", createDate: randomDay[7], status: "Active", loginStatus: "Active",
    otp: "", otpLimit: "500", amountLimit: "", lastLogin: randomDay[4], authType: "", control: ""
  },
  {
    id: "221", name: "acc06", nkname: "nkname06", createDate: randomDay[9], status: "Active", loginStatus: "Active",
    otp: "", otpLimit: "1000", amountLimit: "", lastLogin: randomDay[5], authType: "", control: ""
  },
  {
    id: "254", name: "acc07", nkname: "nkname07", createDate: randomDay[4], status: "Pending", loginStatus: "Pending",
    otp: "", otpLimit: "500", amountLimit: "", lastLogin: randomDay[6], authType: "", control: ""
  },
  {
    id: "266", name: "acc08", nkname: "nkname08", createDate: randomDay[3], status: "Pending", loginStatus: "Pending",
    otp: "", otpLimit: "10", amountLimit: "", lastLogin: randomDay[7], authType: "", control: ""
  },

]

const btnStyle = "p-1 bg-gray-100 rounded-sm border hover:bg-gray-200"

export default function AccountTable() {

  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    closeModal();
  };

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
                <TableCell className="text-gray-500">
                  {item.id}
                </TableCell>

                <TableCell className="text-gray-500">
                  {item.name}
                </TableCell>

                <TableCell>
                  {item.nkname}
                </TableCell>

                <TableCell className="max-w-20">
                  {item.createDate}
                </TableCell>

                <TableCell className="p-1 Fpy-3 text-gray-500">
                  <Badge
                    size="sm"
                    color={
                      item.status === "Active"
                        ? "success"
                        : item.status === "Pending"
                          ? "warning"
                          : "error"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>

                {/* //////// 6 ///////// */}

                <TableCell>
                  <Badge
                    size="sm"
                    color={
                      item.status === "Active"
                        ? "success"
                        : item.status === "Pending"
                          ? "warning"
                          : "error"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>

                <TableCell className="min-w-12">
                  {/* {item.otp} */}
                  <button className={btnStyle}>
                    綁定
                  </button>
                </TableCell>

                <TableCell>
                  {item.otpLimit}
                </TableCell>

                <TableCell className="min-w-30">
                  {/* {item.amountLimit}
                   */}
                  <div>人工存入单次限额：</div>
                  <div>人工取出单次限额：</div>
                  <div>人工取出单日限额：</div>
                  <div>现金入款单次限额：</div>
                  <div>现金入款单日限额：</div>
                  <div>现金出款单次限额：</div>
                  <div>现金出款单日限额：</div>
                </TableCell>

                <TableCell className="max-w-20">
                  {item.lastLogin}
                </TableCell>

                {/* //////// 11 ///////// */}

                <TableCell className="min-w-12">
                  {/* {item.authType} */}
                  <button className={btnStyle}>
                    手動配置
                  </button>
                </TableCell>

                <TableCell className="min-w-18 space-x-1 space-y-1 ">
                  {/* {item.control} */}
                  <button className={btnStyle} onClick={openModal}>
                    修改密碼
                  </button>
                  <button className={btnStyle}>
                    刪除
                  </button>
                  <button className={`${btnStyle} group relative`}
                  >
                    更多
                  </button>

                  {/* <div className="group relative m-1 flex justify-center">
                    <button className="rounded bg-amber-500 px-4 py-2 text-sm text-white shadow-sm">更多</button>
                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">✨ You hover me!</span>
                  </div> */}

                </TableCell>

              </TableRow>

            )}
          </TableBody>
        </Table>

        <button data-ripple-light="true" data-tooltip-target="tooltip"
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <div data-tooltip="tooltip"
          className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
          Material Tailwind
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[500px] m-4">
        <div className="relative w-full p-7 overflow-y-auto bg-white no-scrollbar rounded-xl dark:bg-gray-900 lg:p-7">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
              修改密碼
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              please enter user information
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5">
                <div>
                  <Label>密碼</Label>
                  <Input type="text" value="" />
                </div>

                <div>
                  <Label>重複密碼</Label>
                  <Input type="text" value="" />
                </div>

                <div>
                  <Label>OTP</Label>
                  <Input type="text" value="" />
                </div>

              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>

    </div>
  );
}
