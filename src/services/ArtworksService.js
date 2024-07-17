import { AppState } from "../AppState";
import { Artwork } from "../models/Artwork";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService"


class ArtworksService {
  async getArtwork() {
    const response = await api.get(`api/artworks`)
    logger.log(response.data);
    const artworks = response.data.artworks.map((artData) => new Artwork(artData))
    AppState.artworks = artworks
  }

  // async admireArtwork() {
  //   const response = await api.put(`api/artworks`)
  // }

}

export const artworksService = new ArtworksService