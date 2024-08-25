import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            console.log('01')
            try {
                const localStorageItem = localStorage.getItem(itemName);

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                } else {
                    const parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                }

                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 2000)
    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    // Cuando son solo 2 elementos se retorna, con un array: return [item, saveItem]
    // Cuando son mas de 2 elementos, se retorna como un objeto return {}
    return {
        item,
        saveItem,
        loading,
        error
    };
  }
  
export { useLocalStorage }
