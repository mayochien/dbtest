import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import AccountTable from "./AccountTable";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import { useModal } from "@/hooks/useModal";

type PropsType = {
  pageName: string;
};

export default function AccountSetPage({ pageName }: PropsType) {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    closeModal();
  };

  return (
    <>
      <PageBreadcrumb pageTitle={pageName} />
      <div className="space-y-6">

        <ComponentCard title={""} className="p-10">
          <div className="mb-5 flex flex-wrap pl-2">
            <span className="text-sm my-1 mr-4">
              <span>用戶名</span>
              <input className="w-50 mx-1 p-2 rounded-sm border appearance-none text-sm focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"></input>
            </span>

            <span className="text-sm my-1 mr-4">
              <span>狀態</span>
              <input className="w-50 mx-1 p-2 rounded-sm border appearance-none text-sm focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"></input>
            </span>

            <div className="text-sm my-1 space-x-3">
              <button
                className="tabble-head-btn btn-blue">查詢
              </button>

              <button
                className="tabble-head-btn btn-blue">清空
              </button>

              <button
                className="tabble-head-btn btn-blue"
                onClick={openModal}
              >
                新增子帳號
              </button>
            </div>

          </div>
          <AccountTable />
        </ComponentCard>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[600px] m-4">
        <div className="relative w-full p-7 overflow-y-auto bg-white no-scrollbar rounded-xl dark:bg-gray-900 lg:p-7">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
              新增帳號
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              please enter user information
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Name</Label>
                  <Input type="text" value="" />
                </div>

                <div>
                  <Label>Nickname</Label>
                  <Input type="text" value="" />
                </div>

                <div>
                  <Label>OTP Limit</Label>
                  <Input type="text" value="" />
                </div>

                <div>
                  <Label>Auth Type</Label>
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


    </>
  );
}
