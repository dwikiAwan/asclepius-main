// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
const BASE_URL = 'https://cancer-backend-715723596343.asia-southeast2.run.app';

const ENDPOINT = {
  predict: `https://cancer-backend-715723596343.asia-southeast2.run.app/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
