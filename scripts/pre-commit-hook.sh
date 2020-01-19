#!/bin/bash
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ ${CURRENT_BRANCH} =~ ^(master|uat|release|develop)$ ]]; then
	# 3 default branches skip this script
	# return 0 as true
	exit 0
fi
COMMIT_MSG_FILE=$1

if [[ -n "$CURRENT_BRANCH" ]]; then
  echo ${COMMIT_MSG_FILE}
fi
