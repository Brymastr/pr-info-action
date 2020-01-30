const core = require('@actions/core');
const github = require('@actions/github');

function main() {
  const pr = github.context.payload.pull_request;
  if (!pr) throw 'Not a pull request';

  // additions
  core.setOutput('additions', pr.additions);
  // deletions
  core.setOutput('deletions', pr.deletions);
  // changed_files
  core.setOutput('changed_files', pr.changed_files);
  // commits
  core.setOutput('commits', pr.commits);
  // assignee
  core.setOutput('assignee', pr.assignee);
  // number
  core.setOutput('number', pr.number);
  // title
  core.setOutput('title', pr.title);
  // body
  core.setOutput('body', pr.body);
  // created_at
  core.setOutput('created_at', pr.created_at);
  // updated_at
  core.setOutput('updated_at', pr.updated_at);
  // url
  core.setOutput('url', pr.html_url);
  // base_branch
  core.setOutput('base_branch', pr.base.ref);
  // base_commit
  core.setOutput('base_commit', pr.base.sha);
  // head_branch
  core.setOutput('head_branch', pr.head.ref);
  // head_commit
  core.setOutput('head_commit', pr.head.sha);
  // draft
  core.setOutput('draft', pr.draft);
}

try {
  main();
} catch (err) {
  core.setFailed(err.message);
}
