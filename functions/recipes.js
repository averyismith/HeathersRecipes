/* Import faunaDB sdk */
const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context) => {
  console.log('Function `recipes` invoked')
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_recipes'))))
    .then((response) => {
      const recipeRefs = response.data
      console.log('Recipe refs', recipeRefs)
      console.log(`${recipeRefs.length} recipes found`)
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllRecipeDataQuery = todoRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllRecipeDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}