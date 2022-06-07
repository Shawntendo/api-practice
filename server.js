const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 8000

const jobs = {
  'paladin':{
    'class': 'gladiator',
    'role': 'tank'
  },
  'warrior':{
    'class': 'marauder',
    'role': 'tank'
  },
  'blue mage':{
    'class': 'blue mage',
    'role': 'blue mage'
  }
}

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:jobName', (req,res)=>{
  const jobName = req.params.jobName.toLowerCase()
  if(jobs[jobName]){
    res.json(jobs[jobName])
  }
  else{
    res.json(jobs['blue mage'])
  }
})

app.get('/api', (req,res)=>{
  res.json(jobs)
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Running on ${PORT}`)
})