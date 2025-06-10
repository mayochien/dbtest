import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

type PropsType = {
  pageName: string;
};

export default function BasicTables({pageName}: PropsType) {
  // console.log('pageName :>> ', pageName);
  return (
    <>
      {/* <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      /> */}
      <PageBreadcrumb pageTitle={pageName} />
      <div className="space-y-6">
        <ComponentCard title={pageName}>
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
