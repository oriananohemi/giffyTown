const apiURL = 'http://api.giphy.com/v1/gifs/trending?api_key=uI6Hhzz4cZGdozXiaMugDtpVwt7ofeo1'

const getGifs = () => {
    return fetch(apiURL)
    .then(res => res.json())
    .then((result) => {
      const { data = [] } = result
      const gifs = data.map(image => image.images.downsized_medium.url)
      return gifs
      },
      (error) => {
        console.log(error)
    });
}

export default getGifs