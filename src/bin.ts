import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import Init from './init.js'
import { Argv } from './constants.js'

yargs(hideBin(process.argv))
	.command<Argv>(
		'test',
		'生成枚举和映射',
		(yargs) => {
			return yargs
				.option('t', {
					alias: 'title',
					describe: '请输入描述',
					type: 'string',
				})
		},
		Init.test
	)
	.alias('v', 'version')
	.fail((msg, err, yargs) => {
		console.log(msg, '错误')
	})
	.help('h').argv
