const db = require('../database')

module.exports={
    getConnection:(req,res)=>{
        let sql = 
        `SELECT movies.id as idmovie, movies.nama as namamovie, categories.id as idcategory, categories.nama as namacategory
        FROM movies 
        JOIN movcat ON movies.id=movcat.idmovie
        JOIN categories ON categories.id=movcat.idcategory;`
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
    addConnection:(req,res)=>{
        let {idcategory,idmovie}=req.body
        let sqlCheck=
        `SELECT movies.nama as namamovie, categories.nama as namacategory
        FROM movies 
        JOIN movcat ON movies.id=movcat.idmovie
        JOIN categories ON categories.id=movcat.idcategory where idmovie=${idmovie} and idcategory=${idcategory}`
        let sql = `INSERT INTO movcat VALUES (${idmovie},${idcategory})`
        
        try {
            
            db.query(sqlCheck,(err,result)=>{
                if(err) throw err
                console.log(result)
                if(result.length>0){
                    res.send(`Movie berjudul : "${result[0].namamovie}" sudah termasuk ke dalam kategori "${result[0].namacategory}"`)
                }else{
                    db.query(sql,(err,result)=>{
                        if(err) throw err
                        console.log(result);
                        res.send(`Sukses menambahkan movie dan kategori`)
                    })
                }
            })

            
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },

    // delete menggunakan post 

    deleteConnection:(req,res)=>{
        let {idmovie,idcategory}=req.body
        let sql = `DELETE FROM movcat WHERE idmovie=${idmovie} and idcategory=${idcategory}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(`Sukses delete movie dan kategori`)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}