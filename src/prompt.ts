import inquirer, { Answers, QuestionCollection } from 'inquirer'

class Prompt {
	async prompts<T extends Answers>(questions: QuestionCollection<T>): Promise<T> {
		return new Promise<T>((resolve) => {
			inquirer.prompt<T>(questions).then(resolve)
		})
	}

	getTitle() {
		return this.prompts<{ title: string }>([
			{
				type: 'input',
				name: 'title',
				message: 'What is your Title?'
			}
		]).then((answers) => answers.title)
	}
}

export default new Prompt()
