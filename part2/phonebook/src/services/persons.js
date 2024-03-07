import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () =>
  axios
    .get(baseURL)
    .then(res => res)

const create = (newPersonObj) =>
  axios
    .post(baseURL, newPersonObj)
    .then(res => res)

const remove = (id) =>
  axios
    .delete(`${baseURL}/${id}`)
    .then(res => res)

export default {
  getAll,
  create,
  remove
}
