function isValidObjectId(id) {
  const ObjectId = require("mongoose").Types.ObjectId;

  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
}

module.exports = isValidObjectId;
