import axios from "axios";

const api = axios.create({
  baseURL: `https://dev.icmm.run/`
});

export default {
  getApplicant: ({ name, phone, dateOfBirth }) =>
    api.get(
      `api/applicant?name=${name}&phone=${phone}&dateOfBirth=${dateOfBirth}`
    ),
  applyEvent: data => api.post("api/events", data),
  getOrderById: id => axios.post(`api/order/${id}`)
};
