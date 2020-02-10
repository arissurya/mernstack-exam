const db = require('../database')

module.exports={
    getMovie:(req,res)=>{
        let sql = `SELECT * FROM MOVIES`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    addMovie:(req,res)=>{
        let {nama,tahun,description}=req.body
        let sql = `INSERT INTO MOVIES VALUES (0,'${nama}',${tahun},'${description}')`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(`Sukses menambah movie ${nama}`)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    updateMovie:(req,res)=>{
        let {id}=req.params
        let {nama,tahun,description}=req.body
        let sql = `UPDATE MOVIES SET nama='${nama}', tahun=${tahun}, description='${description}' WHERE id=${id}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(`Sukses update movie ${nama}`)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    deleteMovie:(req,res)=>{
        let {id}=req.params
        let sql = `DELETE FROM MOVIES WHERE id=${id}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(`sukses delete movie dengan id: ${id}`)

            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}