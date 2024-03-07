import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () =>
  axios
    .get(baseURL)
    .then(res => res)

const create = (newPerson) =>
  axios
    .post(baseURL, newPerson)
    .then(res => res)

const update = (id, updatedPerson) =>
  axios
    .put(`${baseURL}/${id}`, updatedPerson)
    .then(res => res)

const remove = (id) =>
  axios
    .delete(`${baseURL}/${id}`)
    .then(res => res)

export default {
  getAll,
  create,
  remove,
  update
}
