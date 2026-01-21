import {repositorypodcasts} from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositorypodcasts(podcastName);
    return data;
};