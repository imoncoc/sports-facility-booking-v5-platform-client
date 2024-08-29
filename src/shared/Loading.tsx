import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="dark:bg-slate-500 bg-slate-50">
      <div className="container mx-auto py-16">
        <div className="flex justify-center items-center my-20">
          <Spin size="large" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
