import Axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne, bounds) => {
  try {
    const { data: { data } } = await Axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "d25a2e7776msh87c756cb3156a1ap1612b1jsn924b37a5eb7c",
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};