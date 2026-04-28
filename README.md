## Welcome

A W.I.P. set of utility tools to manage Zabbix data. I've created this because
the [other](https://github.com/StarryShark/deno-zabbix)
[tools](https://github.com/aluisiora/zabbix-typescript-client) either assumed
you knew the request paths and/or had
[no type-safety](https://github.com/leroylim/typescript-zabbix-utils).

## Contributing

The API surface for Zabbix is huge, so any contributions are welcome. I'm not
demanding at all with PRs as long as you write the tests for them. Priority #1
is to cover as much of the API surface as possible, then next priority would be
to start thinking about optimizing and linting the with a consistent ruleset
repository.

### How to use

Everything here was made using Deno and assumes you would be using it as well.

1. Clone the repo.
2. Edit the `.env` file with your own zabbix server link and API key.
   - If you don't have an API token, you can create one in your Zabbix frontend
     in `Users > API Tokens`.
3. Edit `main.ts` with whatever functions you need. There will be some there
   commented out by default, feel free to use/delete them as you see fit and
   save.
4. Run `deno task dev` in your terminal to run `main.ts` with all proper network
   access and env permissions.

### Testing

You can test all functions with the `deno task test` command. It already has all
the proper network access and env permissions.
