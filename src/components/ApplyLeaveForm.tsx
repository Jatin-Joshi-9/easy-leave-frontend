import React, { useState } from 'react';
import { Formik, Form, type FormikHelpers } from 'formik';
import { Button } from './ui/button';
import { applyLeave } from '@/api/leave.api';
import type { LeaveApplication } from '@/types/leave.type';
import type { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import DatePicker from './ui/DatePicker';
import { LEAVE_CATEGORIES } from '@/constants/leave';

type ApplyLeaveFormValues = {
  dates: string[];
};

const initialValues: ApplyLeaveFormValues = {
  dates: [],
};


const ApplyLeaveForm = (): React.JSX.Element => {
  /*

    API REQUEST FORMAT:

    {
      "leaveCategoryId": "4a53c482-2998-436b-b663-2d6671667c0a",
      "dates": ["2026-04-03","2026-04-09"],
      "duration": "FULL_DAY",
      "startTime": "22:59",
      "description": "Sick leave"
    }

  */

  const today = new Date();
  const defaultNumberOfDaysSelected = 2;

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    to: addDays(
      new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      defaultNumberOfDaysSelected - 1,
    ),
  });

  const mockData: LeaveApplication = {
    leaveCategoryId: LEAVE_CATEGORIES[0].id,
    dates: [
      date?.from ? format(date.from, 'yyyy-MM-dd') : '',
      date?.to ? format(date.to, 'yyyy-MM-dd') : '',
    ],
    duration: 'FULL_DAY',
    startTime: '22:59',
    description: 'Sick leave',
  };

  const onSubmit = async (
    _values: ApplyLeaveFormValues,
    { resetForm }: FormikHelpers<ApplyLeaveFormValues>,
  ) => {
    try {
      const response = await applyLeave(mockData);
      console.log('Leave application submitted successfully:', response);
      resetForm();
    } catch (error) {
      console.error('Error submitting leave application:', error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label>
              Leave Category:
              </label>
              <select
                name="leaveCategoryId"
                defaultValue={mockData.leaveCategoryId}
                className="ml-2 rounded-md border border-gray-300 p-2 cursor-pointer"
              >
                {LEAVE_CATEGORIES.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
          </div>

          <DatePicker date={date} setDate={setDate} className="w-full cursor-pointer" />

          <Button
            type="submit"
            className="w-full bg-(--technogise-blue) cursor-pointer py-5"
            disabled={isSubmitting}
          >
            Submit Leave
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ApplyLeaveForm;
