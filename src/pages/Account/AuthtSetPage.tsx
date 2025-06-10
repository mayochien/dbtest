import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import AuthTable from "./AuthTable";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";

type PropsType = {
  pageName: string;
};

export default function AuthtSetPage({ pageName }: PropsType) {

  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    closeModal();
  };

  return (
    <>
      <PageBreadcrumb pageTitle={pageName} />
      <div className="space-y-6">

        <ComponentCard title={""} className="p-10">
          <div className="mb-5 pl-2 flex flex-wrap justify-end">
            <div className="text-sm my-1 space-x-3">
              <button
                className="tabble-head-btn btn-blue">刷新
              </button>

              <button
                className="tabble-head-btn btn-blue"
                onClick={openModal}
              >
                新增模板
              </button>
            </div>

          </div>
          <AuthTable />
        </ComponentCard>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[500px] m-4">
        <div className="relative w-full p-7 overflow-y-auto bg-white no-scrollbar rounded-xl dark:bg-gray-900 lg:p-7">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
              新增模板
            </h4>
            {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              please enter user information
            </p> */}
            <br />
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5">
                <div>
                  <Label>權限模板名稱</Label>
                  <Input type="text" value="" />
                </div>

                <div>
                  <Label>模板權限</Label>
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
