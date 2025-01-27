# DHIS2 cli

> This is the main entrypoint for the [@dhis2/cli](https://github.com/dhis2/cli)
> commandline interface.

## Installation

The CLI can be installed globally with `npm` or `yarn` as follows:

```sh
> yarn global add @dhis2/cli
OR
> npm install --global @dhis2/cli
```

You can also run the CLI ad-hoc with `npx`, no installation necessary (sacrifices startup performance):

```
> npx @dhis2/cli <args>
```

## Usage

```sh
> d2 --help
d2 <command>

Commands:
  d2 app                   Front-end application and library commands
  d2 cluster               Manage DHIS2 Docker clusters             [aliases: c]
  d2 create <type> [name]  Create various DHIS2 components from templates
  d2 style                 DHIS2 programmatic style for commit msgs/code
                                                                    [aliases: s]
  d2 utils                 Utils for miscellaneous operations
  d2 debug                 Debug local d2 installation

Options:
  --version   Show version number                                      [boolean]
  --config    Path to JSON config file
  -h, --help  Show help                                                [boolean]
```

## Examples

Bootstrap a new DHIS2 cli module

```sh
> d2 create cli
```

Spin up a DHIS2 server installation on port 8082 with default seeded [Sierra Leone demo database](https://github.com/dhis2/dhis2-demo-db) (requires [Docker](https://www.docker.com/products/docker-desktop))

```sh
> d2 cluster up 2.32.0 --port 8082 --seed --db-version 2.32
```
