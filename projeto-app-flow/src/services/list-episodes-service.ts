import { repositorypodcasts } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
    const data = await repositorypodcasts();
    return data;
};