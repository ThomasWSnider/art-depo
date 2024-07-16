

export class Artwork {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.imgUrl = data.imgUrls.regular
    this.attribution = data.attribution
    this.admirers = data.admirers
  }
}