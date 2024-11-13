export const replaceMongoId = (document) => {
  const plainObject = document.toObject();
  const { _id, ...rest } = plainObject;
  return {
    id: _id.toString(),
    ...rest,
  };
};

export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map(item => {
    return {
      id: item._id.toString(),
      ...item
    }
  }).map(({_id, ...rest}) => rest);

  return mappedArray;
}