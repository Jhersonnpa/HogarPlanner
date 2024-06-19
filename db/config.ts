import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    userId: column.text({primaryKey:true}),
    password: column.text(),
    name: column.text(),
    surname: column.text(),
    phone: column.number(),
    image: column.text(),
    
  }

})

const Task = defineTable({
  columns: {
    taskId: column.text({primaryKey:true}),
    name: column.text(),
  }
})

const Home = defineTable({
  columns: {
    homeId: column.text({primaryKey:true}),
    name: column.text(),
  }
})

export default defineDb({
  tables: { User, Task, Home},
})