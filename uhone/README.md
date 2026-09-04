# CCG Playbook

The UHOne desk reference for Coverage Care Group agents. It replaces the flat
links page that used to live at `/uhone`.

Three files, no build step, no framework, no server.

| File | What it is |
| --- | --- |
| `index.html` | The whole app. HTML, CSS and JavaScript in one file. |
| `config.js` | **Everything you will ever want to change.** Links, products, scripts, numbers, notices. |
| `manifest.webmanifest` | Lets agents add it to a phone home screen. |
| `assets/` | The Coverage Care Group mark. |

## Changing what agents see

Open `config.js`, edit, commit. That is the entire workflow.

It is plain JavaScript rather than JSON on purpose: a `.js` file loads from a
local copy of the folder as well as from the web, so you can double-click
`index.html` on your own machine and everything still works.

Things worth knowing:

- **A blank `url: ""` is a feature.** The card renders as "Needs a link" instead
  of breaking. Every internal tool we do not have a URL for yet is sitting in
  that state right now, waiting on you.
- **`verify: true`** puts an amber chip on a fact that goes stale. Short term
  medical term lengths, dental waiting periods and the poverty guideline all
  carry one.
- **Announcements expire.** Give one an `expires` date and it removes itself.
  That is what keeps the board from turning into wallpaper nobody reads.
- **Bump `meta.updated`** so the footer tells the truth.
- The `glossary` list feeds the "words you will hear this week" panel under the
  new-hire checklist, and every term is searchable.
- If the page shows a red bar saying the config did not load, you deleted a
  comma or a quote. Undo the last change and refresh.

## What needs your input

These are live as blank cards and will stay blank until someone supplies them:

- ACA referral destination, which is also one of the six quick actions
- CRM, dialer or phone system, HR and time off, IT help
- The agency comp grid and the full scripts document, if we keep one
- Internal phone extensions in the `contacts` list
- The two required disclosures in `scripts` need a compliance read before the
  floor uses them. They were drawn from UHOne's own published wording, not from
  a producer guide.

## Deploying

The folder is a static site. Serving `uhone/` from any web root works.

To keep the address agents already have, point `ccgiagent.org/uhone` at this
folder. On GitHub Pages from this repository it is reachable at
`/ccg-dashboard/uhone/`.

## Data it reads

One optional network call: `meta.pulseUrl`, the same sales feed The Command
uses. It fills the small floor-numbers strip and retries every five minutes.
If it is unreachable the strip says so and every other part of the page carries
on working. Set `pulseUrl` to `""` to remove the strip entirely.

Nothing else leaves the browser. Stars, recent links, theme choice and new-hire
checklist progress are stored in the agent's own browser and never uploaded.

## Keyboard

| Key | Does |
| --- | --- |
| `/` or `Ctrl`+`K` | Jump to search |
| `↑` `↓` `Enter` | Move through results and open one |
| `Q` `B` `D` `M` `A` `S` | Open a quick action |
| `T` | Switch light and dark |
| `?` | Show the shortcut list |
| `Esc` | Clear search, close a dialog |
