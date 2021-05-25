import { setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import core from '@actions/core';

export default function main() {
  core.debug(JSON.stringify(process.env));
  core.debug(JSON.stringify(context));

  const pr = context?.payload?.pull_request;
  if (!pr) throw 'Not a pull request';

  // additions
  setOutput('additions', pr.additions);
  // deletions
  setOutput('deletions', pr.deletions);
  // changed_files
  setOutput('changed_files', pr.changed_files);
  // commits
  setOutput('commits', pr.commits);
  // assignee
  setOutput('assignee', pr.assignee);
  // number
  setOutput('number', pr.number);
  // title
  setOutput('title', pr.title);
  // body
  setOutput('body', pr.body);
  // created_at
  setOutput('created_at', pr.created_at);
  // updated_at
  setOutput('updated_at', pr.updated_at);
  // url
  setOutput('url', pr.html_url);
  // base_branch
  setOutput('base_branch', pr.base.ref);
  // base_commit
  setOutput('base_commit', pr.base.sha);
  // head_branch
  setOutput('head_branch', pr.head.ref);
  // head_commit
  setOutput('head_commit', pr.head.sha);
  // draft
  setOutput('draft', pr.draft);
}

try {
  main();
} catch (err) {
  setFailed(err.message);
}
