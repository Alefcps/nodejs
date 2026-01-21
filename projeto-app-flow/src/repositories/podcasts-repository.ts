import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.resolve(__dirname, "podcasts.json");

export const repositorypodcasts = async (podcastName?: string): Promise<PodcastModel[]> => {
    const rawdata = fs.readFileSync(pathData, "utf8");
    let jsonFile = JSON.parse(rawdata);

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => 
            podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
        );
    }
   return jsonFile;
};