import {spawn} from 'child_process'
import inquirer from 'inquirer'

(async function () {
    const {width} = await inquirer.prompt([{
        type: 'number',
        name: 'width',
        message: 'Width'
    }])
    const {height} = await inquirer.prompt([{
        type: 'number',
        name: 'height',
        message: 'Height'
    }])
    const {path} = await inquirer.prompt([{
        type: 'input',
        name: 'path',
        message: 'Path'
    }])
    const {filename} = await inquirer.prompt([{
        type: 'input',
        name: 'filename',
        message: 'Filename'
    }])
    console.log(path + filename + '.mp4')
    const res = spawn('ffmpeg', [
        '-i', path,
        '-c:v', 'libx264',
        '-s', `${width}x${height}`,
        path + filename + '.mp4'
    ])
    res.stdout.on('data', chunk => {
        console.log(chunk.toString())
    })
    res.stderr.on('data', chunk => {
        console.log(chunk.toString())
    })
    res.on('close', () => {
        console.log('Ready!')
    })
})()
