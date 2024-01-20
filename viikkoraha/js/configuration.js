const config = {
  //
  // TODO: Move this info to cookie or some other format of storing per user info in a mobile webapp:
  // CLIENT_ID, API_KEY, SPREADSHEET_ID
  //
  // Client ID from the Google Developer Console
  CLIENT_ID: "<replace-me>.apps.googleusercontent.com",
  // API key from the Google Developer Console
  API_KEY: "<replace-me>",
  // Array of API discovery doc URLs
  DISCOVERY_DOCS: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  // Authorization scopes required by the API; multiple scopes can be included, separated by spaces.
  SCOPES: "https://www.googleapis.com/auth/spreadsheets",
  // Spreadsheet id from Google Sheets URL
  SPREADSHEET_ID: "<replace-me>",
  // Chores sheet name and range in A1 notation
  CHORES_RANGE: "Chores!A2:D",
  // Booked chores sheet name and range in A1 notation
  BOOKINGS_RANGE: "Bookings!A2:G",
  // Summary calculations sheet name and range in A1 notation
  SUMS_RANGE: "Sums!A2:B"
};
