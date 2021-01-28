  
import { database} from './config';
export const submitUser = (Id, Name, Position) => {
    return new Promise(function(resolve, reject) {
      let key;
      if (Id != null) {
        key = Id;
      } else {
        key = database()
          .ref()
          .push().key;
      }
      let dataToSave = {
        Id: key,
        Name: Name,
        Position: Position,
      };
      database()
        .ref('users' + key)
        .update(dataToSave)
        .then(snapshot => {
          resolve(snapshot);
        })
        .catch(err => {
          reject(err);
        });
    });
  };