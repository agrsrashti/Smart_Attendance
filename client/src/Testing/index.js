import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
export default () => {
  const [courseID, SetCourseID] = useState('');
  
  
  const [createCourseCallback, createCourseStatus] = useMutation(
    CREATE_COURSE_MUTATION,
    {
      onError: (err) => {
        message.error(err.message);
      },
    }
  );
  const [deleteAllCourseCallback, deleteAllCourseStatus] = useMutation(
    DELETE_ALL_COURSE_MUTATION,
    {
      onError: (err) => {
        message.error(err.message);
      },
    }
  );
  const [registerStudentCallback, registerStudentStatus] = useMutation(
    REGISTER_STUDENT_MUTATION,
    {
      onError: (err) => {
        message.error(err.message);
      },
      variables: {
        courseID: courseID,
      },
    }
  );
  return (
    <div>
      <h1>Testing</h1>
      
      <Button
        onClick={() => createCourseCallback()}
        disabled={createCourseStatus.loading}
      >
        Create 50 courses {createCourseStatus.loading && <LoadingOutlined />}
      </Button>
      <Button
        onClick={() => deleteAllCourseCallback()}
        disabled={deleteAllCourseStatus.loading}
      >
        Delete All courses{' '}
        {deleteAllCourseStatus.loading && <LoadingOutlined />}
      </Button>
      <Button
        onClick={() => registerStudentCallback()}
        disabled={registerStudentStatus.loading}
      >
        Register 10 student and enrol to course{' '}
        {registerStudentStatus.loading && <LoadingOutlined />}
      </Button>
      <input
        type='text'
        name='courseID'
        onChange={(e) => SetCourseID(e.target.value)}
      ></input>
    </div>
  );
};

const CREATE_COURSE_MUTATION = gql`
  mutation testingCreateCourse {
    testingCreateCourse
  }
`;

const DELETE_ALL_COURSE_MUTATION = gql`
  mutation testingDeleteAllCourse {
    testingDeleteAllCourse
  }
`;

const REGISTER_STUDENT_MUTATION = gql`
  mutation testingRegisterStudent($courseID: String!) {
    testingRegisterStudent(courseID: $courseID)
  }
`;
