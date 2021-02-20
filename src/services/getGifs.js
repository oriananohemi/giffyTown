const API_KEY = 'uI6Hhzz4cZGdozXiaMugDtpVwt7ofeo1'


const getGifs = ({keyword = 'top'} = {}) => {
  const API_URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}`
  return fetch(API_URL)
    .then(res => res.json())
    .then((result) => {
      const { data = [] } = result
      const gifs = data.map(image => {
        const { title, images, id } = image 
        const { url } = images.downsized_medium
        return {title, id, url}
      })
      return gifs
      },
      (error) => {
        console.log(error)
    });
}

export default getGifs