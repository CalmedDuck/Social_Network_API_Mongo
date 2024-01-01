const dateFormat = (timestamp) => {
    // Format the timestamp to a readable format
    return new Date(timestamp).toLocaleString();
  };
  
  module.exports = dateFormat;
  