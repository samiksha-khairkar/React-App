const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SignUpLogin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Connected to db"))
        .catch((err) => console.log("Error connecting to db", err));
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

app.get("/home", async (req, res) => {
    const user = await User.find();
    try {
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post("/", async (req, res) => {
    const user = User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
});

app.post("/login", (req, res) => {
    const { name, password } = req.body;
    User.findOne({ name: name })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect!")
                }
            } else {
                res.json("No record exist")
            }
        })
})
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});