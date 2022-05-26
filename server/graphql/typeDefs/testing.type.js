const { gql } = require('apollo-server');
module.exports = gql`
  extend type Mutation {
    testingRegisterStudent(courseID: String!): String
    testingCreateCourse: String
    testingDeleteAllCourse: String

    obtainStudentWarning(participantID: ID!, courseID: String!): Int!

}
`;
