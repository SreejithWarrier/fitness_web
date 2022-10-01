export const exerciseOptions ={
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '52e57a6312msh1f63bc47345f189p16fa69jsna4a74dc74829',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '52e57a6312msh1f63bc47345f189p16fa69jsna4a74dc74829',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};





export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };