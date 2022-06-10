export const applyPagination = (reqQuery, reqName, where, limitQuery = 3, pageQuery = 1) => {
  let response
  if (reqQuery) {
    response = await Book.paginate({ category: { $in: [`${reqQuery}`] } }, { projection, limitQuery, pageQuery })
  } else if (reqName) {
    response = await Book.paginate({ 'nombre': { $regex: `^.*${reqName}.*`, $options: 'i' } }, { projection, limitQuery, pageQuery })
  } else {
    response = await Book.paginate({}, { projection, limitQuery, pageQuery })
  }
  res.json(paginateResponse[where])
}