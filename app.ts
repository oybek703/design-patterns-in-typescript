const nums: Array<number> = [1, 2, 3, 4]

async function test() {
    const a = await new Promise<string>(resolve => {
        resolve('Some value')
    })
}

const skills: Record<string, boolean> = {
    drive: true
}
