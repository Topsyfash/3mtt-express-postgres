import connection from "../config/index.js";

const handleGetUsers = async (req, res) => {
    try {
        const result = await connection.query("SELECT * FROM users");

        if (result.rowCount === 0) {
            return res.status(404).send("No users found");
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }

}

const handleGetOneUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await connection.query("SELECT * FROM users WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const handleCreateUser = async (req, res) => {
    const { name, email, age } = req.body;

    try {
        if (!name || !email | !age) {
            return res.status(400).send("Name,email,age must not be empty")
        }
        const result = await connection.query(
            "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
            [name, email, age]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const handleUpdateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        if (!name || !email | !age) {
            return res.status(400).send("Name,email,age must not be empty")
        }
        const result = await connection.query(
            "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
            [name, email, age, id]
        );
        if (result.rowCount === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const handleDeleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await connection.query("DELETE FROM users WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
}
export { handleGetUsers, handleGetOneUser, handleCreateUser, handleUpdateUser, handleDeleteUser }