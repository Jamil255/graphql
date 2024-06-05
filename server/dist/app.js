import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './graphql/schema.js';
import connectDb from './database/db.js';
dotenv.config({ path: './.env', });
export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;
const MongUri = process.env.MONGO_URI || "";
if (!MongUri) {
    throw new Error(" MongUri is  undefinded");
}
connectDb(MongUri);
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => "hello world",
            wow: () => "just like a wow",
            users: () => {
                return ["jamil afzal"];
            }
        }
    },
});
startStandaloneServer(server, {
    listen: {
        port,
    }
}).then(() => {
    console.log("server is  on port " + port + "in" + envMode);
})
    .catch((error) => { });
//   const app = express();
//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev')) 
//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });
//   // your routes here
//   app.get("*", (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Page not found'
//     });
//   });
//   app.use(errorMiddleware);
//   app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));started
