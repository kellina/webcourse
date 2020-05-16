const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 6', function(){
  console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
  tarefa1.cancel()
  console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayofweek = [new schedule.Range(1, 5)]//dia da semana de segunda a sexta (1, 5)
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
  console.log('Executando tarefa 2!', new Date().getSeconds())
})
