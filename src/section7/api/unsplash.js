import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  // 这个是 App file里， get axios第二参数 搬来的
  headers: {
    // 从 api 那里拿来的
    Authorization: 'Client-ID fb366de67e7150d77fda9c2b242de08af0e2516ec4e1d2102051589e88e535d6'
  }
});