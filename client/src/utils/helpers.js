export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  export const getFaveProductIds = () => {
    const savedFaveProductIds = localStorage.getItem('savedFave')
      ? JSON.parse(localStorage.getItem('savedFave'))
      : [];

      return savedFaveProductIds;
  };

  export const saveFaveIds = (productIdArr) => {
    if (productIdArr.length) {
      localStorage.setItem('savedFave', JSON.stringify(productIdArr));
    } else {
      localStorage.removeItem('savedFave');
    }
  };

  export const removeFaveId = (productId) => {
    const savedFaveProductIds = localStorage.getItem('savedFave')
      ? JSON.parse(localStorage.getItem('savedFave'))
      : null;

    if(!savedFaveProductIds){
      return false;
    }

    const updatedSavedFaves = savedFaveProductIds?.filter((savedFaveProductIds) => savedFaveProductIds !== productId );
    localStorage.setItem('savedFave', JSON.stringify(updatedSavedFaves));

    return true;
  };