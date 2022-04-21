const getAll = () => {
    return db.query('select * from user')
}
const create = ({ Full_name, email }) => {
    return db.query('INSERT into user (Full_name, email) values(?,?);',
        [Full_name, email]
    );
}

const deleteById = (idUser) => {
    return db.query('DELETE FROM user WHERE idUser = ?', [idUser])

}
const update = (idUser, { email, Full_name }) => {
    return db.query('UPDATE user set email= ? , Full_name= ?  WHERE idUser= ? ', [email, Full_name, idUser])
}



module.exports = {
    getAll,
    deleteById,
    create,
    update
}