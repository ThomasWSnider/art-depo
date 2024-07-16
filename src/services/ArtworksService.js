import { api } from "./AxiosService"


class ArtworksService {
  async getArtwork() {
    const response = await api.get(`api/artworks`)
    console.log(response.data);
  }


}

export const artworksService = new ArtworksService