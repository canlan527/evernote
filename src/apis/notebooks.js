import request from '../helpers/request'
import { friendlyDate } from '../helpers/utils'
const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id'
}

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      request(URL.GET).then(res => {
        res.data = res.data.sort((notebook1, notebook2) => notebook1.createdAt < notebook2.createdAt)
        
        res.data.forEach(notebook => {
          notebook.friendlyCreatedAt = friendlyDate(notebook.createdAt)
        })

        console.log(res.data[0].createdAt)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  addNotebook({ title = '' } = { title: '' }) {
    return request(URL.ADD, 'POST', { title })
  },
  updateNotebook(notebookId, { title = '' } = { title: '' }) {
    return request(URL.UPDATE.replace(':id', notebookId), 'PATCH', { title })
  },
  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(':id', notebookId), 'DELETE')
  }
}
