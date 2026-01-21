import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controller/podcasts-controller";
import { queryObjects } from "v8";

const server = http.createServer (async (req: http.IncomingMessage, res: http.ServerResponse) => {

  //queryString
  //http://localhost:3333/api/episode?podcastName=flow
  
  const [baseUrl, queryString] = req.url?.split("?") || [];
  //listar todos os episódios
   if (req.method === "GET" && baseUrl === "/api/list"){
     await getListEpisodes(req, res);
   }
   if (req.method === "GET" && baseUrl === "/api/episode"){
    await getFilterEpisodes(req, res);
   }
   
});
const PORT = process.env.PORT;

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});