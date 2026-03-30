import React from 'react';
import { Formik, Form, type FormikHelpers } from 'formik';
import { Button } from './ui/button';
import { applyLeave } from '@/api/leave.api';
import type { LeaveApplication } from '@/types/leave.type';

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

  const mockData: LeaveApplication = {
    leaveCategoryId: '5c1b1de0-6363-4dd3-8507-ca974c220c32',
    dates: ['2026-04-03', '2026-04-09'],
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
        <Form>
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
