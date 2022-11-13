export default defineEventHandler((event) => {
  const query = useQuery(event)
  return {
    message: `Hello ${query.name} 👋`,
   //message: `Hello` + ` quentin ${event.context.params.name}`, //${query.name} 👋`,
  }
})


// export default defineEventHandler((event) => `Hello, ${event.context.params.name}!`)
