import { DEFAULT_REQUEST_ERROR_MSG, DEFAULT_SERVER_ERROR_MSG } from "../utils/Constant";

export async function getDataRequest(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });

    const result = await response.json();
    return { status: response.status, message: "", data: result }
  } catch (e) {
    console.log("Data Fetch Error:", e);
  }
}

export async function postDataRequest(url: string, payload: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const statusText = response.statusText

    if (response.status === 200 || response.status === 201) {
      const result = await response.json();
      return { status: response.status, message: "", data: result };
    } else {
      const result = await response.json();
      const message = statusText === "" ? result.message : statusText
      
      return {
        status: response.status,
        message:
          message === "" ? DEFAULT_REQUEST_ERROR_MSG : message,
        data: undefined,
      };
    }
  } catch (e) {
    console.log("Data Post Error:", e);
    return { status: 500, message: DEFAULT_SERVER_ERROR_MSG, data: undefined };
  }
}
