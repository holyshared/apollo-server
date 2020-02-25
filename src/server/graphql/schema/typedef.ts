export const typeDefs = `

type LoginUser {
  name: String
  loggedIn: Boolean
}

interface Page {
  loginUser: LoginUser
}

type TopPage implements Page {
  loginUser: LoginUser 
}

`;
