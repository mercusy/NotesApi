const express  = require('express') 
const sqlite3  = require('sqlite3') 


const app = express()
const sql = sqlite3

const db = new sql.Database('./database.db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/notes',(_req,res) =>{
    db.all('SELECT * FROM notes;',(_error, notes) =>{
        res.send(notes)
    })
})
app.delete('/api/notes',(req,res) =>{
    const {id} = req.body
    db.run('DELETE FROM notes WHERE id = ?',[id],(error) =>{
        res.send(req.body)
    })

})

app.post('/api/notes', (req, res) =>{
    const {title} = req.body
    const {content} = req.body
    const {cardcolor} = req.body

    db.run('INSERT INTO notes (title,content,cardcolor) VALUES (?,?,?)', [title,content,cardcolor], (error) =>{
        db.all('SELECT * FROM notes WHERE id =(SELECT MAX(id) FROM notes) ',(error,note) =>{
            res.send(note)
        })
    })

})
app.patch('/api/notes', (req,res) =>{
    const { id } = req.body
    const {title} = req.body
    const {content} = req.body
    const {cardcolor} = req.body
    db.run('UPDATE notes SET title = ?, content = ?, cardcolor = ? WHERE id = ?',[title,content,cardcolor,id],(error,patched) =>{
        db.all('SELECT * FROM notes WHERE id = ?',[id],(error,patchednote) =>{
            res.send(patchednote)
        })
    })
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('api running on port'+ (process.env.PORT || 8080));
})
