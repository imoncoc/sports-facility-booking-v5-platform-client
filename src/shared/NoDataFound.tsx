import { ExclamationCircleOutlined } from "@ant-design/icons";

const NoDataFound = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-500">
      <div className="container mx-auto py-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center">
          <span className="bg-teal-400 px-4 py-2 rounded-md ">
            <span>
              <ExclamationCircleOutlined className="me-4 " />
            </span>
            ! No Data Found!
          </span>
        </h1>
      </div>
    </div>
  );
};

export default NoDataFound;
