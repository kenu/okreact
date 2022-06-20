import axios from 'axios';

const AjaxUtils = {
  BASE_URL: import.meta.env.VITE_API_SERVER,
  ajaxGet: async function () {
    const data = {
      name: document.getElementById('name').value
    }
    const response = await axios.get(this.BASE_URL + '/api/hello', data);
    return response.data;
  },

  ajaxPost: async function () {
    const data = {
      name: document.getElementById('name').value
    }
    const response = await axios.post(this.BASE_URL + '/api/hello', data);
    return response.data;
  }
}

export default AjaxUtils
