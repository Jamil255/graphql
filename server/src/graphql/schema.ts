export const schema = `#graphql
type User{
    _id:ID!
    fullName: String!
    email: String!
    password: String!

}
type Todo{
    _id:ID!
    value:String!
    userID:String!
}
type Img{
    _id:ID!
    url:String!

}
type SampleUser{
    fullName:String!
    email:String!
    password:String!
}
type Query {
    users:[User]
    todos:[Todo]
    img(id:ID!):Img
}
type Mutation{
    newUser(fullName:String!,email:String!,password:String!):String
    login(email:String!,password:String):String
}
`
