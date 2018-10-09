import axios from "axios";

const api = axios.create({
  // baseURL: `https://dev.icmm.run/`
  // baseURL: `https://api.icmm.run/`
  baseURL: `https://icmm-api-1409305271.ap-southeast-1.elb.amazonaws.com`
  
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
