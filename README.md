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
