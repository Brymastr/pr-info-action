# pr-info-action

GitHub Action to fetch info from a pr when run in a pull_request context

## Outputs

| property      | description                                    |
| ------------- | ---------------------------------------------- |
| additions     | number of code additions                       |
| deletions     | number of code deletions                       |
| changed_files | number of changed files                        |
| commits       | number of commits included in the pull request |
| assignee      | pull request assignee                          |
| number        | pull request number                            |
| title         | title of the pull request                      |
| body          | body of the pull request                       |
| created_at    | timestamp when the pull request was created    |
| updated_at    | timestamp when the pull request was updated    |
| url           | url of the pull request                        |
| base_branch   | destination branch of the pull request         |
| head_branch   | source branch of the pull request              |
| draft         | boolean representing if this pr is a draft     |
