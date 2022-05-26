const personResolvers=require('./person.resolver')
const courseResolvers=require('./course.resolver')
const attendanceResolvers=require('./attendance.resolver')
const facePhotoResolvers=require('./facePhoto.resolver')
const trxResolvers=require('./trx.resolver')

module.exports={
    Query: {
        ...personResolvers.Query,
        ...courseResolvers.Query,
        ...attendanceResolvers.Query,
        ...facePhotoResolvers.Query,
        ...trxResolvers.Query
    },
    Mutation: {
        ...personResolvers.Mutation,
        ...courseResolvers.Mutation,
        ...attendanceResolvers.Mutation,
        ...facePhotoResolvers.Mutation,
        ...trxResolvers.Mutation
    }
}