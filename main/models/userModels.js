const connection = require('../configs/db')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  postUser: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email=?', email, (err, result) => {
        if (!err) {
          resolve(result)
          console.log(result)
        } else {
          reject(err)
        }
      })
    })
  },

  logout: (idUser) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE user SET token = '' WHERE idUser = ?`, idUser, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
        })
    })
},
}
