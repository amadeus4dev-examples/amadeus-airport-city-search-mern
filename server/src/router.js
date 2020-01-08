const Amadeus = require("amadeus");
const router = require("express").Router();

// Getting env variables 
const { CLIENT_ID, CLIENT_SECRET } = require('./config');

const API = `api`;

// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

// Endpoint
router.get(`/${API}/airports`, async (req, res) => {
  const { page, subType, keyword } = req.query;

  // API call with params we requested from client app

  // Sending response for client
  try {
    const response = await amadeus.client.get("/v1/reference-data/locations", {
      keyword,
      subType,
      "page[offset]": page * 10
    });

    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

module.exports = router;
