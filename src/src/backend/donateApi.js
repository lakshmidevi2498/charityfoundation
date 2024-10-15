import API from "../API/API";
const api = new API();
const endPoints = "Donate";

export const donateMoney = async (details) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("This is post call in API---->");
      const response = await api.post(`${endPoints}.json`, details);

      console.log("Post response", response);

      if (response && response.data) { 
        const newEntryId = response.data.name;
 
        const getResponse = await api.get(`${endPoints}/${newEntryId}.json`);

        console.log("Fetched response for the new entry:", getResponse);

        if (getResponse && getResponse.data) { 
          resolve(getResponse.data);
          return getResponse.data;
        } else { 
        }
      } else { 
      }
    } catch (error) {
      console.error("Error in donateMoney:", error);
      reject(error);
    }
  });
};
