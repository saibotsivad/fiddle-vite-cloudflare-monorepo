import { dirname } from 'node:path'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

export const readJson = async (filepath) => {
	const string = await readFile(filepath, 'utf8')
	return JSON.parse(string)
}

export const writeJson = async (filepath, data) => {
	await mkdir(dirname(filepath), { recursive: true })
	const json = JSON.stringify(data, undefined, 4)
	await writeFile(filepath, json, 'utf8')
	return json
}
