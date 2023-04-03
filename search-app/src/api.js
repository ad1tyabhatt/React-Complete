import axios from 'axios';

const searchImages = async (term) =>{
const response = await  axios.get('https://api.unsplash.com/search/photos',{
    headers:{
      Authorization:'Client-ID FoLLuIVdQ-ClXSnlUSEct5p-_ocx1i_xC6ZogAYsuDM'
    },
    params:{
      query:term,
    }
  })
  return response.data.results;
}

export default searchImages;