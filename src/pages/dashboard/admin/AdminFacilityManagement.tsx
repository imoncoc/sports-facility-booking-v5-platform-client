import { useState, useEffect } from "react";
import {
  Table,
  Space,
  Button,
  Tag,
  Image,
  Popconfirm,
  Modal,
  Form,
  Input,
} from "antd";
import {
  useAddNewFacilityMutation,
  useDeleteFacilityMutation,
  useGetAllFacilityQuery,
  useUpdateFacilityMutation,
} from "../../../redux/api/facility/facilityApi";
import { toast } from "sonner";
import Loading from "../../../shared/Loading";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface TFacilityData {
  name: string;
  description: string;
  pricePerHour: number | null;
  location: string;
  image: string;
  _id?: string;
}

const AdminFacilityManagement = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [isUpdateFacility, setIsUpdateFacility] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [facilityData, setFacilityData] = useState<TFacilityData>({
    name: "",
    description: "",
    pricePerHour: null,
    location: "",
    image: "",
    _id: "",
  });

  const { data, isFetching, isLoading } = useGetAllFacilityQuery({
    page,
    limit,
  });
  const [deleteFacility] = useDeleteFacilityMutation();
  const [addNewFacility] = useAddNewFacilityMutation();
  const [updateFacility] = useUpdateFacilityMutation();

  useEffect(() => {
    if (data && data.meta) {
      setTotal(data.meta.total);
    }
  }, [data]);

  const handleCancelFacility = async (facilityId: string) => {
    try {
      const res = await deleteFacility(facilityId);

      // Check if there is a success response
      if (res?.data?.success) {
        toast.success(res.data.message || "Facility deleted successfully");
      }

      // Check if there is an error response
      else if (res?.error) {
        // Check if the error has a 'data' property and handle it accordingly
        if ("data" in res.error) {
          const baseQueryError = res.error as FetchBaseQueryError;
          const errorMessage =
            (baseQueryError.data as { message?: string }).message ||
            "An unexpected error occurred";
          toast.error(errorMessage);
        } else {
          // Handle other types of errors
          toast.error("An unexpected error occurred");
        }
      }
    } catch (error) {
      // Handle any unexpected errors during the deletion process
      console.log(error);
      toast.error("An unexpected error occurred: ");
    }
  };

  const handleEditFacility = (facility: TFacilityData) => {
    setIsUpdateFacility(true);
    setFacilityData(facility);
    setIsModalVisible(true);
  };

  const handleAddFacility = () => {
    setIsUpdateFacility(false);
    setFacilityData({
      name: "",
      description: "",
      pricePerHour: null,
      location: "",
      image: "",
    });
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    try {
      let res;

      if (isUpdateFacility) {
        // Prepare data for update
        const data = {
          name: facilityData.name,
          description: facilityData.description,
          pricePerHour: facilityData.pricePerHour,
          location: facilityData.location,
          image: facilityData.image,
        };

        const options = { data, id: facilityData._id };

        // Call the update API function
        res = await updateFacility(options);
      } else {
        // Call the add API function
        res = await addNewFacility(facilityData);
      }

      // Handle success response
      if (res?.data?.success) {
        toast.success(res.data.message || "Operation successful", {
          duration: 2000,
        });
        setIsModalVisible(false);
      }
      // Handle error response
      else if (res?.error) {
        // Check if the error has a 'data' property and handle it accordingly
        if ("data" in res.error) {
          const baseQueryError = res.error as FetchBaseQueryError;
          const errorMessage =
            (baseQueryError.data as { message?: string }).message ||
            "An unexpected error occurred";
          toast.error(errorMessage, { duration: 2000 });
        } else {
          // Handle other types of errors
          toast.error("An unexpected error occurred", { duration: 2000 });
        }
      }
    } catch (error) {
      // Handle any unexpected errors during the API call
      console.log(error);
      toast.error("An unexpected error occurred", { duration: 2000 });
    }
  };

  const columns = [
    {
      title: "No.",
      key: "index",
      render: (_: any, __: any, index: number) =>
        (page - 1) * limit + index + 1,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) =>
        image ? (
          <Image src={image} alt="facility image" width={100} />
        ) : (
          "No Image"
        ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string) =>
        description.length > 50
          ? `${description.substring(0, 50)}...`
          : description,
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (location: string) =>
        location.length > 30 ? `${location.substring(0, 30)}...` : location,
    },
    {
      title: "Status",
      dataIndex: "isDeleted",
      key: "isDeleted",
      render: (isDeleted: boolean) =>
        isDeleted ? (
          <Tag color="red">Deleted</Tag>
        ) : (
          <Tag color="green">Active</Tag>
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: TFacilityData) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure you want to delete this facility?"
            onConfirm={() => handleCancelFacility(record._id!)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete Facility</Button>
          </Popconfirm>
          <Button onClick={() => handleEditFacility(record)} type="primary">
            Edit Facility
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource = data?.data.map((facility: TFacilityData) => ({
    key: facility._id,
    ...facility,
  }));

  const handleTableChange = (pagination: any) => {
    setPage(pagination.current);
    setLimit(pagination.pageSize);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Facility Management</h1>
      <Button type="primary" onClick={handleAddFacility} className="mb-4">
        Add Facility
      </Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: limit,
          total: total,
          showSizeChanger: true,
        }}
        loading={isFetching}
        onChange={handleTableChange}
      />
      <Modal
        title={isUpdateFacility ? "Update Facility" : "Add Facility"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            {isUpdateFacility ? "Update" : "Add"}
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Name" required>
            <Input
              value={facilityData.name}
              onChange={(e) =>
                setFacilityData({ ...facilityData, name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Description" required>
            <Input
              value={facilityData.description}
              onChange={(e) =>
                setFacilityData({
                  ...facilityData,
                  description: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item label="Price Per Hour" required>
            <Input
              type="number"
              value={facilityData.pricePerHour || ""}
              onChange={(e) =>
                setFacilityData({
                  ...facilityData,
                  pricePerHour: Number(e.target.value),
                })
              }
            />
          </Form.Item>
          <Form.Item label="Location" required>
            <Input
              value={facilityData.location}
              onChange={(e) =>
                setFacilityData({ ...facilityData, location: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Image URL" required>
            <Input
              value={facilityData.image}
              onChange={(e) =>
                setFacilityData({ ...facilityData, image: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminFacilityManagement;
