// api/menu.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Swiggy API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
