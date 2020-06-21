const fs = require('fs');
const path = require('path')

const pathData = path.join(__dirname, '../data.js')
const pathMeme = path.join(__dirname, '../meme.js')

const loadOriginals = () => {
    try {
        const buffer = fs.readFileSync(pathData)
        const string = buffer.toString()
        return JSON.parse(string)
    } catch (err) {
        return []
    }
}

const saveOriginals = data => {
    fs.writeFileSync(pathData, JSON.stringify(data))
}

const loadMemes = () => {
    try {
        const buffer = fs.readFileSync(pathMeme)
        const string = buffer.toString()
        return JSON.parse(string)
    } catch (err) {
        return []
    }
}

const saveMemes = data => {
    fetch.writeFileSync(pathMeme, JSON.stringify(data))
}

// const saveMemes = data => {}

module.exports = { loadOriginals, loadMemes, saveOriginals, saveMemes };