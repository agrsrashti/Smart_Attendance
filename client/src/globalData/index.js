import { actionTypes } from "./actionTypes";
import { modalItems } from "./customModalItems";
import { inputSize, maxDescriptorDistance } from "./faceAPI";
import { DEFAULT_UPLOAD_OPTION, UPLOAD_OPTION } from "./facePhoto";

import {
  FETCH_ATTENDANCE_LIMIT,
  FETCH_COURSE_LIMIT,
  FETCH_ENROLMENT_LIMIT,
  FETCH_FACE_PHOTOS_LIMIT,
} from "./limitFetch";

import { INITIAL_COLLAPSE } from "./navbar";

import {
  DEFAULT_WEBCAM_RESOLUTION,
  webcamResolutionType,
} from "./webcamResolutionType";

import {
  DEFAULT_ATTENDANCE_MODE,
  attendanceMode,
} from "./attendanceMode";

export { INITIAL_COLLAPSE };
export {
  FETCH_COURSE_LIMIT,
  FETCH_ENROLMENT_LIMIT,
  FETCH_ATTENDANCE_LIMIT,
  FETCH_FACE_PHOTOS_LIMIT,
};
export { actionTypes };
export { webcamResolutionType, DEFAULT_WEBCAM_RESOLUTION };
export { inputSize, maxDescriptorDistance };
export { DEFAULT_UPLOAD_OPTION, UPLOAD_OPTION };
export { modalItems };
export { DEFAULT_ATTENDANCE_MODE, attendanceMode };
