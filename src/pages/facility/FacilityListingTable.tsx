/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Button, Image, Input, Table } from "antd";
import type {
  GetProp,
  TableColumnsType,
  TablePaginationConfig,
  TableProps,
} from "antd";
import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import stadium from "../../assets/stadium.jpg";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../shared/NoDataFound";
import { useEffect, useState } from "react";

interface TFacilities {
  index: number;
  _id: string;
  image: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

const FacilityListingTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const {
    data: facilities,
    isLoading,
    isFetching,
  } = useGetAllFacilityQuery({
    page,
    limit,
  });
  console.log({ facilities });
  const facilityData: TFacilities[] = facilities?.data || [];
  const navigate = useNavigate();

  // const [searchName, setSearchName] = useState("");
  // const [searchLocation, setSearchLocation] = useState("");

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: page,
      pageSize: limit,
      total: total,
    },
  });

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPage(pagination.current as number);
    setLimit(pagination.pageSize as number);

    setTableParams((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: pagination.current,
        pageSize: pagination.pageSize,
      },
    }));
  };

  useEffect(() => {
    if (!isFetching && facilities) {
      setTotal(facilities?.meta?.total);
      setTableParams((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: facilities?.meta?.total,
        },
      }));
    }
  }, [isFetching, facilities]);

  const myColumns: TableColumnsType<TFacilities> = [
    {
      title: "No.",
      dataIndex: "index",
      width: 80,
      render: (_text, _record, index) => page * limit - limit + index + 1,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image
          src={image ? image : stadium}
          alt="Product Image"
          width={80}
          height={60}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // Filter for searching by name
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: "100%", marginBottom: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters && clearFilters(); // Reset the filter
              confirm(); // Apply the reset
            }}
            size="small"
            style={{ width: "100%" }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record.name.toLowerCase().includes((value as string).toLowerCase()),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text: string) => (
        <span>{text.length > 50 ? `${text.substring(0, 50)}...` : text}</span>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text: string) => (
        <span>{text.length > 50 ? `${text.substring(0, 50)}...` : text}</span>
      ),
      // Filter for searching by location
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Location"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: "100%", marginBottom: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters && clearFilters();
              confirm();
            }}
            size="small"
            style={{ width: "100%" }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record.location.toLowerCase().includes((value as string).toLowerCase()),
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.pricePerHour - b.pricePerHour,
      render: (pricePerHour: number) => (
        <p className="text-center">$ {pricePerHour}</p>
      ), // Adding $ sign
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleButtonClick(record?._id)}>
          View Details
        </Button>
      ),
    },
  ];
  const handleButtonClick = (_id: string) => {
    navigate(`/facility-listing/${_id}`);
    // Add further actions here, such as navigation or API calls
  };

  if (facilityData?.length === 0) {
    return <NoDataFound />;
  }

  return (
    <div className="dark:bg-slate-500 ">
      <div className="container mx-auto py-16">
        <div className="mb-16">
          <h3 className="heading-title">Facility Listing Overview</h3>
          <p className="heading-p px-20">
            With advanced search and filtering options, players can easily find
            the perfect venue by name, location, and more. Additionally, the
            price section is sortable, ensuring that users can quickly compare
            and choose facilities that suit their budget.
          </p>
        </div>
        <Table
          dataSource={facilityData}
          columns={myColumns}
          loading={isLoading}
          // pagination={false}
          onChange={handleTableChange}
          pagination={{
            ...tableParams.pagination,
            showSizeChanger: true,
          }}
        />
        {/* <div className="my-8 flex justify-end">
          <Pagination
            showSizeChanger
            defaultCurrent={page}
            total={total}
            onChange={(p, pageSize) => {
              setPage(p);
              setLimit(pageSize);
            }}
            onShowSizeChange={onShowSizeChange}
          />
        </div> */}
      </div>
    </div>
  );
};

export default FacilityListingTable;
