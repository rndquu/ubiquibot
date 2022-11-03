import { Label } from "./Label";

type IssueComments = "created" | "deleted" | "edited";

type IssueActions =
  | "assigned"
  | "closed"
  | "deleted"
  | "demilestoned"
  | "edited"
  | "labeled"
  | "locked"
  | "milestoned"
  | "opened"
  | "pinned"
  | "reopened"
  | "transferred"
  | "unassigned"
  | "unlabeled"
  | "unlocked"
  | "unpinned";
export interface Payload {
  action: IssueActions | IssueComments;
  issue: {
    url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/9";
    repository_url: "https://api.github.com/repos/ubiquity/bounty-bot";
    labels_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/9/labels{/name}";
    comments_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/9/comments";
    events_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/9/events";
    html_url: "https://github.com/ubiquity/bounty-bot/issues/9";
    id: 1368640810;
    node_id: "I_kwDOH92Z-c5Rk80q";
    number: 9;
    title: "test";
    user: {
      login: "pavlovcik";
      id: 4975670;
      node_id: "MDQ6VXNlcjQ5NzU2NzA=";
      avatar_url: "https://avatars.githubusercontent.com/u/4975670?v=4";
      gravatar_id: "";
      url: "https://api.github.com/users/pavlovcik";
      html_url: "https://github.com/pavlovcik";
      followers_url: "https://api.github.com/users/pavlovcik/followers";
      following_url: "https://api.github.com/users/pavlovcik/following{/other_user}";
      gists_url: "https://api.github.com/users/pavlovcik/gists{/gist_id}";
      starred_url: "https://api.github.com/users/pavlovcik/starred{/owner}{/repo}";
      subscriptions_url: "https://api.github.com/users/pavlovcik/subscriptions";
      organizations_url: "https://api.github.com/users/pavlovcik/orgs";
      repos_url: "https://api.github.com/users/pavlovcik/repos";
      events_url: "https://api.github.com/users/pavlovcik/events{/privacy}";
      received_events_url: "https://api.github.com/users/pavlovcik/received_events";
      type: "User";
      site_admin: false;
    };
    labels: Label[];
    state: "open";
    locked: false;
    assignee: null;
    assignees: [];
    milestone: null;
    comments: 55;
    created_at: "2022-09-10T14:38:31Z";
    updated_at: "2022-11-02T00:27:29Z";
    closed_at: null;
    author_association: "MEMBER";
    active_lock_reason: null;
    body: null;
    reactions: {
      url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/9/reactions";
      total_count: 0;
      "+1": 0;
      "-1": 0;
      laugh: 0;
      hooray: 0;
      confused: 0;
      heart: 0;
      rocket: 0;
      eyes: 0;
    };
    timeline_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/9/timeline";
    performed_via_github_app: null;
    state_reason: null;
  };
  label: {
    id: 4750706338;
    node_id: "LA_kwDOH92Z-c8AAAABGyoGog";
    url: "https://api.github.com/repos/ubiquity/bounty-bot/labels/Profit:%20%3C100%25";
    name: "Profit: <100%";
    color: "0E8A16";
    default: false;
    description: "";
  };
  repository: {
    id: 534616569;
    node_id: "R_kgDOH92Z-Q";
    name: "bounty-bot";
    full_name: "ubiquity/bounty-bot";
    private: false;
    owner: {
      login: "ubiquity";
      id: 76412717;
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc2NDEyNzE3";
      avatar_url: "https://avatars.githubusercontent.com/u/76412717?v=4";
      gravatar_id: "";
      url: "https://api.github.com/users/ubiquity";
      html_url: "https://github.com/ubiquity";
      followers_url: "https://api.github.com/users/ubiquity/followers";
      following_url: "https://api.github.com/users/ubiquity/following{/other_user}";
      gists_url: "https://api.github.com/users/ubiquity/gists{/gist_id}";
      starred_url: "https://api.github.com/users/ubiquity/starred{/owner}{/repo}";
      subscriptions_url: "https://api.github.com/users/ubiquity/subscriptions";
      organizations_url: "https://api.github.com/users/ubiquity/orgs";
      repos_url: "https://api.github.com/users/ubiquity/repos";
      events_url: "https://api.github.com/users/ubiquity/events{/privacy}";
      received_events_url: "https://api.github.com/users/ubiquity/received_events";
      type: "Organization";
      site_admin: false;
    };
    html_url: "https://github.com/ubiquity/bounty-bot";
    description: "Ubiquity GitHub Bot";
    fork: false;
    url: "https://api.github.com/repos/ubiquity/bounty-bot";
    forks_url: "https://api.github.com/repos/ubiquity/bounty-bot/forks";
    keys_url: "https://api.github.com/repos/ubiquity/bounty-bot/keys{/key_id}";
    collaborators_url: "https://api.github.com/repos/ubiquity/bounty-bot/collaborators{/collaborator}";
    teams_url: "https://api.github.com/repos/ubiquity/bounty-bot/teams";
    hooks_url: "https://api.github.com/repos/ubiquity/bounty-bot/hooks";
    issue_events_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/events{/number}";
    events_url: "https://api.github.com/repos/ubiquity/bounty-bot/events";
    assignees_url: "https://api.github.com/repos/ubiquity/bounty-bot/assignees{/user}";
    branches_url: "https://api.github.com/repos/ubiquity/bounty-bot/branches{/branch}";
    tags_url: "https://api.github.com/repos/ubiquity/bounty-bot/tags";
    blobs_url: "https://api.github.com/repos/ubiquity/bounty-bot/git/blobs{/sha}";
    git_tags_url: "https://api.github.com/repos/ubiquity/bounty-bot/git/tags{/sha}";
    git_refs_url: "https://api.github.com/repos/ubiquity/bounty-bot/git/refs{/sha}";
    trees_url: "https://api.github.com/repos/ubiquity/bounty-bot/git/trees{/sha}";
    statuses_url: "https://api.github.com/repos/ubiquity/bounty-bot/statuses/{sha}";
    languages_url: "https://api.github.com/repos/ubiquity/bounty-bot/languages";
    stargazers_url: "https://api.github.com/repos/ubiquity/bounty-bot/stargazers";
    contributors_url: "https://api.github.com/repos/ubiquity/bounty-bot/contributors";
    subscribers_url: "https://api.github.com/repos/ubiquity/bounty-bot/subscribers";
    subscription_url: "https://api.github.com/repos/ubiquity/bounty-bot/subscription";
    commits_url: "https://api.github.com/repos/ubiquity/bounty-bot/commits{/sha}";
    git_commits_url: "https://api.github.com/repos/ubiquity/bounty-bot/git/commits{/sha}";
    comments_url: "https://api.github.com/repos/ubiquity/bounty-bot/comments{/number}";
    issue_comment_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues/comments{/number}";
    contents_url: "https://api.github.com/repos/ubiquity/bounty-bot/contents/{+path}";
    compare_url: "https://api.github.com/repos/ubiquity/bounty-bot/compare/{base}...{head}";
    merges_url: "https://api.github.com/repos/ubiquity/bounty-bot/merges";
    archive_url: "https://api.github.com/repos/ubiquity/bounty-bot/{archive_format}{/ref}";
    downloads_url: "https://api.github.com/repos/ubiquity/bounty-bot/downloads";
    issues_url: "https://api.github.com/repos/ubiquity/bounty-bot/issues{/number}";
    pulls_url: "https://api.github.com/repos/ubiquity/bounty-bot/pulls{/number}";
    milestones_url: "https://api.github.com/repos/ubiquity/bounty-bot/milestones{/number}";
    notifications_url: "https://api.github.com/repos/ubiquity/bounty-bot/notifications{?since,all,participating}";
    labels_url: "https://api.github.com/repos/ubiquity/bounty-bot/labels{/name}";
    releases_url: "https://api.github.com/repos/ubiquity/bounty-bot/releases{/id}";
    deployments_url: "https://api.github.com/repos/ubiquity/bounty-bot/deployments";
    created_at: "2022-09-09T11:33:47Z";
    updated_at: "2022-11-01T23:36:42Z";
    pushed_at: "2022-09-09T11:35:26Z";
    git_url: "git://github.com/ubiquity/bounty-bot.git";
    ssh_url: "git@github.com:ubiquity/bounty-bot.git";
    clone_url: "https://github.com/ubiquity/bounty-bot.git";
    svn_url: "https://github.com/ubiquity/bounty-bot";
    homepage: null;
    size: 11;
    stargazers_count: 0;
    watchers_count: 0;
    language: "TypeScript";
    has_issues: true;
    has_projects: true;
    has_downloads: true;
    has_wiki: true;
    has_pages: false;
    forks_count: 0;
    mirror_url: null;
    archived: false;
    disabled: false;
    open_issues_count: 8;
    license: {
      key: "isc";
      name: "ISC License";
      spdx_id: "ISC";
      url: "https://api.github.com/licenses/isc";
      node_id: "MDc6TGljZW5zZTEw";
    };
    allow_forking: true;
    is_template: false;
    web_commit_signoff_required: false;
    topics: [];
    visibility: "public";
    forks: 0;
    open_issues: 8;
    watchers: 0;
    default_branch: "main";
  };
  organization: {
    login: "ubiquity";
    id: 76412717;
    node_id: "MDEyOk9yZ2FuaXphdGlvbjc2NDEyNzE3";
    url: "https://api.github.com/orgs/ubiquity";
    repos_url: "https://api.github.com/orgs/ubiquity/repos";
    events_url: "https://api.github.com/orgs/ubiquity/events";
    hooks_url: "https://api.github.com/orgs/ubiquity/hooks";
    issues_url: "https://api.github.com/orgs/ubiquity/issues";
    members_url: "https://api.github.com/orgs/ubiquity/members{/member}";
    public_members_url: "https://api.github.com/orgs/ubiquity/public_members{/member}";
    avatar_url: "https://avatars.githubusercontent.com/u/76412717?v=4";
    description: "On a mission to create the world's first scalable, sovereign, and secure digital dollar for crypto gaming.";
  };
  sender: {
    login: "pavlovcik";
    id: 4975670;
    node_id: "MDQ6VXNlcjQ5NzU2NzA=";
    avatar_url: "https://avatars.githubusercontent.com/u/4975670?v=4";
    gravatar_id: "";
    url: "https://api.github.com/users/pavlovcik";
    html_url: "https://github.com/pavlovcik";
    followers_url: "https://api.github.com/users/pavlovcik/followers";
    following_url: "https://api.github.com/users/pavlovcik/following{/other_user}";
    gists_url: "https://api.github.com/users/pavlovcik/gists{/gist_id}";
    starred_url: "https://api.github.com/users/pavlovcik/starred{/owner}{/repo}";
    subscriptions_url: "https://api.github.com/users/pavlovcik/subscriptions";
    organizations_url: "https://api.github.com/users/pavlovcik/orgs";
    repos_url: "https://api.github.com/users/pavlovcik/repos";
    events_url: "https://api.github.com/users/pavlovcik/events{/privacy}";
    received_events_url: "https://api.github.com/users/pavlovcik/received_events";
    type: "User" | "Bot" | "Organization";
    site_admin: false;
  };
  installation: {
    id: 29055097;
    node_id: "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjkwNTUwOTc=";
  };
}
