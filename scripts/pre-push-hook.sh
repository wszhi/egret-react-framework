#!/bin/bash

currBranch=$(git rev-parse --abbrev-ref HEAD)

if [[ $currBranch =~ ^(master|uat|release|develop)$ ]]; then
	exit 0
fi

if [[ $currBranch =~ ^(feature|chore|spike|test|fix|refactor|enhancement)/.*$ ]]; then
	exit 0
else
	echo ""
	echo "*******************  Notice ***************************"
	echo ""
	echo "Current branch name is: ${currBranch}"
	echo "Notice: Non-default branch name must begin with 'feature/','chore/','fix/','spike/','test/', 'refactor/', 'enhancement/'"
	echo ""
	echo "******************  Notcie ***************************"
	echo ""
	exit 1
fi
