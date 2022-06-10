const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

export const applyPagination = async (reqQuery, reqName, where, limitQuery = 3, pageQuery = 1) => {
  let response
  if (reqQuery) {
    response = await Book.paginate({ category: { $in: [`${reqQuery}`] } }, { projection, limitQuery, pageQuery })
  } else if (reqName) {
    response = await Book.paginate({ 'nombre': { $regex: `^.*${reqName}.*`, $options: 'i' } }, { projection, limitQuery, pageQuery })
  } else {
    response = await Book.paginate({}, { projection, limitQuery, pageQuery })
  }
  return paginateResponse[where]
}