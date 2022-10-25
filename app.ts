const skill: readonly [number, string] = [1, 'Dev']

skill.push('test')

const skills: readonly string[] = ['Dev', 'DevOps']
const skills1: Array<string> = ['Dev', 'DevOps']
const skills2: ReadonlyArray<string> = ['Dev', 'DevOps']

skills[1] = 'test'

skills1[0] = 'asdasd'
skills2[0] = 'asdasd'
