const { makeComposeProject } = require('../../common')
const chalk = require('chalk')
const path = require('path')
const { reporter, exec } = require('@dhis2/cli-helpers-engine')

module.exports = async ({ cacheLocation, name, path: dbPath, fat }) => {
    const destinationFile = path.resolve(dbPath)
    const composeProject = makeComposeProject(name)

    reporter.info(`Backing up database (this may take some time)...`)
    reporter.debug(`Dumping database to ${chalk.bold(destinationFile)}`)

    if (fat) {
        reporter.info(
            `Performing fat backup, ${chalk.bold(
                'including'
            )} Analytics and Resource tables`
        )
    } else {
        reporter.info(
            `Performing lean backup, ${chalk.bold(
                'excluding'
            )} Analytics and Resource tables`
        )
    }

    await exec({
        cmd: './scripts/backup.sh',
        cwd: cacheLocation,
        args: [destinationFile, fat ? 'full' : ''],
        pipe: false,
        env: {
            DOCKER_COMPOSE: `docker-compose -p ${composeProject}`,
        },
    })
}
