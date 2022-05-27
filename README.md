# Smart Attendance

An attendance tracking application with facial recognition.

## Credit

Facial Analytics API: [Face-API](https://github.com/justadudewhohacks/face-api.js/)

## Getting Started

### Requirement

1. You will need a dependency managers such as npm, yarn, brew, etc.
2. As for me, I am using npm.

### Step 1: Download the source code

1. If you have "git" installed, open CMD and type "git clone https://github.com/

### Step 2: Install the dependency

1. Open project in Visual Studio Code or any IDE.
2. Open CMD in VSCode, type command: cd client && npm i
3. Open another terminal, type command: cd server && npm i

### Step 3: Follow steps given in doc to set env variables


## Pretrained Weight Files

1. The model have been put in the "client/public/models" folder.
2. The models is downloaded from https://github.com/justadudewhohacks/face-api.js/weights, the API is built on top of TensorflowJS.
3. There are 4 pretrained models (face detection, facial landmark detection, face recognition 128 feature vectors extraction, facial expression).
4. Download the shard weight file and model json file.
5. For face detection, there are 3 types of model architecture (MTCNN, SSD MobileNet V1, Tiny Face)
6. As for me, I chose SSD MobileNet V1 for face detection.
7. Model download checklist:
   - face_expression_model-shard1
   - face_expression_model-weights_manifest.json
   - face_landmark_68_model-shard1
   - face_landmark_68_model-weights_manifest.json
   - face_recognition_model-shard1
   - face_recognition_model-shard2
   - face_recognition_model-weights_manifest.json
   - ssd_mobilenetv1_model-shard1
   - ssd_mobilenetv1_model-shard2
   - ssd_mobilenetv1_model-weights_manifest.json

---

## Running the application

### Server

1. Make sure the 10 env variables have been assigned in ".env" file.
2. Install the "nodemon" which can restart the server script automatically if changes are detected.
3. Open CMD, execute command "npm i -g nodemon" to install nodemon globally.
4. Take a look at "server/package.json".
5. Open CMD under directory "server", type "npm run dev".
6. The server is running on http://localhost:4000.

### Client

1. The client script is built using ReactJS, through CRA command.
2. Open CMD under directory "client", type "npm start".
3. The client is running on http://localhost:3000.

---

## User Guidelines

### Lecturer

1. Register an account.
2. Create a course.
3. Give the course unique ID to your students.
4. Students need to send the request to enrol, approve the enrolment.
5. You do not need upload student's face photo, which will be done by students.
6. After all student enrolled, select a course and take the attendance.
7. You can see how many face photo of all the enrolled students have uploaded.
8. Ensure that the students upload their face photo, otherwise there is no facial data of that student for reference.
9. Only those enrol in the particular course will be counted into dataset for facial classification.
10. Inside attendance taking form, select the time, date and camera.
11. Wait for all the models being loaded.
12. Set the approriate threshold distance as you wish.
13. Submit the attendance form if finished.
14. Visualize the attendance data in "Attendance History", or you can enter a particular course and click "View Attendance History".
15. You can "Warn" or "Kick" the student out of a course.
16. The face photo of the student who is kicked out will not be counted next time taking the attendance.

### Student

1. Register an account.
2. Enrol a course.
3. Wait for approval from the lecturer.
4. Upload your face photo in "Face Gallery", best to have at least 2 face photo.
5. Wait for all models being loaded.
6. The system will perform face detection, ensuring only a single face exist and rejecting photo with empty face or multiple faces.
7. The photo will be uploaded to the image storage.
8. When your lecturer take the attendance of a particular course, all your uploaded facial data will be counted into the dataset for facial comparison.
9. Visualize the attendance data in "Attendance History", or you can enter a particular course and click "View Attendance History".
