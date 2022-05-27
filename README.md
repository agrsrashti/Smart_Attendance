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

1. Make sure all the env variables have been assigned in ".env" file.
5. Open CMD under directory "server", type "npm run dev".
6. The server is running on http://localhost:4000.

### Client

1. The client script is built using ReactJS.
2. Open CMD under directory "client", type "npm start".
3. The client is running on http://localhost:3000.

---


