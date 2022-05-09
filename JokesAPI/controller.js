const Joke = require('./jokeModel');

exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.find();
    return res.json(JSON.stringify(jokes));
}

exports.getJoke = async (req, res) => {
    try{
        if(req.params){
            const { id } = req.params;
            const joke = await Joke.findOne({_id : id});
            if(joke){
                return res.json(JSON.stringify(joke));
            }
            else{
                return res.json(JSON.stringify({error : 'Unable to Find Joke.'}));
            }
        }
        return res.json(JSON.stringify({error : 'INVALID PARAMETERS'}));
    }catch(err) {
        console.log('Issue Geting Joke');
        return res.json(JSON.stringify({message : 'Invalid'}));
    }
}

exports.createJoke = async (req, res) => {
    try{
        const {
            setup,
            punchline
        } = req.body;
        console.log(req.body);
        const newJoke = new Joke({setup, punchline});
        await newJoke.save();
        return res.json({message : "Success!!"});
    }catch(err) {
        return res.json(JSON.stringify({error : "Could not make Joke"}));
    }
}

exports.updateJoke = async (req, res) => {
    try{
        const { id } = req.params;
        const {
            setup,
            punchline
        } = req.body;
        console.log(req.body);
        const updateJoke = await Joke.findOneAndUpdate({_id : id},{
            setup,
            punchline
        });
        return res.json(JSON.stringify({message : "success"}));
    }catch(err) {
        return res.json(JSON.stringify({message : 'Invalid Update request'}));
    }
}

exports.deleteJoke = async (req, res) => {
    const { id } = req.params;
    const deleteJoke = await Joke.findOneAndDelete({_id : id});
    if(deleteJoke){
        return res.json(JSON.stringify({message : "DELETE successful"}));
    }
    else{
        return res.json0(JSON.stringify({message : "Unsuccessful"}));
    }
}