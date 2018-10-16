import axios from "axios";

const api = axios.create({
  baseURL: 'https://dev.iyaforum.com'
  
});

export default {
  getApplicant: ({ name, phone, dateOfBirth }) =>
    api.get(
      `api/applicant?name=${name}&phone=${phone}&dateOfBirth=${dateOfBirth}`
    ),
  applyEvent: data => api.post("api/event", data),
  getOrderById: id => api.get(`api/order/${id}`),
  checkPhoneAvailable: phone => api.get(`api/applicant/phone/${phone}`),
  validateInvitation: code => api.get(`/api/applicant/series/${code}`)
};
