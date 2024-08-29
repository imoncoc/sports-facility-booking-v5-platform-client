import { useNavigate, useParams } from "react-router-dom";
import {
  useAddBookingsMutation,
  useCheckFacilityAvailabilityQuery,
  useGetFacilityDetailsQuery,
} from "../../redux/api/facility/facilityApi";
import {
  Button,
  Card,
  DatePicker,
  DatePickerProps,
  TimePicker,
  TimePickerProps,
} from "antd";
import Meta from "antd/es/card/Meta";
import { TFacility } from "../../types/user";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { toast } from "sonner";
import Loading from "../../shared/Loading";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/userSlice";

type TOptions = {
  id?: string;
  date?: string;
};

type TimeOptions = {
  startTime?: string;
  endTime?: string;
};

const BookingForm = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const { id } = useParams();
  const { data, isError } = useGetFacilityDetailsQuery(id);
  const facility: TFacility = data?.data?.[0];
  const [options, setOptions] = useState<TOptions | null>(null);
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(null);
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(null);
  const [timeOptions, setTimeOptions] = useState<TimeOptions>({});
  const [isCheckAvailability, setIsCheckAvailability] = useState(false);
  const [dates, setDates] = useState<Dayjs | null>(null);
  const navigate = useNavigate();
  const { data: checkAvailabilityData, isFetching } =
    useCheckFacilityAvailabilityQuery(options, {
      skip: !isCheckAvailability,
    });
  const [addBookings] = useAddBookingsMutation();

  const onChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      setDates(date);
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const optionData = { id, date: formattedDate };
      setOptions(optionData);
    } else {
      toast.warning("please Select Date");
    }
  };

  console.log({ isCheckAvailability });

  const handleOnChangeDate = () => {
    if (options) {
      setIsCheckAvailability(true);

      setTimeout(() => {
        setIsCheckAvailability(false);
      }, 3000);
    }
  };

  const onChangeStartTime: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm");

      setTimeOptions((prev) => ({
        ...prev,
        startTime: formattedTime,
      }));
      setStartTimeValue(time); // Set the selected time value
    } else {
      toast.warning("No time selected");
    }
  };
  const onChangeEndTime: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm");
      setTimeOptions((prev) => ({
        ...prev,
        endTime: formattedTime,
      }));
      setEndTimeValue(time); // Set the selected time value
    } else {
      toast.warning("No time selected");
    }
  };

  console.log({ timeOptions });

  const handleProceed = async () => {
    const { startTime, endTime } = timeOptions;
    if (!user) {
      toast.warning("Please login First for Booking.");
      navigate("/login", { replace: true });
    } else if (!startTime || !endTime) {
      toast.error("Please select both start time and end time.");
      return;
    } else if (startTime && endTime && startTime >= endTime) {
      toast.warning("Start time must be earlier than end time.");
      return;
    }
    const proceedOptions = {
      facility: id,
      date: options?.date,
      startTime: startTime,
      endTime: endTime,
    };

    const res = await addBookings(proceedOptions);

    if (res?.error) {
      toast.error(res?.error?.data?.message);
    }

    if (res?.data?.success) {
      window.location.href = res?.data?.data?.payment_url;
    }

    console.log("handleProceed clicked proceedOptions : ", proceedOptions);
    console.log("handleProceed clicked res: ", res);
  };

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error Occur</p>;
  }
  return (
    <div className="dark:bg-neutral-800 dark:text-white">
      <div className="container mx-auto py-16">
        <div className="flex gap-16">
          <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src={facility?.image} />}
          >
            <Meta
              title={
                facility.name.length > 50
                  ? `${facility.name.substring(0, 50)}...`
                  : facility.name
              }
              description={
                facility.description.length > 100
                  ? `${facility.description.substring(0, 100)}...`
                  : facility.description
              }
            />
            <div className="mt-4">
              <p className="text-center font-medium text-2xl text-strongCyan">
                $ {facility.pricePerHour}
              </p>
            </div>
          </Card>

          {/* Form */}
          <div className="bg-neutral-100 w-full rounded-lg shadow-lg">
            <p className="text-center py-4 bg-teal-100 text-2xl font-semibold text-darkViolet rounded-t-lg">
              Booking For
            </p>
            <div className="px-8 py-4">
              <p className="text-darkViolet font-semibold text-xl">
                {facility.name}
              </p>
              <p className="text-darkGrayishBlue py-2">
                {facility.description}
              </p>
            </div>
            <div className="px-8 py-4 flex gap-6 items-end justify-end border-t  border-gray-200">
              <div className="flex-1">
                <p className="text-sm text-darkViolet font-medium mb-2">
                  Pick Your Date
                </p>
                <DatePicker
                  className="w-full"
                  value={dates}
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-end ">
                <Button
                  type="primary"
                  onClick={handleOnChangeDate}
                  className="px-8"
                >
                  Check Availability
                </Button>
              </div>
            </div>

            {checkAvailabilityData && (
              <div className="px-8">
                <p>Available Slots</p>
                <div className="flex flex-col gap-4">
                  {checkAvailabilityData &&
                    checkAvailabilityData?.data?.map(
                      (item: any, index: number) => (
                        <div key={index} className="flex gap-8">
                          <div className="flex flex-col flex-1">
                            <p>Start Time</p>
                            <p className="bg-neutral-800 text-white py-1 px-4">
                              {item?.startTime}
                            </p>
                          </div>
                          <div className="flex flex-col flex-1">
                            <p>end Time</p>
                            <p className="bg-neutral-800 text-white py-1 px-4">
                              {item?.endTime}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                </div>
              </div>
            )}

            {/* Time Picker */}
            {checkAvailabilityData && (
              <div className="py-4 px-8">
                <div className=" flex gap-8">
                  <div className="flex gap-8">
                    <div>
                      <p>Start Time</p>
                      <TimePicker
                        value={startTimeValue}
                        onChange={onChangeStartTime}
                        format="HH:mm"
                        minuteStep={1}
                        showNow={false}
                      />
                    </div>
                    <div>
                      <p>End Time</p>
                      <TimePicker
                        value={endTimeValue}
                        onChange={onChangeEndTime}
                        format="HH:mm"
                        minuteStep={1}
                        showNow={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="py-4">
                  <Button onClick={handleProceed} type="primary">
                    Proceed to pay
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
