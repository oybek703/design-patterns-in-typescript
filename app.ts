class User {
    skills: string[]

    addSkill(skills: string[]): void
    addSkill(skills: string): void
    addSkill(skills: string[] | string): void {
        if (typeof skills === 'string') {
            this.skills.push(skills)
        } else {
            skills.forEach(skill => this.skills.push(skill))
        }
    }
}

const user = new User()
user.addSkill('testing')
user.addSkill('devops')
user.addSkill(['s1', 's2'])
