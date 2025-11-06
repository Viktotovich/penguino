# Backlog

[ ] Chakra UI to build most of the frontend interactivity + components
[ ] CMS system for managing the content with admin login, news + blogs
[ ] Login + Auth system for new users, ability to moderate posts, authorization
middleware based on roles. **Google auth mandatory**
[ ] Public content feed, unlimited scroll + load batch on offset controls (RSC is
perfect for this)
[ ] Minimize all costs: optimize db queries, look out for n + 1 issues, self-ddos, etc.

[ ] Speed | Resources | SEO:

> Metadata + Dynamic Metadata
> SSG rendering for static pages
> CF proxy
> Re-usable components whenever and wherever applicable.
> A11Y concerns + lint
> Testing

[ ] Documentation (client):

> Normal user
> Admin user
> Video intro on the Hero section
> 2 CTAs: Join community | View Posts

[ ] Documentation (Open Source):

> PR instructions
> How-to's | Why to's
> Better description of everything
> Commit message standardization, no REBASE
> Separation of concerns, reduced tech debt, preference for explicit typing + explicit naming - i.e: fetchPostsForDashboard() vs fetchPosts()
> Prefer Adonis Level of structure. Yes it's an MVC and we're using RSC, but get as close as possible to remove "magic" fatigue. Explicit > Implicit
> Bug hunts, BACKLOG maintance, feature requests + issue reviews

[ ] Penguino Community Features:

> Owner Control over the posts/comments: CRUD
> Admin Control over the posts/comments: UPDATE/DELETE
> db (trx) wrap akin to Knex, to lock edits and prevent conflicts
> (Optional) Notification system? Probably too much
> Sign in / Sign Up with oAuth x HTTP cookies x 30 day rotations

[ ] Studio Penguino (CMS) controls:

> Detailed News Blocks
> Detailed Blog Posts
> Ability for users to write their own blogs |>> this is an issue, sanity free version allows only Admin and Reader roles... Consider payload CMS? Ignore CMS work until in Beta
