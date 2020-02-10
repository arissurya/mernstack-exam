const db = require('../database')

module.exports={
    getCategory:(req,res)=>{
        let sql = `SELECT * FROM CATEGORIES`
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
    addCategory:(req,res)=>{
        let {nama}=req.body
        let sqlCheck=`SELECT * FROM CATEGORIES WHERE NAMA = '${nama}'`
        let sql = `INSERT INTO CATEGORIES VALUES (0,'${nama}')`
        try {
            db.query(sqlCheck,(err,result)=>{
                if(err) throw err
                console.log(result);
                if(result.length>0){
                    res.send({message:`Category ${nama} sudah terdaftar, coba tambahkan kategori yang lain`})
                }else{
                    db.query(sql,(err,result)=>{
                        if(err) throw err
                        console.log(result);
                        res.send(`Sukses menambahkan Category ${nama}`)
                    })  
                }
                
            })
            
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    updateCategory:(req,res)=>{
        let {id}=req.params
        let {nama}=req.body
        let sql = `UPDATE CATEGORIES SET nama='${nama}' WHERE id=${id}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(`Sukses update category ${nama}`)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    deleteCategory:(req,res)=>{
        let {id}=req.params
        let sql = `DELETE FROM CATEGORIES WHERE id=${id}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(`Sukses menghapus category dengan id: ${id}`)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}