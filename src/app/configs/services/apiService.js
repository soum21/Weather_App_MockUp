export default class ApiService {
  // Configs
  // show Api log to see console.log
  constructor(showApiLog, apiUrl) {
    this.showApiLog = showApiLog;
  }

  async open(requrl) {
    return new Promise((resolve, reject) => {
      fetch(requrl)
        .then((response) => {
          if (response.ok) {
            let data = response.json();
            if (this.showApiLog) {
              console.log('RES -->', data);
            }
            resolve(data);
          } else {
            let errorObj = {
              msg: 'API key is invalid',
              status: response.status
            };
            reject(errorObj);
          }
        })
        .catch((error) => {
          let errorObj = {
            msg: 'NetworkError when attempting to fetch resource.',
            status: 404
          };
          reject(errorObj);
        });
    });
  }
}
