import request from '@/helpers/request'
import { friendlyDate } from '@/helpers/utils'

const URL = {
  GET: '/notes/trash',
  REVERT: '/notes/:noteId/revert',
  DELETE: '/notes/:noteId/confirm'
}

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      request(URL.GET).then(res => {
        res.data = res.data.sort((note1, note2) => {
          let flag = note1.createdAt < note2.createdAt ? 1 : -1;
          return flag;
        })
        res.data.forEach(notebook => {
          notebook.createdAtFriendly = friendlyDate(notebook.createdAt)
          notebook.updatedAtFriendly = friendlyDate(notebook.updatedAt)
        })
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  deleteNote({ noteId }) {
    return request(URL.DELETE.replace(':noteId', noteId), 'DELETE')
  },
  revertNote({ noteId }) {
    return request(URL.REVERT.replace(':noteId', noteId), 'PATCH')
  }
}