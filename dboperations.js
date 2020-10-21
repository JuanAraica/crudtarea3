var config = require('./dbconfig');
const sql = require('mssql');
const usuarios = require('./usuarios');


async function getUsuarios() {
    try {
        let pool = await sql.connect(config);
        let users = await pool.request().query("SELECT * from usuarios");
        return users.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUsuario(userId) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('input_parameter', sql.NVarChar, userId)
            .query("SELECT * from usuarios where Cedula = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addUsuario(usuarios) {

    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('Nombre', sql.NVarChar, usuarios.Nombre)
            .input('Apellido', sql.NVarChar, usuarios.Apellido)
            .input('Cedula', sql.NVarChar, usuarios.Cedula)
            .input('Correo', sql.NVarChar, usuarios.Correo)
            .execute('InsertUser');
        return insertUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}






module.exports = {
    getUsuarios: getUsuarios,
    getUsuario : getUsuario,
    addUsuario : addUsuario
}