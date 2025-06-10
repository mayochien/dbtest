import PageBreadcrumb from "../components/common/PageBreadCrumb";
// import PageMeta from "../components/common/PageMeta";
import BasicTableTwo from "../components/tables/BasicTables/BasicTableTwo";

type PropsType = {
  pageName: string;
};

export default function InitTablePage({ pageName }: PropsType) {
  return (
    <div>
      <PageBreadcrumb pageTitle={pageName ?? "Blank Page"} />
       <BasicTableTwo />
    </div>
  );
}
